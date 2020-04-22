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
            <li className="arrow-list__item">Krabička k tiskárně</li>
            <li className="arrow-list__item">
              Běžným tiskárnám přidává konektivitu do internetu
            </li>
            <li className="arrow-list__item">Webcam, octoprint-based</li>
            <li className="arrow-list__item">Instalační wizard</li>
            <li className="arrow-list__item">
              Umožňuje snadné připojení ke Karmen cloud
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
              Vzdálená správu tiskáren skrze web browser
            </li>
            <li className="arrow-list__item">Live monitoring, statistiky</li>
            <li className="arrow-list__item">
              Přístup pro více uživatelů, správa tiskových souborů
            </li>
            <li className="arrow-list__item">
              Otevřené API, snadná integrace do dalších systémů
            </li>
            <li className="arrow-list__item">SaaS, nebo on-premise</li>
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
