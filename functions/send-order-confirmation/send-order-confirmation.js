const process = require("process")
const nodemailer = require("nodemailer")

const { validateEmail, validateLength } = require("./validations")

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
})

const NAME_MIN_LENGTH = 3
const NAME_MAX_LENGTH = 50

const subjectTemplateEN = `Your Karmen order has been submitted`
const textTemplateCS = `
Vážený zákazníku,

moc děkujeme za vaši objednávku Karmen! Co vás nyní čeká? Objednávku zkontrolujeme, potvrdíme a budeme vás informovat o průběhu expedice.

Při platbě převodem na účet – prosím vyčkejte na email od nás s platebními údaji, který vám zašleme spolu s fakturou.


Níže najdete shrnutí své objednávky:

%QUANTITY% x Karmen Pill: %PILL_PRICE% %PILL_CURRENCY%
Doprava: %SHIPPING_PRICE% %SHIPPING_CURRENCY%
Celkem: %TOTAL_PRICE% %TOTAL_CURRENCY%

Přejeme Vám perfektní zbytek dne
Team Karmen

Kontakt: karmen@karmen.tech
Telefon +420 222 581 311
`

const subjectTemplateCS = `Děkujeme vám za vaši objednávku Karmen`
const textTemplateEN = `
Hey,

thanks for ordering Karmen! You are 11/10 awesome. Your order has been submitted and soon to be checked and confirmed. We will inform you about the shipping.

In case you've selected a bank transfer — please wait for an email with payment instructions. Your invoice will be attached.

Please find below a summary of your order:

%QUANTITY% x Karmen Pill: %PILL_PRICE% %PILL_CURRENCY%
Shipping: %SHIPPING_PRICE% %SHIPPING_CURRENCY%
Total: %TOTAL_PRICE% %TOTAL_CURRENCY%

Have an awesome day
Karmen Team

Contact: karmen@karmen.tech
Phone: +420 222 581 311
`

const handler = async event => {
  if (!process.env.CONTACT_EMAIL) {
    return {
      statusCode: 500,
      body: "process.env.CONTACT_EMAIL must be defined",
    }
  }

  console.log(event.body)

  const body = JSON.parse(event.body)

  try {
    validateLength("body.name", body.name, NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }

  try {
    validateEmail("body.email", body.email)
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    }
  }

  if (!body.quantity) {
    return {
      statusCode: 403,
      body: "Missing body.quantity",
    }
  }
  if (!body.pillPrice) {
    return {
      statusCode: 403,
      body: "Missing body.pillPrice",
    }
  }
  if (!body.pillCurrency) {
    return {
      statusCode: 403,
      body: "Missing body.pillCurrency",
    }
  }
  if (!body.shippingPrice) {
    return {
      statusCode: 403,
      body: "Missing body.shippingPrice",
    }
  }
  if (!body.shippingCurrency) {
    return {
      statusCode: 403,
      body: "Missing body.shippingCurrency",
    }
  }
  if (!body.totalPrice) {
    return {
      statusCode: 403,
      body: "Missing body.totalPrice",
    }
  }
  if (!body.totalCurrency) {
    return {
      statusCode: 403,
      body: "Missing body.totalCurrency",
    }
  }
  if (!body.lang) {
    return {
      statusCode: 403,
      body: "Missing body.lang",
    }
  }

  const lang = body.lang

  const descriptor = {
    from: `Karmen <${process.env.CONTACT_EMAIL}>`,
    to: `${body.name} <${body.email}>`,
    subject: lang === "cs" ? subjectTemplateCS : subjectTemplateEN,
    text: (lang === "cs" ? textTemplateCS : textTemplateEN)
      .replace("%SENDER_NAME%", body.name)
      .replace("%SENDER_EMAIL%", body.email)
      .replace("%QUANTITY%", body.quantity)
      .replace("%PILL_PRICE%", body.pillPrice)
      .replace("%PILL_CURRENCY%", body.pillCurrency)
      .replace("%SHIPPING_PRICE%", body.shippingPrice)
      .replace("%SHIPPING_CURRENCY%", body.shippingCurrency)
      .replace("%TOTAL_PRICE%", body.totalPrice)
      .replace("%TOTAL_CURRENCY%", body.totalCurrency),
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
