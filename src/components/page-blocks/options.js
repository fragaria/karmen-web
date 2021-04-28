import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import { BackgroundImage } from "components/image"

const OptionsBlock = props => {
  const data = useStaticQuery(graphql`
    query {
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
        <h1 className="options-title">Které řešení</h1>
        <div className="options">
          <div className="options__box">
            <div className="options__top-row">
              <BackgroundImage
                file={data.pill}
                style={{
                  backgroundPosition: "left bottom",
                  backgroundSize: "contain",
                }}
                className="options__img"
                alt="Karmen Pill"
              />
            </div>
            <div className="options__desc">
              <h2><FormattedMessage
                id="options-block.full-solution_title"
                defaultMessage="Chci hotové řešení"
              /></h2>
              <div className="typeset">
                <p><FormattedMessage
                  id="options-block.full-solution_desc"
                  defaultMessage="Karmen Pill a Karmen Cloud vám umožní kompletně ovládat 3D tisk. Nepotřebujete nic dalšího."
                /></p>
              </div>
              <a
                href={data.site.siteMetadata.pillDocs}
                className="button button--responsive options__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id="options-block.full-solution_cta"
                  defaultMessage="I want it easy"
                />
              </a>
            </div>
          </div>
          <div className="options__box">
            <span className="options__box__border"></span>
            <div className="options__top-row">
              <BackgroundImage
                file={data.cloud}
                className="options__img"
                style={{
                  backgroundPosition: "left bottom",
                  backgroundSize: "contain",
                }}
                alt="Karmen cloud"
              />
            </div>
            <div className="options__desc">
              <h2><FormattedMessage
                id="options-block.own-hardware_title"
                defaultMessage="Mám svůj hardware"
              /></h2>
              <div className="typeset">
                <p><FormattedMessage
                  id="options-block.own-hardware_desc"
                  defaultMessage="Karmen Pill a Karmen Cloud vám umožní kompletně ovládat 3D tisk. Nepotřebujete nic dalšího."
                /></p>
              </div>
              <a
                href={data.site.siteMetadata.karmenDocs}
                className="button button--responsive options__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id="options-block.own-hardware__cta"
                  defaultMessage="I got my own"
                />
              </a>
            </div>
          </div>
          <div className="options__box">
            <span className="options__box__border"></span>
            <div className="options__top-row">
              <BackgroundImage
                file={data.cloud}
                className="options__img"
                style={{
                  backgroundPosition: "left bottom",
                  backgroundSize: "contain",
                }}
                alt="Karmen cloud"
              />
            </div>
            <div className="options__desc">
              <h2><FormattedMessage
                id="options-block.create_title"
                defaultMessage="Vyrobím si sám"
              /></h2>
              <div className="typeset">
                <p><FormattedMessage
                  id="options-block.create_desc"
                  defaultMessage="Připravujeme pro vás možnost vytisknout a složit si vlastní Karmen. Už brzy tu najdete návod."
                /></p>
              </div>
              <a
                href={data.site.siteMetadata.karmenDocs}
                className="button button--responsive options__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id="options-block.create_cta"
                  defaultMessage="I'll make it myself"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OptionsBlock
