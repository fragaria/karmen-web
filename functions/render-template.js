module.exports.renderTemplate = (template, context) => {
  return template
    .replace(/%SENDER_NAME%/g, context.name)
    .replace(/%SENDER_EMAIL%/g, context.email)
    .replace(/%SENDER_PHONE%/g, context.phone)
    .replace(/%QUANTITY%/g, context.quantity)
    .replace(/%PAYMENT_METHOD%/g, context.paymentMethod)
    .replace(/%PILL_PRICE%/g, context.pillPrice)
    .replace(/%PILL_CURRENCY%/g, context.pillCurrency)
    .replace(/%PILL_VARIANT%/g, context.pillVariant)
    .replace(/%SHIPPING_PRICE%/g, context.shippingPrice)
    .replace(/%SHIPPING_CURRENCY%/g, context.shippingCurrency)
    .replace(/%TOTAL_PRICE%/g, context.totalPrice)
    .replace(/%TOTAL_CURRENCY%/g, context.totalCurrency)
    .replace(/%LANG%/g, context.lang)
    .replace(/%COMPANY%/g, context.company)
    .replace(/%TAX_ID%/g, context.vatId)
    .replace(/%STREET%/g, context.street)
    .replace(/%CITY%/g, context.city)
    .replace(/%ZIP%/g, context.postalCode)
    .replace(/%STATE%/g, context.state)
    .replace(/%COUNTRY%/g, context.country)
    .replace(/%OS_TYPE%/g, context.osType)
    .replace(/%PRINTER_TYPE%/g, context.printerType)
    .replace(/%PACKETA_POINT%/g, context.packetaPoint)
}
