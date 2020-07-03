import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { defineMessages, useIntl, FormattedMessage } from "react-intl"

import strawberryImg from "assets/img/strawberry.svg"
import karmenImg from "assets/img/karmen-logo.svg"

const messages = defineMessages({
  ghProfileTitle: {
    id: "footer.gh_profile_title",
    defaultMessage: "GitHub profile page",
  },
  twProfileTitle: {
    id: "footer.tw_profile_title",
    defaultMessage: "Twitter profile page",
  },
  fbProfileTitle: {
    id: "footer.fb_profile_title",
    defaultMessage: "Facebook profile page",
  },
  ytChannelTitle: {
    id: "footer.yt_channel_title",
    defaultMessage: "Karmen YouTube channel",
  },
  docsTitle: {
    id: "footer.docs_title",
    defaultMessage: "Karmen docs",
  },
})

const FooterLinks = ({ navGroups }) => (
  <nav aria-label="Footer" className="footer-linkgroups">
    <h1 className="footer-linkgroups__title">
      <FormattedMessage
        id="footer.community"
        defaultMessage="Community"
      />
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
            social {
              github
              twitter
              facebook
              youtube
            }
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
            {data.site.siteMetadata.company.social.github && (
              <a
                href={
                  "https://github.com/" +
                  data.site.siteMetadata.company.social.github
                }
                className="icon--github footer__social-icon"
                title={intl.formatMessage(messages.ghProfileTitle)}
              >
                <span>{intl.formatMessage(messages.ghProfileTitle)}</span>
              </a>
            )}
            {data.site.siteMetadata.company.social.twitter && (
              <a
                href={`https://twitter.com/${data.site.siteMetadata.company.social.twitter}`}
                className="icon--twitter footer__social-icon"
                title={intl.formatMessage(messages.twProfileTitle)}
              >
                <span>{intl.formatMessage(messages.twProfileTitle)}</span>
              </a>
            )}
            {data.site.siteMetadata.company.social.facebook && (
              <a
                href={`https://facebook.com/${data.site.siteMetadata.company.social.facebook}`}
                className="icon--facebook footer__social-icon"
                title={intl.formatMessage(messages.fbProfileTitle)}
              >
                <span>{intl.formatMessage(messages.fbProfileTitle)}</span>
              </a>
            )}
            {data.site.siteMetadata.company.social.youtube && (
              <a
                href={`https://www.youtube.com/channel/${data.site.siteMetadata.company.social.youtube}`}
                className="icon--youtube footer__social-icon"
                title={intl.formatMessage(messages.ytChannelTitle)}
              >
                <span>{intl.formatMessage(messages.ytChannelTitle)}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
