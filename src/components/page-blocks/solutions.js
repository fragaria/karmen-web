import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import { BackgroundImage } from "components/image"

const SolutionsBlock = props => {
  const data = useStaticQuery(graphql`
    query SolutionsQuery {
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
        <h1 className="solutions-title">Které řešení</h1>
        <div className="solutions">
          <div className="solutions__box">
            <div className="solutions__top-row">
              <BackgroundImage
                file={data.pill}
                style={{
                  backgroundPosition: "left bottom",
                  backgroundSize: "contain",
                }}
                className="solutions__img"
                alt="Karmen Pill"
              />
            </div>
            <div className="solutions__desc">
              <h2><FormattedMessage
                id="solutions-block.full-solution_title"
                defaultMessage="Chci hotové řešení"
              /></h2>
              <div className="typeset">
                <p><FormattedMessage
                  id="solutions-block.full-solution_desc"
                  defaultMessage="Karmen Pill a Karmen Cloud vám umožní kompletně ovládat 3D tisk. Nepotřebujete nic dalšího."
                /></p>
              </div>
              <a
                href={data.site.siteMetadata.pillDocs}
                className="button button--responsive solutions__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id="solutions-block.full-solution_cta"
                  defaultMessage="I want it easy"
                />
              </a>
            </div>
          </div>
          <div className="solutions__box">
            <span className="solutions__box__border"></span>
            <div className="solutions__top-row">
              <BackgroundImage
                file={data.cloud}
                className="solutions__img"
                style={{
                  backgroundPosition: "left bottom",
                  backgroundSize: "contain",
                }}
                alt="Karmen cloud"
              />
            </div>
            <div className="solutions__desc">
              <h2><FormattedMessage
                id="solutions-block.own-hardware_title"
                defaultMessage="Mám svůj hardware"
              /></h2>
              <div className="typeset">
                <p><FormattedMessage
                  id="solutions-block.own-hardware_desc"
                  defaultMessage="Karmen Pill a Karmen Cloud vám umožní kompletně ovládat 3D tisk. Nepotřebujete nic dalšího."
                /></p>
              </div>
              <a
                href={data.site.siteMetadata.karmenDocs}
                className="button button--responsive solutions__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id="solutions-block.own-hardware__cta"
                  defaultMessage="I got my own"
                />
              </a>
            </div>
          </div>
          <div className="solutions__box">
            <span className="solutions__box__border"></span>
            <div className="solutions__top-row">
              <BackgroundImage
                file={data.cloud}
                className="solutions__img"
                style={{
                  backgroundPosition: "left bottom",
                  backgroundSize: "contain",
                }}
                alt="Karmen cloud"
              />
            </div>
            <div className="solutions__desc">
              <h2><FormattedMessage
                id="solutions-block.create_title"
                defaultMessage="Vyrobím si sám"
              /></h2>
              <div className="typeset">
                <p><FormattedMessage
                  id="solutions-block.create_desc"
                  defaultMessage="Připravujeme pro vás možnost vytisknout a složit si vlastní Karmen. Už brzy tu najdete návod."
                /></p>
              </div>
              <a
                href={data.site.siteMetadata.karmenDocs}
                className="button button--responsive solutions__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id="solutions-block.create_cta"
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

export default SolutionsBlock
