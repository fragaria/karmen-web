import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ReactTooltip from "react-tooltip"
import { FormattedMessage, useIntl, defineMessages } from "react-intl"

import { Image } from "components/image"

import pillImg from "assets/img/karmen-pill.png"
import cloudImg from "assets/img/screen-printers-both.png"

const messages = defineMessages({
  specialOfferMemo: {
    id: "pricing-block.special_offer_memo",
    defaultMessage:
      "Free for limited number of connected devices. Curious about large scale operation pricing? Contact us.",
  },
})

const PricingBlock = ({ location, ...props }) => {
  const intl = useIntl()
  const buyLink = intl.locale === "cs" ? "/cs/koupit/" : "/en/buy/"
  const data = useStaticQuery(graphql`
    query {
      pillWCloud: file(relativePath: { eq: "pill-w-cloud.png" }) {
        ...fluidImage300
      }
    }
  `)

  return (
    <div className="content-block content-block--narrower content-block--shift-mobile">
      <section {...props}>
        <h1 className="page-block-headline sitenav__anchorpush">
          <span className="sitenav__anchor" id="buy"></span>
          <FormattedMessage
            id="pricing-block.headline"
            defaultMessage="One price, unlimited possibilities"
          />
        </h1>
        <div className="pricing">
          <div className="pricing__box">
            <div className="pricing__box-img">
              <Image
                file={data.pillWCloud}
                alt="Pill + Karmen cloud service"
              />
            </div>

            <div className="pricing__box--price">
              <h2 className="price__title">Pill + Karmen</h2>


              <dl className="price__items">
                <dt className="price__item">
                  <span>Karmen Pill</span></dt>
                <dd className="price__sum">
                  <h3>
                    <FormattedMessage
                      id="pricing-block.pill_price"
                      defaultMessage="130 EUR"
                    />
                  </h3>
                </dd>
                <dt className="price__item">
                  <span>Karmen</span></dt>
                <dd className="price__sum price__sum--limited-offer">
                  <h3>
                    <FormattedMessage
                      id="pricing-block.karmen_price"
                      defaultMessage="Free"
                    />
                  </h3>
                  <div className="price__note">
                    <FormattedMessage
                      id="pricing-block.karmen_price_note"
                      defaultMessage="Special limited offer"
                    />
                    <i
                      className="pricing__offerinfo icon--info"
                      data-tip={intl.formatMessage(messages.specialOfferMemo)}
                    ></i>
                    <ReactTooltip
                      place="bottom"
                      type="dark"
                      effect="solid"
                      borderRadius="0"
                    />
                  </div>
                </dd>
              </dl>
              <div className="price__sum--total">
                <h2>
                  <FormattedMessage
                    id="pricing-block.combo_price"
                    defaultMessage="130 EUR"
                  />
                </h2>
                <div className="price__note">
                  <FormattedMessage
                    id="pricing-block.combo_price_note"
                    defaultMessage="Total excl. VAT"
                  />
                </div>
              </div>
            </div>
          </div>
          <Link to={buyLink} className="pricing__buybutton button button--red">
            <FormattedMessage
              id="pricing-block.buy"
              defaultMessage="Buy Karmen"
            />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PricingBlock
