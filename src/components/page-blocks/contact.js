import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import Social from "../social"

const ContactBlock = props => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          company {
            phone
            contactEmail
          }
          functions {
            rootUrl
          }
        }
      }
    }
  `)

  return (
    <div className="contact-page content-block">
      <section {...props}>
        <h1 className="contact__headline">
          <FormattedMessage
            id="contact-block.title"
            defaultMessage="Contact form"
          />
        </h1>
        <div className="contact">
          <div className="contact__column contact-box-wrap">
            <div className="contact-box">
              <h2>
                <FormattedMessage
                  id="contact-block.contact_us"
                  defaultMessage="Nebo nás kontaktujte přímo"
                />
              </h2>
              <ul className="list list--unstyled list--adress">
                <li>
                  <a
                    className="anchor anchor--emphasized"
                    href={`mailto:${data.site.siteMetadata.company.contactEmail}`}
                  >
                    {data.site.siteMetadata.company.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    className="anchor anchor--emphasized"
                    href={`tel:${data.site.siteMetadata.company.phone}`}
                  >
                    {data.site.siteMetadata.company.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-box">
              <h2>
                <FormattedMessage
                  id="contact-block.karmen_adress_headline"
                  defaultMessage="Adresa společnosti"
                />
              </h2>
              <ul className="list list--unstyled list--adress">
                <li>Fragaria s.r.o.</li>
                <li>Ječná 507/6</li>
                <li>120 00 Praha 2</li>
                <li>
                  <FormattedMessage
                    id="contact-block.karmen_adress_cz"
                    defaultMessage="Česká republika"
                  />
                </li>
              </ul>
            </div>
            <div className="contact-box">
              <h2>
                <FormattedMessage
                  id="contact-block.karmen_watch_us"
                  defaultMessage="Sledujte nás"
                />
              </h2>
              <Social class="social--red" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactBlock
