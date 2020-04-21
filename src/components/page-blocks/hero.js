import React from "react"
import { Link } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"

const HeroBlock = props => {
  const intl = useIntl()
  const learnLink = intl.locale === "cs" ? "/cs/#buy" : "/en/#buy"

  return (
    <section {...props}>
      <div className="hero">
        <div className="content-block">
          <h1 className="hero__headline">
            <FormattedMessage
              id="hero-block.meet_karmen"
              defaultMessage="Your 3D printers{lineBreak}anywhere, anytime with you"
              values={{ lineBreak: <br /> }}
            />
          </h1>
          <h2 className="hero__sub">
            <FormattedMessage
              id="hero-block.claim"
              defaultMessage="Get a complete overview of your print jobs.{lineBreak}For companies, schools, makerspaces and individuals."
              values={{ lineBreak: <br /> }}
            />
          </h2>
          <Link to={learnLink} className="button button--red hero__cta">
            <FormattedMessage id="hero-block.cta" defaultMessage="Learn more" />
            <br />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroBlock
