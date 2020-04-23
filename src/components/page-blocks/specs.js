import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import { BackgroundImage } from "components/image"

const SpecsBlock = props => {
  const data = useStaticQuery(graphql`
    query SpecsQuery {
      site {
        siteMetadata {
          pillDocs
          karmenDocs
        }
      }

      cloud: file(relativePath: { eq: "screen-printers-both.png" }) {
        ...fluidImage1024_traced
      }
      pill: file(relativePath: { eq: "karmen-pill.png" }) {
        ...fluidImage1024_traced
      }
    }
  `)

  return (
    <div className="content-block">
      <section {...props}>
        <div className="specs sitenav__anchorpush">
          <span className="sitenav__anchor" id="specs"></span>
          <div className="specs__box">
            <div className="specs__top-row">
              <BackgroundImage
                file={data.pill}
                style={{
                  backgroundPosition: "right bottom",
                  backgroundSize: "contain",
                }}
                className="specs__img"
                alt="Karmen Pill"
              />
              <h2>Karmen Pill</h2>
            </div>
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
              className="button button--responsive specs__cta"
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
            <div className="specs__top-row">
              <BackgroundImage
                file={data.cloud}
                className="specs__img"
                style={{
                  backgroundPosition: "right bottom",
                  backgroundSize: "contain",
                }}
                alt="Karmen cloud"
              />
              <h2>Karmen</h2>
            </div>
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
              className="button button--responsive specs__cta"
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
    </div>
  )
}

export default SpecsBlock
