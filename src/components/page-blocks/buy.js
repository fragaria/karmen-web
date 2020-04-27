import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import CheckoutBooth from "components/checkout/booth"

import { Image } from "components/image"

const BuyBlock = props => {
  const data = useStaticQuery(graphql`
    query {
      pill: file(relativePath: { eq: "pill-on-pillar.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, srcSetBreakpoints: [ 300, 584 ], quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="content-block content-block--sitenavwidth content-block--shift-mobile">
      <article {...props}>
        <div className="buy">
          <div className="buy__image">
            <Image file={data.pill} alt="Karmen Pill" critical />
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
    </div>
  )
}

export default BuyBlock
