import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import { FormattedMessage, useIntl } from "react-intl"

import { BackgroundImage } from "components/image"

const HeroBlock = props => {
  const intl = useIntl()
  const learnLink = intl.locale === "cs" ? "/cs/#meet" : "/en/#meet"

  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "lead.jpg" }) {
        ...fluidImage1920
      }
    }
  `)

  return (
    <section {...props}>
      <BackgroundImage file={data.cover} className="hero">
        <div className="hero__cover">
          <div className="content-block">
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
          </div>
        </div>
        <div className="content-block">
          <Link
            to={learnLink}
            className="button button--red button--responsive hero__cta"
          >
            <FormattedMessage id="hero-block.cta" defaultMessage="Learn more" />
            <br />
          </Link>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default HeroBlock
