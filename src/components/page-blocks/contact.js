import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"

const ContactBlock = props => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          company {
            phone
            contactEmail
          }
        }
      }
    }
  `)

  const intl = useIntl()
  const teamLink = intl.locale === "cs" ? "/cs/pribeh/#team" : "/en/story/#team"

  return (
    <div className="content-block content-block--sitenavwide content-block--shift-mobile">
      <section {...props}>
        <div className="contact">
          <div className="contact__form contact-box">
            <h1 className="sitenav__anchorpush">
              <span className="sitenav__anchor" id="contact"></span>
              <FormattedMessage
                id="contact-block.title"
                defaultMessage="Contact form"
              />
            </h1>
            <div className="">
              <div className="form__field">
                <label className="form-label" htmlFor="variant">
                  E-mail
                </label>
                <input className="form-control form-control--small form-control--bordered" type="text"/>
              </div>
              <div className="form__field">
                <label className="form-label" htmlFor="variant">
                  Message
                </label>
                <textarea className="form-control form-control--small form-control--bordered" type="text"/>
              </div>
              <div className="form__field">
                <button className="button button--primary">Send</button>
              </div>
            </div>
          </div>
          <div className="contact__team contact-box">
            <h1>
              <FormattedMessage
                id="contact-block.karmen_team"
                defaultMessage="Karmen team"
              />
            </h1>
            <p>
              <Link className="anchor anchor--default" to={teamLink}>
                <FormattedMessage
                  id="contact-block.karmen_team_link"
                  defaultMessage="See the team"
                />
              </Link>
            </p>
          </div>
          <div className="contact__contact contact-box">
            <h1>
              <FormattedMessage
                id="contact-block.contact_us"
                defaultMessage="Contact us"
              />
            </h1>
            <ul className="list list--unstyled">
              <li>
                <a
                  className="anchor anchor--default"
                  href={`mailto:${data.site.siteMetadata.company.contactEmail}`}
                >
                  {data.site.siteMetadata.company.contactEmail}
                </a>
              </li>
              <li>
                <a
                  className="anchor anchor--default"
                  href={`tel:${data.site.siteMetadata.company.phone}`}
                >
                  {data.site.siteMetadata.company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactBlock
