import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FormattedMessage, useIntl, defineMessages } from "react-intl"

import { BackgroundImage } from "components/image"

defineMessages({
  specialOfferMemo: {
    id: "pricing-block.special_offer_memo",
    defaultMessage:
      "Free for limited number of connected devices.<br />Curious about large scale operation pricing? Contact us.",
  },
})

const ProductsList = ({ location, ...props }) => {
  const intl = useIntl()
  const cloudLink =
    intl.locale === "cs"
      ? "/cs/produkty/karmen-cloud"
      : "/en/products/karmen-cloud"
  // const diyLink =
  //   intl.locale === "cs"
  //     ? "/cs/produkty/karmen-pill-skladacka"
  //     : "/en/products/karmen-pill-diy"
  // const registerLink = "https://next.karmen.tech/registration"
  const manualLink = "https://docs.karmen.tech/#/cs/pripojeni-octoprintu-do-karmen-cloudu"
  const data = useStaticQuery(graphql`
    query {
      pillTablet: file(relativePath: { eq: "product-pill.png" }) {
        ...fluidImage1024
      }
      cloudMobile: file(relativePath: { eq: "product-cloud.png" }) {
        ...fluidImage1024
      }
      diy: file(relativePath: { eq: "product-diy.png" }) {
        ...fluidImage1024
      }
      site {
        siteMetadata {
          eshopUrl
        }
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
                defaultMessage="Chci jen webovou službu"
              />
            </h2>
            <div className="products-list__desc">
              <p>
                <FormattedMessage
                  id="pricing-block.myself_desc"
                  defaultMessage="Stáhněte si náš plugin do Vašeho Octoprintu, připojte si své tiskárny do Karmen Cloudu a webovou službu na ovládání 3D tiskáren nechte na nás."
                />
              </p>
            </div>
            <div className="products-list__buy">
              <Link
                to={cloudLink}
                className="products-list__buybutton button--full button button--red"
              >
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
                id="pricing-block.manual"
                defaultMessage="{manualLink}"
                values={{
                  manualLink: <a href={manualLink}>Návod jak připojit Octoprint</a>
                }}
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
                defaultMessage="Chci kompletní řešení"
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
              <Link
                to={data.site.siteMetadata.eshopUrl}
                className="products-list__buybutton button button--full button--red"
              >
                <FormattedMessage
                  id="pricing-block.cta_eshop"
                  defaultMessage="Do e-shopu"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* DIY */}
        {/*<div className="products-list__box">*/}
        {/*  <BackgroundImage*/}
        {/*    file={data.diy}*/}
        {/*    style={{*/}
        {/*      backgroundPosition: "center bottom",*/}
        {/*      backgroundSize: "contain",*/}
        {/*    }}*/}
        {/*    className="products-list__img"*/}
        {/*  />*/}
        {/*  <div className="products-list__info">*/}
        {/*    <h2 className="products-list__title">*/}
        {/*      <FormattedMessage*/}
        {/*        id="pricing-block.diy_title"*/}
        {/*        defaultMessage="Mám vlastní řešení"*/}
        {/*      />*/}
        {/*    </h2>*/}
        {/*    <div className="products-list__desc">*/}
        {/*      <p>*/}
        {/*        <FormattedMessage*/}
        {/*          id="pricing-block.diy_desc"*/}
        {/*          defaultMessage="Připravujeme pro vás možnost vytisknout a složit si vlastní Karmen. Už brzy tu najdete návod."*/}
        {/*        />*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="products-list__buy">*/}
        {/*      <Link*/}
        {/*        to={diyLink}*/}
        {/*        className="products-list__buybutton button--full button button--red"*/}
        {/*      >*/}
        {/*        <FormattedMessage*/}
        {/*          id="pricing-block.cta_register"*/}
        {/*          defaultMessage="Chci skládačku"*/}
        {/*        />*/}
        {/*      </Link>*/}
        {/*    </div>*/}
        {/*    /!*<div className="products-list__price-vat">*!/*/}
        {/*    /!*  <FormattedMessage*!/*/}
        {/*    /!*    id="pricing-block.diy_price_vat"*!/*/}
        {/*    /!*    defaultMessage="Připravujeme"*!/*/}
        {/*    /!*  />*!/*/}
        {/*    /!*</div>*!/*/}
        {/*    <div className="products-list__price products-list__price--novat">*/}
        {/*      <FormattedMessage*/}
        {/*        id="pricing-block.diy_price"*/}
        {/*        defaultMessage="Připravujeme"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

export default ProductsList
