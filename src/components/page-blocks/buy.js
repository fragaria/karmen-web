import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import CheckoutBooth from "components/checkout/booth"

import { Image } from "components/image"

const BuyBlock = props => {
  const data = useStaticQuery(graphql`
    query {
      pill: file(relativePath: { eq: "pill-on-pillar.png" }) {
        ...fluidImage600
      }
    }
  `)

  return (
    <article {...props}>
      <div className="buy">
        <div className="buy__image">
          <Image file={data.pill} alt="Karmen Pill" />
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
