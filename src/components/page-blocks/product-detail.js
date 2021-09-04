import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"

import { BackgroundImage } from "components/image"

const ProductDetailBlock = props => {
  const intl = useIntl()
  const learnLink = intl.locale === "cs" ? "/cs/#meet" : "/en/#meet"
  const meetKarmenLink = intl.locale === "cs" ? "/cs/pribeh/" : "/en/story/"

  const data = useStaticQuery(graphql`
    query {
      smartphoneAndPill: file(relativePath: { eq: "pill-iphone-1.png" }) {
        ...fluidImage1024_traced
      }
    }
  `)

  return (
    <section {...props}>
      <div className="hero__cover">
        <div className="content-block content-block--relative">
          <div className="hero__circle"></div>
          <BackgroundImage
            file={data.smartphoneAndPill}
            className="hero__image"
            style={{ backgroundPosition: "right 80px", backgroundSize: "44%" }}
          >
            <h1 className="hero__headline">
              <FormattedMessage
                id="hero-block.headline"
                defaultMessage="Your 3D printers{lineBreak}anytime, anywhere"
                values={{ lineBreak: <br /> }}
              />
            </h1>
            <h2 className="hero__sub">
              <FormattedMessage
                id="hero-block.sub"
                defaultMessage="Get a complete overview of all your print jobs.{lineBreak}For companies, schools, co-working spaces and individuals."
                values={{ lineBreak: <br /> }}
              />
            </h2>
            <Link
              to={learnLink}
              className="button button--red button--mr button-mb"
            >
              <FormattedMessage id="hero-block.cta" defaultMessage="I want Karmen" />
              <br />
            </Link>
            <Link
              to={meetKarmenLink}
              className="button button--outlineBlack"
            >
              <FormattedMessage id="hero-block.meet" defaultMessage="Meet Karmen" />
              <br />
            </Link>
          </BackgroundImage>
        </div>
      </div>
      <div className="icon-scroll-wrap">
        <div className="icon-scroll"></div>
        <span className="icon-scroll-text">Skroluj níže a objev Karmen</span>
      </div>
    </section>
  )
}

export default ProductDetailBlock
