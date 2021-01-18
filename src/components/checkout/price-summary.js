import React from "react"
import { FormattedMessage, defineMessages, useIntl } from "react-intl"

const messages = defineMessages({
  priceNote: {
    id: "price-summary.price_note",
    defaultMessage: "excl. VAT",
  },
})

const PriceSummary = ({
  pillQuantity,
  pillPrice,
  pillCurrency,
  shippingPrice,
  shippingCurrency,
}) => {
  const intl = useIntl()

  return (
    <>
      <div className="checkout-form__summary-line">
        <h3 className="checkout-form__summary-item">
          {pillQuantity}x Karmen Pill:
        </h3>
        <div className="checkout-form__summary-price">
          <span className="checkout-form__summary-price-main">
            {pillPrice} {pillCurrency}
          </span>
          <span className="checkout-form__summary-price-note">
            {intl.formatMessage(messages.priceNote)}
          </span>
        </div>
      </div>
      <div className="checkout-form__summary-line">
        <h3 className="checkout-form__summary-item">
          <FormattedMessage
            id="checkoutform.shipping"
            defaultMessage="Shipping:"
          />
        </h3>
        <div className="checkout-form__summary-price">
          <span className="checkout-form__summary-price-main">
            {shippingPrice} {shippingCurrency}
          </span>
          <span className="checkout-form__summary-price-note">
            {intl.formatMessage(messages.priceNote)}
          </span>
        </div>
      </div>
    </>
  )
}

export default PriceSummary
