module.exports.renderTemplate = (template, context) => {
  return template
    .replace(/%SENDER_NAME%/g, context.name)
    .replace(/%SENDER_EMAIL%/g, context.email)
    .replace(/%SENDER_MESSAGE%/g, context.message)
}
