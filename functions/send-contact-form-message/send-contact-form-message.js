const process = require("process")
const nodemailer = require("nodemailer")

const { validateEmail, validateLength } = require("./validations")
const { renderTemplate } = require("../render-template-contact-form")

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

const subjectTemplateCS = `Zprava z webu`
const textTemplateCS = `
Zprava z webu
Jmeno: %SENDER_NAME%
E-mail: %SENDER_EMAIL%
Zprava: %SENDER_MESSAGE%
`

const subjectTemplateEN = `Message from website`
const textTemplateEN = `
Message from website
Jmeno: %SENDER_NAME%
E-mail: %SENDER_EMAIL%
Zprava: %SENDER_MESSAGE%
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

  if (!body.lang) {
    return {
      statusCode: 403,
      body: "Missing body.lang",
    }
  }

  const lang = body.lang

  const descriptor = {
    from: `${body.name} <${process.env.CONTACT_EMAIL}>`,
    to: process.env.CONTACT_EMAIL,
    subject: lang === "cs" ? subjectTemplateCS : subjectTemplateEN,
    text: renderTemplate(lang === "cs" ? textTemplateCS : textTemplateEN, body),
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
