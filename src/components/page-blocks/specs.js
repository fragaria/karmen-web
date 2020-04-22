import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import { Image } from "components/image"

const SpecsBlock = props => {
  const data = useStaticQuery(graphql`
    query SpecsQuery {
      site {
        siteMetadata {
          pillDocs
          karmenDocs
        }
      }

      cloud: file(relativePath: { eq: "karmen-cloud.png" }) {
        childImageSharp {
          fixed(width: 240, height: 174) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section {...props}>
      <div className="specs sitenav__anchorpush">
        <span className="sitenav__anchor" id="specs"></span>
        <div className="specs__box">
          <Image
            file={data.cloud}
            fixed={true}
            className="specs__img"
            alt="Karmen Pill"
          />
          <h2>Karmen Pill</h2>
          <ul className="arrow-list">
            <li className="arrow-list__item">
              <FormattedMessage
                id="specs-block.pill_1"
                defaultMessage="Connects to the printer’s USB port"
              />
            </li>
            <li className="arrow-list__item">
              <FormattedMessage
                id="specs-block.pill_2"
                defaultMessage="Provides internet connectivity"
              />
            </li>
            <li className="arrow-list__item">
              <FormattedMessage
                id="specs-block.pill_3"
                defaultMessage="Includes a web camera with LED light"
              />
            </li>
            <li className="arrow-list__item">
              <FormattedMessage
                id="specs-block.pill_4"
                defaultMessage="Simple installation with a wizard"
              />
            </li>
            <li className="arrow-list__item">
              <FormattedMessage
                id="specs-block.pill_5"
                defaultMessage="Enables remote printer management with Karmen"
              />
            </li>
          </ul>
          <a
            href={data.site.siteMetadata.pillDocs}
            className="button specs__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage
              id="specs-block.pill_getting_started"
              defaultMessage="Getting started"
            />
          </a>
        </div>
        <div className="specs__box">
          <Image
            file={data.cloud}
            fixed={true}
            className="specs__img"
            alt="Karmen cloud"
          />
          <h2>Karmen</h2>
          <ul className="arrow-list">
            <li className="arrow-list__item">
              <FormattedMessage
                id="specs-block.karmen_1"
                defaultMessage="Remote printer management via web browser"
              />
            </li>
            <li className="arrow-list__item">
              <FormattedMessage
                id="specs-block.karmen_2"
                defaultMessage="Live monitoring and statistics"
              />
            </li>
            <li className="arrow-list__item">
              <FormattedMessage
                id="specs-block.karmen_3"
                defaultMessage="Team management"
              />
            </li>
            <li className="arrow-list__item">
              <FormattedMessage
                id="specs-block.karmen_4"
                defaultMessage="Open API and easy integration with other systems"
              />
            </li>
            <li className="arrow-list__item">
              <FormattedMessage
                id="specs-block.karmen_5"
                defaultMessage="SaaS or on-premise"
              />
            </li>
          </ul>
          <a
            href={data.site.siteMetadata.karmenDocs}
            className="button specs__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage
              id="specs-block.karmen_quickstart"
              defaultMessage="Quickstart"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default SpecsBlock
