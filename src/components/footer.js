import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { useIntl, FormattedMessage } from "react-intl"

import Social from "./social"

import strawberryImg from "assets/img/strawberry.svg"
import karmenImg from "assets/img/karmen-logo.svg"

const FooterLinks = ({ navGroups }) => (
  <nav aria-label="Footer" className="footer-linkgroups">
    <h1 className="footer-linkgroups__title">
      <FormattedMessage id="footer.community" defaultMessage="Community" />
    </h1>
    <div className="footer-linkgroups__container">
      {navGroups.map((group, index) => (
        <ul key={index} className="footer-linkgroups__group arrow-list">
          {group.map(item => (
            <li
              key={item.url}
              className="footer-linkgroups__item arrow-list__item"
            >
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      ))}
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
          }
          footerNav {
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
          <FooterLinks
            navGroups={data.site.siteMetadata.footerNav[intl.locale]}
          />
          <img className="footer__karmenlogo" src={karmenImg} alt="Karmen" />
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
          <div className="footer__social">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
