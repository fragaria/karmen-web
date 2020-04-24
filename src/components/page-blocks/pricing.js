import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ReactTooltip from "react-tooltip"
import { FormattedMessage, useIntl, defineMessages } from "react-intl"

import { Image } from "components/image"

import pillImg from "assets/img/pill-outline.svg"
import cloudImg from "assets/img/cloud-outline.svg"

const messages = defineMessages({
  specialOfferMemo: {
    id: "pricing-block.special_offer_memo",
    defaultMessage: "Conditions apply.",
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
    <div className="content-block content-block--shift-mobile">
      <section {...props}>
        <h1 className="page-block-headline sitenav__anchorpush">
          <span className="sitenav__anchor" id="buy"></span>
          <FormattedMessage
            id="pricing-block.headline"
            defaultMessage="One price, unlimited possibilities"
          />
        </h1>
        <div className="pricing">
          <span className="pricing__plussign">+</span>
          <div className="pricing__box price">
            <img src={pillImg} className="pricing__box-img" alt="Karmen Pill" />
            <h2 className="price__item">Karmen Pill</h2>
            <h3 className="price__sum">
              <FormattedMessage
                id="pricing-block.pill_price"
                defaultMessage="130 EUR"
              />
            </h3>
          </div>
          <div className="pricing__box price">
            <img
              src={cloudImg}
              className="pricing__box-img"
              alt="Karmen cloud service"
            />
            <h2 className="price__item">Karmen</h2>
            <h3 className="price__sum">
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
          </div>
          <div className="pricing__box pricing__box--emphasized price">
            <Image
              file={data.pillWCloud}
              className="pricing__box-img"
              alt="Pill + Karmen cloud service"
            />
            <h2 className="price__item">Pill + Karmen</h2>
            <h3 className="pricing__total price__sum">
              ={" "}
              <FormattedMessage
                id="pricing-block.combo_price"
                defaultMessage="130 EUR"
              />
            </h3>
            <div className="price__note">
              <FormattedMessage
                id="pricing-block.combo_price_note"
                defaultMessage="Total excl. VAT"
              />
            </div>
          </div>
        </div>
        <div className="pricing">
          <Link to={buyLink} className="pricing__buybutton button">
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
