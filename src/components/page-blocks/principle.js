import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import { Image } from "components/image"

const PrincipleBlock = props => {
  const data = useStaticQuery(graphql`
    query {
      signup: file(relativePath: { eq: "principle-signup.png" }) {
        ...fluidImage600
      }
      pill: file(relativePath: { eq: "principle-pill.png" }) {
        ...fluidImage600
      }
      cloud: file(relativePath: { eq: "karmen-cloud.png" }) {
        ...fluidImage600
      }
    }
  `)

  return (
    <section {...props}>
      <h1 className="page-block-headline sitenav__anchorpush">
        <span className="sitenav__anchor" id="principle"></span>
        <FormattedMessage
          id="principle-block.headline"
          defaultMessage="How it works?"
        />
      </h1>
      <div className="principle">
        <div className="principle__box principle-box">
          <div className="principle-box__img">
            <Image file={data.signup} alt="Karmen signup" />
          </div>
          <div className="principle-box__content">
            <h3 className="principle-box__nr">01</h3>
            <h2 className="principle-box__title">
              <FormattedMessage
                id="principle-block.signup"
                defaultMessage="Sign-up"
              />
            </h2>
            <h3 className="principle-box__sub">
              <FormattedMessage
                id="principle-block.signup_note"
                defaultMessage="Sign-up on {signupLink}"
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
        </div>
        <div className="principle__box principle-box">
          <div className="principle-box__img">
            <Image file={data.pill} alt="Karmen Pill" />
          </div>
          <div className="principle-box__content">
            <h3 className="principle-box__nr">02</h3>
            <h2 className="principle-box__title">
              <FormattedMessage
                id="principle-block.connect"
                defaultMessage="Connect Pill to your printer"
              />
            </h2>
            <h3 className="principle-box__sub">
              <FormattedMessage
                id="principle-block.connect_note"
                defaultMessage="Use printer USB port"
              />
            </h3>
          </div>
        </div>
        <div className="principle__box principle-box principle-box--cutoff">
          <div className="principle-box__img">
            <Image file={data.cloud} alt="Karmen cloud" />
          </div>
          <div className="principle-box__content">
            <h3 className="principle-box__nr">03</h3>
            <h2 className="principle-box__title">
              <FormattedMessage
                id="principle-block.add_printer"
                defaultMessage="Add your printer to Karmen"
              />
            </h2>
            <h3 className="principle-box__sub">
              <FormattedMessage
                id="principle-block.add_printer_note"
                defaultMessage="See {addLink}"
                values={{
                  addLink: (
                    <a href="https://cloud.karmen.tech">cloud.karmen.tech</a>
                  ),
                }}
              />
            </h3>
          </div>
        </div>
        <div className="principle__box principle-box principle-box--emphasized">
          <div className="principle-box__img"></div>
          <div className="principle-box__content">
            <h3 className="principle-box__nr">04</h3>
            <h2 className="principle-box__title">
              <FormattedMessage
                id="principle-block.all_done"
                defaultMessage="All done!"
              />
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipleBlock
