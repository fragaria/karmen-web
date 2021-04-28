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
          <a href="https://cloud.karmen.tech/register" className="principle__box principle-box">
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
                    signupLink: "cloud.karmen.tech/register",
                  }}
                />
              </h3>
            </div>
            <div className="principle-box__img">
              <BackgroundImage
                className="principle-box__img-body"
                file={data.signup}
                style={{ backgroundSize: "contain" }}
              />
            </div>
          </a>
          <a href="https://docs.karmen.tech/#/pill-getting-started?id=initial-configuration" className="principle__box principle-box">
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
              <BackgroundImage
                className="principle-box__img-body"
                file={data.pill}
                style={{ backgroundSize: "contain" }}
              />
            </div>
          </a>
          <a href="https://docs.karmen.tech/#/quickstart" className="principle__box principle-box principle-box--cutoff">
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
              <BackgroundImage
                className="principle-box__img-body"
                file={data.cloud}
                style={{ backgroundSize: "contain" }}
              />
            </div>
          </a>
          <a href="https://medium.com/karmen3d/connecting-octoprint-boxes-to-karmen-53afc48ea9b6" className="principle__box principle-box principle-box--cutoff">
            <div className="principle-box__nr">
              <h3 className="principle-box__nr-text">04</h3>
            </div>
            <div className="principle-box__content">
              <h2 className="principle-box__title">
                <FormattedMessage
                  id="principle-block.connect_octoprint"
                  defaultMessage="Connect OctoPrint to Karmen Cloud service"
                />
              </h2>
              <h3 className="principle-box__sub">
                <FormattedMessage
                  id="principle-block.connect_octoprint_note"
                  defaultMessage="If you don't know what OctoPrint is, don't bother"
                />
              </h3>
            </div>
            <div className="principle-box__img">
              <BackgroundImage
                className="principle-box__img-body"
                file={data.cloud}
                style={{ backgroundSize: "contain" }}
              />
            </div>
          </a>
          <div className="principle__box principle-box principle-box--emphasized">
            <div className="principle-box__nr">
              <h3 className="principle-box__nr-text">05</h3>
            </div>
            <div className="principle-box__content">
              <h2 className="principle-box__title">
                <FormattedMessage
                  id="principle-block.all_done"
                  defaultMessage="You’re good to go!"
                />
              </h2>
            </div>
            <div className="principle-box__img">
              <span className="icon--check"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrincipleBlock
