import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ReactTooltip from "react-tooltip"
import { FormattedMessage, useIntl, defineMessages } from "react-intl"

import { Image } from "components/image"

const messages = defineMessages({
  specialOfferMemo: {
    id: "pricing-block.special_offer_memo",
    defaultMessage:
      "Free for limited number of connected devices.<br />Curious about large scale operation pricing? Contact us.",
  },
})

const PricingBlock = ({ location, ...props }) => {
  const intl = useIntl()
  const buyLinkFull = intl.locale === "cs" ? "/cs/koupit/" : "/en/buy/"
  const buyLinkMyself = intl.locale === "cs" ? "/cs/koupit/" : "/en/buy/"
  const registerLink = "https://cloud.karmen.tech/register"
  const data = useStaticQuery(graphql`
    query {
      pillTablet: file(relativePath: { eq: "karmen-pill-tablet.jpg" }) {
        ...fluidImage1024
      }
      cloudMobile: file(relativePath: { eq: "karmen-cloud-tablet-mobile.jpg" }) {
        ...fluidImage1024
      }
      diy: file(relativePath: { eq: "karmen-diy.jpg" }) {
        ...fluidImage1024
      }
      
    }
  `)

  return (
    <div className="content-block content-block--narrow">
      <section {...props}>
        <h1 className="page-block-headline sitenav__anchorpush">
          <span className="sitenav__anchor" id="buy"></span>
          <FormattedMessage
            id="pricing-block.headline"
            defaultMessage="Jaké řešení si vybrat?"
          />
        </h1>
        <div className="pricing">
          <div className="pricing__box">
            <div className="pricing__img">
              <Image file={data.pillTablet} alt="Pill + Karmen cloud service" />
            </div>

            <div className="pricing__info">
              <h2 className="pricing__title">
                <FormattedMessage
                  id="pricing-block.full_title"
                  defaultMessage="Chci hotové řešení"
                />
              </h2>
              <div className="pricing__desc">
                <p>
                  <FormattedMessage
                    id="pricing-block.full_desc"
                    defaultMessage="Karmen Pill a Karmen Cloud vám umožní kompletně ovládat 3D tisk. Nepotřebujete nic dalšího."
                  />
                </p>
              </div>
              <div className="pricing__buy">
                <div className="pricing__buy-left">
                  <Link to={buyLinkFull} className="pricing__buybutton button button--red">
                    <FormattedMessage
                      id="pricing-block.cta"
                      defaultMessage="Buy Karmen"
                    />
                  </Link>
                </div>
                <div className="pricing__buy-right">
                  <div className="pricing__price-vat">
                    <FormattedMessage
                      id="pricing-block.full_price_vat"
                      defaultMessage="4 260 KČ s DPH"
                    />
                  </div>
                  <div className="pricing__price">
                    <FormattedMessage
                      id="pricing-block.full_price"
                      defaultMessage="4 060 KČ bez DPH"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing__box">
            <div className="pricing__img">
              <Image file={data.cloudMobile} />
            </div>

            <div className="pricing__info">
              <h2 className="pricing__title">
                <FormattedMessage
                  id="pricing-block.myself_title"
                  defaultMessage="Vyrobím si sám"
                />
              </h2>
              <div className="pricing__desc">
                <p>
                  <FormattedMessage
                    id="pricing-block.myself_desc"
                    defaultMessage="Bez Karmen Pill se obejdete, pokud máte vlastní zařízení pro monitoring tisku kompatibilní s Octoprintem. Stačí se registrovat do Cloudu."
                  />
                </p>
              </div>
              <div className="pricing__buy">
                <div className="pricing__buy-left">
                  <Link to={buyLinkMyself} className="pricing__buybutton button button--red">
                    <FormattedMessage
                      id="pricing-block.cta"
                      defaultMessage="Buy Karmen"
                    />
                  </Link>
                </div>
                <div className="pricing__buy-right">
                  <div className="pricing__price-vat">
                    <FormattedMessage
                      id="pricing-block.myself_price_vat"
                      defaultMessage="3 260 KČ s DPH"
                    />
                  </div>
                  <div className="pricing__price">
                    <FormattedMessage
                      id="pricing-block.myself_price"
                      defaultMessage="2860 KČ bez DPH"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing__box">
            <div className="pricing__img">
              <Image file={data.diy} />
            </div>

            <div className="pricing__info">
              <h2 className="pricing__title">
                <FormattedMessage
                  id="pricing-block.diy_title"
                  defaultMessage="Mám vlastní řešení"
                />
              </h2>
              <div className="pricing__desc">
                <p>
                  <FormattedMessage
                    id="pricing-block.diy_desc"
                    defaultMessage="Připravujeme pro vás možnost vytisknout a složit si vlastní Karmen. Už brzy tu najdete návod."
                  />
                </p>
              </div>
              <div className="pricing__buy">
                <div className="pricing__buy-left">
                  <Link to={registerLink} className="pricing__buybutton button button--red">
                    <FormattedMessage
                      id="pricing-block.cta_register"
                      defaultMessage="Registrovat"
                    />
                  </Link>
                </div>
                <div className="pricing__buy-right">
                  <div className="pricing__price-vat">
                    <FormattedMessage
                      id="pricing-block.diy_price_vat"
                      defaultMessage="Zdarma"
                    />
                  </div>
                  <div className="pricing__price">
                    <FormattedMessage
                      id="pricing-block.diy_price"
                      defaultMessage="Zdarma pro všechny"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingBlock
