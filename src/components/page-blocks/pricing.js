import React from "react"
import { FormattedMessage } from "react-intl"
import ProductsList from "./products-list"

const PricingBlock = ({ location, ...props }) => {
  return (
    <section {...props}>
      <div className="pricing">
        <div className="pricing-circle"></div>
        <div className="content-block">
          <h1 className="page-block-headline sitenav__anchorpush">
            <span className="sitenav__anchor" id="buy"></span>
            <FormattedMessage
              id="pricing-block.headline"
              defaultMessage="Jaké řešení si vybrat?"
            />
          </h1>
          <ProductsList />
        </div>
      </div>
    </section>
  )
}

export default PricingBlock
