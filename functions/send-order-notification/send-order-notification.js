const process = require('process')
const nodemailer = require('nodemailer')

const { validateEmail, validateLength } = require('./validations')

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});


const NAME_MIN_LENGTH = 3
const NAME_MAX_LENGTH = 50

const textTemplate = `
Nová objednávka z karmen.tech od %SENDER_NAME% <%SENDER_EMAIL%>:

%QUANTITY% x Karmen Pill: %PILL_PRICE% %PILL_CURRENCY%
Doprava: %SHIPPING_PRICE% %SHIPPING_CURRENCY%
Celkem: %TOTAL_PRICE% %TOTAL_CURRENCY%

Platební metoda: %PAYMENT_METHOD%

Detaily klienta:

Jméno: %SENDER_NAME%
Email: %SENDER_EMAIL%
Telefon: %SENDER_PHONE%
Jazyk: %LANG%
Firma: %COMPANY%
Tax ID (IČ): %TAX_ID%
Ulice: %STREET%
Město: %CITY%
PSČ: %ZIP%
Stát: %STATE%
Země: %COUNTRY%
`;

const handler = async (event) => {
  if (!process.env.CONTACT_EMAIL) {
    return {
      statusCode: 500,
      body: 'process.env.CONTACT_EMAIL must be defined',
    }
  }

  console.log(event.body);

  const body = JSON.parse(event.body)

  try {
    validateLength('body.name', body.name, NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }

  try {
    validateEmail('body.email', body.email)
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }

  if (!body.quantity) {
    return {
      statusCode: 403,
      body: "Missing body.quantity"
    };
  }
  if (!body.pillPrice) {
    return {
      statusCode: 403,
      body: "Missing body.pillPrice"
    };
  }
  if (!body.pillCurrency) {
    return {
      statusCode: 403,
      body: "Missing body.pillCurrency"
    };
  }
  if (!body.shippingPrice) {
    return {
      statusCode: 403,
      body: "Missing body.shippingPrice"
    };
  }
  if (!body.shippingCurrency) {
    return {
      statusCode: 403,
      body: "Missing body.shippingCurrency"
    };
  }
  if (!body.totalPrice) {
    return {
      statusCode: 403,
      body: "Missing body.totalPrice"
    };
  }
  if (!body.totalCurrency) {
    return {
      statusCode: 403,
      body: "Missing body.totalCurrency"
    };
  }

  const descriptor = {
    from: `${body.name} <${process.env.CONTACT_EMAIL}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `Nová objednávka Karmen od ${body.name}`,
    text: textTemplate
      .replace("%SENDER_NAME%", body.name)
      .replace("%SENDER_EMAIL%", body.email)
      .replace("%SENDER_PHONE%", body.phone)
      .replace("%QUANTITY%", body.quantity)
      .replace("%PILL_PRICE%", body.pillPrice)
      .replace("%PILL_CURRENCY%", body.pillCurrency)
      .replace("%SHIPPING_PRICE%", body.shippingPrice)
      .replace("%SHIPPING_CURRENCY%", body.shippingCurrency)
      .replace("%TOTAL_PRICE%", body.totalPrice)
      .replace("%TOTAL_CURRENCY%", body.totalCurrency)
      .replace("%LANG%", body.lang)
      .replace("%COMPANY%", body.company)
      .replace("%TAX_ID%", body.vatId)
      .replace("%STREET%", body.street)
      .replace("%CITY%", body.city)
      .replace("%ZIP%", body.postalCode)
      .replace("%STATE%", body.state)
      .replace("%COUNTRY%", body.country)
  }

  try {
    await transport.sendMail(descriptor)
    return {
      statusCode: 200,
      body: "",
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin": "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials": true,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: error.message,
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin": "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials": true,
      },
    }
  }
}

module.exports = { handler }
