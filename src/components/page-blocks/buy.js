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
          fluid(maxWidth: 600, srcSetBreakpoints: [300, 584], quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          checkout {
            enabled
          }
          company {
            contactEmail
          }
        }
      }
    }
  `)

  const checkoutEnabled = data.site.siteMetadata.checkout.enabled

  return (
    <div className="content-block content-block--sitenavwidth content-block--shift-mobile">
      <article {...props}>
        <div className="buy">
          <div className="buy__image">
            <Image file={data.pill} alt="Karmen Pill" loading="eager" />
          </div>
          <div className="buy__form">
            <h1 className="page-block-headline">
              <FormattedMessage
                id="buy-block.headline"
                defaultMessage="Buy Karmen"
              />
            </h1>
            {!checkoutEnabled && (
              <div className="buy__disabled-warning typeset">
                <p className="s5">
                  <FormattedMessage
                    id="buy-block.disabled_temporarily"
                    defaultMessage="Due to unexpectedly large number of orders, we had to <strong>temporarily disable our online store</strong> to be able fulfill the orders within a reasonable time. Please <contactLink>drop us an email</contactLink> in case you're interested in buying Karmen and we'll let you know once the store is back online."
                    values={{
                      strong: (...chunks) => <strong>{chunks}</strong>,
                      contactLink: (...chunks) => (
                        <a
                          href={`mailto:${data.site.siteMetadata.company.contactEmail}`}
                        >
                          {chunks}
                        </a>
                      ),
                    }}
                  />
                </p>
              </div>
            )}
            {checkoutEnabled && <CheckoutBooth />}
          </div>
        </div>
      </article>
    </div>
  )
}

export default BuyBlock
