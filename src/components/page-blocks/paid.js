import React from "react"
import { Link } from "gatsby"
import { useIntl, FormattedMessage } from "react-intl"

import deliveryImg from "assets/img/delivery-flow.svg"

const PaidBlock = () => {
  const intl = useIntl()

  return (
    <div className="content-block v-payment-confirmation">
      <img src={deliveryImg} alt="Delivery" />

      <h3>
        <FormattedMessage
          id="paid-block.payment_successful"
          defaultMessage="Payment was successful"
        />
      </h3>
      <h1>
        <FormattedMessage
          id="paid-block.thanks"
          defaultMessage="Thank you{lineBreak}for your purchase"
          values={{ lineBreak: <br /> }}
        />
      </h1>
      <div className="cta-row">
        <Link to={`/${intl.locale}/`} className="button">
          <FormattedMessage
            id="paid-block.back_to_hp"
            defaultMessage="Back to homepage"
          />
        </Link>
      </div>
    </div>
  )
}

export default PaidBlock
