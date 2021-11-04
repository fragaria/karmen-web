import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import { BackgroundImage } from "components/image"

const PrincipleBlock = props => {
  const data = useStaticQuery(graphql`
    query {
      signup: file(relativePath: { eq: "screen-signup.png" }) {
        ...fluidImage600
      }
      printer: file(relativePath: { eq: "pill-w-printer.png" }) {
        ...fluidImage600
      }
      pill: file(relativePath: { eq: "karmen-pill.png" }) {
        ...fluidImage600
      }
    }
  `)

  return (
    <div className="content-block">
      <section {...props}>
        <h1 className="principle-title sitenav__anchorpush">
          <span className="sitenav__anchor" id="principle"></span>
          <FormattedMessage
            id="principle-block.headline"
            defaultMessage="Práci s Karmen zvládne každý"
          />
        </h1>
        <h2 className="principle-sub">
          <span className="sitenav__anchor" id="principle"></span>
          <FormattedMessage
            id="principle-block.sub"
            defaultMessage="Práce s Karmen Cloud a Pill je velice snadná zvládne ji{lineBreak}i úplný začátečník."
            values={{ lineBreak: <br /> }}
          />
        </h2>
        <div className="principle">
          <div className="principle__box">
            <BackgroundImage
              file={data.signup}
              style={{
                backgroundPosition: "center bottom",
                backgroundSize: "contain",
              }}
              className="principle__img"
              alt="Karmen Pill"
            />
            <div className="principle__desc">
              <h2>
                <FormattedMessage
                  id="principle-block.login_title"
                  defaultMessage="Přihlásíte se do{lineBreak}Karmen Cloud"
                  values={{ lineBreak: <br /> }}
                />
              </h2>
            </div>
          </div>
          <div className="principle__box">
            <BackgroundImage
              file={data.pill}
              style={{
                backgroundPosition: "center bottom",
                backgroundSize: "contain",
              }}
              className="principle__img"
              alt="Karmen Pill"
            />
            <div className="principle__desc">
              <h2>
                <FormattedMessage
                  id="principle-block.pill_title"
                  defaultMessage="Připojíte Pill k tiskárně{lineBreak}a Karmen Cloud"
                  values={{ lineBreak: <br /> }}
                />
              </h2>
            </div>
          </div>
          <div className="principle__box">
            <BackgroundImage
              file={data.printer}
              style={{
                backgroundPosition: "center bottom",
                backgroundSize: "contain",
              }}
              className="principle__img"
              alt="Karmen Pill"
            />
            <h2>
              <FormattedMessage
                id="principle-block.cloud_title"
                defaultMessage="Pohodlně tisknete a řídíte{lineBreak}Vaše tiskárny"
                values={{ lineBreak: <br /> }}
              />
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrincipleBlock
