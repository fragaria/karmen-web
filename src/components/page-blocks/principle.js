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
      pill: file(relativePath: { eq: "pill-w-printer.png" }) {
        ...fluidImage600
      }
      cloud: file(relativePath: { eq: "screen-printers-both.png" }) {
        ...fluidImage600
      }
    }
  `)

  return (
    <div className="content-block content-block--narrower content-block--shift-mobile">
      <section {...props}>
        <h1 className="page-block-headline sitenav__anchorpush">
          <span className="sitenav__anchor" id="principle"></span>
          <FormattedMessage
            id="principle-block.headline"
            defaultMessage="How it works"
          />
        </h1>
        <div className="principle">
          <div className="principle__box principle-box">
            <div className="principle-box__nr">
              <h3 className="principle-box__nr-text">01</h3>
            </div>
            <div className="principle-box__content">
              <h2 className="principle-box__title">
                <FormattedMessage
                  id="principle-block.signup"
                  defaultMessage="Sign up"
                />
              </h2>
              <h3 className="principle-box__sub">
                <FormattedMessage
                  id="principle-block.signup_note"
                  defaultMessage="Register at {signupLink}"
                  values={{
                    signupLink: (
                      <a href="https://cloud.karmen.tech/register">
                        cloud.karmen.tech/register
                      </a>
                    ),
                  }}
                />
              </h3>
            </div>
            <div className="principle-box__img">
              <BackgroundImage className="principle-box__img-body" file={data.signup} style={{backgroundSize: "contain"}} />
            </div>
          </div>
          <div className="principle__box principle-box">
            <div className="principle-box__nr">
              <h3 className="principle-box__nr-text">02</h3>
            </div>
            <div className="principle-box__content">
              <h2 className="principle-box__title">
                <FormattedMessage
                  id="principle-block.connect"
                  defaultMessage="Connect Pill to your printer"
                />
              </h2>
              <h3 className="principle-box__sub">
                <FormattedMessage
                  id="principle-block.connect_note"
                  defaultMessage="Use the printer’s USB port"
                />
              </h3>
            </div>
            <div className="principle-box__img">
              <BackgroundImage className="principle-box__img-body" file={data.pill} style={{backgroundSize: "contain"}} />
            </div>
          </div>
          <div className="principle__box principle-box principle-box--cutoff">
            <div className="principle-box__nr">
              <h3 className="principle-box__nr-text">03</h3>
            </div>
            <div className="principle-box__content">
              <h2 className="principle-box__title">
                <FormattedMessage
                  id="principle-block.add_printer"
                  defaultMessage="Connect the new printer to your fleet"
                />
              </h2>
              <h3 className="principle-box__sub">
                <FormattedMessage
                  id="principle-block.add_printer_note"
                  defaultMessage="It’s faster than drinking a cup of coffee"
                />
              </h3>
            </div>
            <div className="principle-box__img">
              <BackgroundImage className="principle-box__img-body" file={data.cloud} style={{backgroundSize: "contain"}} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrincipleBlock
