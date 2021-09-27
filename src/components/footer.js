import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { useIntl, FormattedMessage } from "react-intl"

import Social from "./social"

import strawberryImg from "assets/img/strawberry.svg"
import karmenImg from "assets/img/karmen-logo.svg"

const FooterLinks = ({ navGroups }) => (
  <nav aria-label="Footer" className="footer-linkgroups">
    <div className="footer-linkgroups__container">
      <ul className="footer-linkgroups__group">
      {navGroups.map(item => (
            <li
              key={item.url}
              className="footer-linkgroups__item"
            >
              <a href={item.url}>{item.name}</a>
            </li>
      ))}
      </ul>
    </div>
  </nav>
)

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          company {
            officialName
            phone
            contactEmail
          }
          productsNav {
            en {
              name
              url
            }
            cs {
              name
              url
            }
          }
          nav {
            en {
              name
              url
            }
            cs {
              name
              url
            }
          }
          ...Languages
        }
      }
    }
  `)

  const currentYear = new Date().getFullYear()
  const intl = useIntl()

  return (
    <footer className="footer" id="community">
      <div className="footer__section">
        <div className="content-block footer-sitelinks">
          <div className="footer__row">
            <div className="footer__col">
              <h5 className="footer-linkgroups__title">Stránky</h5>
              <FooterLinks
                navGroups={data.site.siteMetadata.nav[intl.locale]}
              />
            </div>
            <div className="footer__col">
              <h5 className="footer-linkgroups__title">Naše produkty</h5>
              <FooterLinks
                navGroups={data.site.siteMetadata.productsNav[intl.locale]}
              />
            </div>
            <div className="footer__col">
              <h5 className="footer-linkgroups__title">Kontaktujte nás</h5>
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
            <div className="footer__col">
              <h5 className="footer-linkgroups__title">Sledujte nás</h5>
              <Social class="social--footer" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__section">
        <div className="content-block footer__bottom">
          <div className="footer__brandinfo">
            <div className="footer__meta">
              <a
                href="https://fragaria.cz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt={data.site.siteMetadata.company.officialName}
                  className="footer__brand"
                  src={strawberryImg}
                />
              </a>
              <div className="footer__copy">
                <div className="footer__copy-line footer__copy-line--emphasized">
                  <a
                    href="https://fragaria.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FRAGARIA &copy; {currentYear}
                  </a>
                </div>
                <div className="footer__copy-line">
                  Talk is cheap, show me the code.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
