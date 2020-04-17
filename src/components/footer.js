import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import classNames from "classnames"
import { defineMessages, useIntl } from "react-intl"
import { getCurrentLangKey } from "ptz-i18n"

import strawberryImg from "assets/img/strawberry.svg"
import karmenImg from "assets/img/logo.svg"

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
  <nav aria-label="Footer" className="footer__linkgroups">
    <div className="content-block">
        {navGroups.map((group, index) =>
          <ul key={index} className="footer__linkgroup">
            {group.map(item => <li key={item.url} className="footer__linkitem"><a href={item.url}>{item.name}</a></li>)}
          </ul>
        )}
    </div>
  </nav>
)

const Footer = ({ location }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          company {
            officialName
            social {
              github
              readthedocs
              twitter
              facebook
              youtube
            }
          }
          footerNav {
            en { name, url }
            cs { name, url }
          }
          ...Languages
        }
      }
    }
  `)

  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, location.pathname)

  const currentYear = new Date().getFullYear()
  const intl = useIntl()

  return (
    <footer className="footer">
      <div className="footer__section footer__section--sitelinks">
        <FooterLinks navGroups={data.site.siteMetadata.footerNav[langKey]} />
        <img className="footer__karmenlogo" src={karmenImg} alt="Karmen"/>
      </div>
      <div className="footer__section">
        <div className="content-block">
          <div className="footer__brandinfo">
            <a
              className="footer__meta"
              href="https://fragaria.cz"
              target="_blank"
              rel="noopener"
            >
              <img
                alt={data.site.siteMetadata.company.officialName}
                className="footer__brand"
                src={strawberryImg}
              />
              <div className="footer__copy">
                <div className="footer__copy-line footer__copy-line--emphasized">
                  FRAGARIA &copy; {currentYear}
                </div>
                <div className="footer__copy-line">
                  Talk is cheap, show me the code.
                </div>
              </div>
            </a>
            <div className="footer__social">
              {data.site.siteMetadata.company.social.github && (
                <a
                  href={
                    "https://github.com/" +
                    data.site.siteMetadata.company.social.github
                  }
                  className="icon--github footer__social-icon"
                  title={intl.formatMessage(messages.ghProfileTitle)}
                ></a>
              )}
              {data.site.siteMetadata.company.social.readthedocs && (
                <a
                  href={`https://${data.site.siteMetadata.company.social.readthedocs}.readthedocs.io/`}
                  className="icon--readthedocs footer__social-icon"
                  title={intl.formatMessage(messages.docsTitle)}
                ></a>
              )}
              {data.site.siteMetadata.company.social.twitter && (
                <a
                  href={`https://twitter.com/${data.site.siteMetadata.company.social.twitter}`}
                  className="icon--twitter footer__social-icon"
                  title={intl.formatMessage(messages.twProfileTitle)}
                ></a>
              )}
              {data.site.siteMetadata.company.social.facebook && (
                <a
                  href={`https://facebook.com/${data.site.siteMetadata.company.social.facebook}`}
                  className="icon--facebook footer__social-icon"
                  title={intl.formatMessage(messages.fbProfileTitle)}
                ></a>
              )}
              {data.site.siteMetadata.company.social.youtube && (
                <a
                  href={`https://www.youtube.com/channel/${data.site.siteMetadata.company.social.youtube}`}
                  className="icon--youtube footer__social-icon"
                  title={intl.formatMessage(messages.ytChannelTitle)}
                ></a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
