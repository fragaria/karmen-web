import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl, FormattedMessage } from "react-intl"

import { Image } from "components/image"
import PriceSummary from "components/checkout/price-summary";
import PriceTotal from "components/checkout/price-total";

const OrderConfirmationBlock = ({ params, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      pill: file(relativePath: { eq: "pill-on-pillar.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, srcSetBreakpoints: [300, 584], quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const intl = useIntl()
  const learnLink = intl.locale === "cs" ? "/cs/#meet" : "/en/#meet"

  const pillQuantity = params.get("quantity");
  const pillPrice = params.get("pillPrice");
  const pillCurrency = params.get("pillCurrency");
  const shippingPrice = params.get("shippingPrice");
  const shippingCurrency = params.get("shippingCurrency");
  const totalPrice = params.get("totalPrice");
  const totalCurrency = params.get("totalCurrency");

  return (
    <div className="content-block content-block--sitenavwide content-block--shift-mobile">
      <article {...props}>
        <div className="buy">
          <div className="buy__image">
            <Image file={data.pill} alt="Karmen Pill" loading="eager" />
          </div>
          <div className="buy__form">
            <h1 className="page-block-headline">
              <FormattedMessage
                id="order-confirmation.headline"
                defaultMessage="Buy Karmen"
              />
            </h1>

            <div className="payment-confirmation">
              <div className="payment-confirmation__notification">
                <span className="payment-confirmation__notification-sentence">
                  <FormattedMessage
                    id="order-confirmation.thankyou"
                    defaultMessage="Thank you for your order!"

                  />
                </span>
                <span className="payment-confirmation__notification-sentence">
                  <FormattedMessage
                    id="order-confirmation.notification"
                    defaultMessage="We've sent you a confirmation email with payment instructions."
                  />
                </span>
              </div>
              <div className="payment-confirmation__details checkout-form__body checkout-form__body--wdivider">
                <h2>
                  <FormattedMessage
                    id="order-confirmation.summary"
                    defaultMessage="Order summary"
                  />
                </h2>
                <PriceSummary
                  pillQuantity={pillQuantity}
                  pillPrice={pillPrice}
                  pillCurrency={pillCurrency}
                  shippingPrice={shippingPrice}
                  shippingCurrency={shippingCurrency}
                />
                <PriceTotal
                  totalPrice={totalPrice}
                  totalCurrency={totalCurrency}
                />
              </div>
            </div>
            <div class="text-center">
              <a class="button button--red button--responsive button--shifted" href={learnLink}>
                <FormattedMessage
                  id="order-confirmation.browse"
                  defaultMessage="Go back to the website"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default OrderConfirmationBlock
