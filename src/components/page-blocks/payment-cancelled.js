import React from "react"
import { Link } from "gatsby"
import { useIntl, FormattedMessage } from "react-intl"

const PaymentCancelledBlock = () => {
  const intl = useIntl()

  return (
    <div className="content-block v-payment-confirmation">
      <h1>
        <FormattedMessage
          id="payment-cancelled-block.thanks"
          defaultMessage="Payment was cancelled"
          values={{ lineBreak: <br /> }}
        />
      </h1>
      <div className="cta-row">
        <Link to={`/${intl.locale}/`} className="button">
          <FormattedMessage
            id="payment-cancelled-block.back_to_hp"
            defaultMessage="Back to homepage"
          />
        </Link>
      </div>
    </div>
  )
}

export default PaymentCancelledBlock
