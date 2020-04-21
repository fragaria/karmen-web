import React from "react"
import { FormattedMessage } from "react-intl"

import CheckoutBooth from "components/checkout/booth"

import pillImg from "assets/img/pill-on-pillar.png"

const BuyBlock = props => {
  return (
    <article {...props}>
      <div className="buy">
        <div className="buy__image">
          <img src={pillImg} alt="Karmen Pill" />
        </div>
        <div className="buy__form">
          <h1 className="page-block-headline">
            <FormattedMessage
              id="buy-block.headline"
              defaultMessage="Buy Karmen"
            />
          </h1>
          <CheckoutBooth />
        </div>
      </div>
    </article>
  )
}

export default BuyBlock
