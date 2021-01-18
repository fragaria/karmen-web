import React from "react"
import { FormattedMessage, defineMessages, useIntl } from "react-intl"

const messages = defineMessages({
  priceNote: {
    id: "price-total.price_note",
    defaultMessage: "excl. VAT",
  },
})

const PriceTotal = ({ totalPrice, totalCurrency }) => {
  const intl = useIntl()

  return (
    <>
      <div className="checkout-form__summary-line checkout-form__summary-line--total">
        <h3 className="checkout-form__summary-item">
          <FormattedMessage id="checkoutform.total" defaultMessage="Total:" />
        </h3>
        <div className="checkout-form__summary-price">
          <span className="checkout-form__summary-price-main">
            {totalPrice} {totalCurrency}
          </span>
          <span className="checkout-form__summary-price-note">
            {intl.formatMessage(messages.priceNote)}
          </span>
        </div>
      </div>
    </>
  )
}

export default PriceTotal
