import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FormattedMessage, useIntl, defineMessages } from "react-intl"

import { BackgroundImage } from "components/image"

const messages = defineMessages({
  specialOfferMemo: {
    id: "pricing-block.special_offer_memo",
    defaultMessage:
      "Free for limited number of connected devices.<br />Curious about large scale operation pricing? Contact us.",
  },
})

const ProductsList = ({ location, ...props }) => {
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
    <section {...props}>
      <div className="products-list">
        {/* CLOUD */}
        <div className="products-list__box">
          <BackgroundImage
            file={data.cloudMobile}
            style={{
              backgroundPosition: "center bottom",
              backgroundSize: "contain",
            }}
            className="products-list__img"
          />
          <div className="products-list__info">
            <h2 className="products-list__title">
              <FormattedMessage
                id="pricing-block.myself_title"
                defaultMessage="Mám vlastní řešení"
              />
            </h2>
            <div className="products-list__desc">
              <p>
                <FormattedMessage
                  id="pricing-block.myself_desc"
                  defaultMessage="Bez Karmen Pill se obejdete, pokud máte vlastní zařízení pro monitoring tisku kompatibilní s Octoprintem."
                />
              </p>
            </div>
            <div className="products-list__buy">
              <Link to={buyLinkMyself} className="products-list__buybutton button--full button button--red">
                <FormattedMessage
                  id="pricing-block.cta__myself"
                  defaultMessage="Chci cloud"
                />
              </Link>
            </div>
            <div className="products-list__price-vat">
              <FormattedMessage
                id="pricing-block.myself_price_vat"
                defaultMessage="ZDARMA"
              />
            </div>
            <div className="products-list__price">
              <FormattedMessage
                id="pricing-block.myself_price"
                defaultMessage="Karmen Cloud je zdarma pro všechny"
              />
            </div>
          </div>
        </div>
        {/* READY TO GO */}
        <div className="products-list__box">
          <BackgroundImage
            file={data.pillTablet}
            style={{
              backgroundPosition: "center bottom",
              backgroundSize: "contain",
            }}
            className="products-list__img"
            alt="Pill + Karmen cloud service"
          />
          <div className="products-list__info">
            <h2 className="products-list__title">
              <FormattedMessage
                id="pricing-block.full_title"
                defaultMessage="Chci hotové řešení"
              />
            </h2>
            <div className="products-list__desc">
              <p>
                <FormattedMessage
                  id="pricing-block.full_desc"
                  defaultMessage="Karmen Pill a Karmen Cloud vám umožní kompletně ovládat 3D tisk. Nepotřebujete nic dalšího."
                />
              </p>
            </div>
            <div className="products-list__buy">
              <Link to={buyLinkFull} className="products-list__buybutton button button--full button--red">
                <FormattedMessage
                  id="pricing-block.cta__full"
                  defaultMessage="Chci hotové řešení"
                />
              </Link>
            </div>
            <div className="products-list__price-vat">
              <FormattedMessage
                id="pricing-block.full_price_vat"
                defaultMessage="4 235 KČ s DPH"
              />
            </div>
            <div className="products-list__price">
              <FormattedMessage
                id="pricing-block.full_price"
                defaultMessage="3 500 KČ bez DPH"
              />
            </div>
          </div>
        </div>
        {/* DIY */}
        <div className="products-list__box">
          <BackgroundImage
            file={data.diy}
            style={{
              backgroundPosition: "center bottom",
              backgroundSize: "contain",
            }}
            className="products-list__img"
          />
          <div className="products-list__info">
            <h2 className="products-list__title">
              <FormattedMessage
                id="pricing-block.diy_title"
                defaultMessage="Mám vlastní řešení"
              />
            </h2>
            <div className="products-list__desc">
              <p>
                <FormattedMessage
                  id="pricing-block.diy_desc"
                  defaultMessage="Připravujeme pro vás možnost vytisknout a složit si vlastní Karmen. Už brzy tu najdete návod."
                />
              </p>
            </div>
            <div className="products-list__buy">
              <Link to={registerLink} className="products-list__buybutton button--full button button--red">
                <FormattedMessage
                  id="pricing-block.cta_register"
                  defaultMessage="Chci skládačku"
                />
              </Link>
            </div>
            {/*<div className="products-list__price-vat">*/}
            {/*  <FormattedMessage*/}
            {/*    id="pricing-block.diy_price_vat"*/}
            {/*    defaultMessage="Připravujeme"*/}
            {/*  />*/}
            {/*</div>*/}
            <div className="products-list__price products-list__price--novat">
              <FormattedMessage
                id="pricing-block.diy_price"
                defaultMessage="Připravujeme"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsList
