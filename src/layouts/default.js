/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentLangKey } from "ptz-i18n"
import {
  IntlProvider,
  FormattedMessage,
  defineMessages,
  useIntl,
} from "react-intl"
import CookieConsent from "react-cookie-consent"
import "intl"

import Sitenav from "components/sitenav"
import Footer from "components/footer"
// import IEWarning from "../legacy/ie-warning"

import BlankLayout from "./blank"

const messages = defineMessages({
  cta: {
    id: "cookieconsent.cta",
    defaultMessage: "Got it!",
  },
})

const CC = () => {
  const intl = useIntl()

  return (
    <CookieConsent
      location="bottom"
      buttonText={intl.formatMessage(messages.cta)}
      cookieName="cookieConsent"
      style={{
        background: "#ea272e",
        fontSize: ".9rem",
        boxShadow: "-10px -10px 16px rgba(255, 255, 255, .4)",
        padding: ".5rem",
      }}
      buttonStyle={{
        fontFamily: "'Trivia Grotesk N2', Helvetica, Arial, sans-serif",
        color: "#fff",
        background: "#000",
        fontSize: "1rem",
      }}
      contentStyle={{
        maxWidth: "80em",
        textAlign: "center",
        margin: "auto",
      }}
      expires={150}
    >
      <FormattedMessage
        id="cookieconsent.statement"
        defaultMessage="This site uses its own cookies and third-party cookies to gather information on your browsing for statistical purposes. If you continue browsing or fill in the form, we consider that you accept its use and <a>Fragaria Privacy Policy</a>."
        values={{
          a: (...chunks) => (
            <a
              href="/documents/fragaria-privacy-policy.pdf"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              {chunks}
            </a>
          ),
        }}
      />
    </CookieConsent>
  )
}

const Layout = ({ children, location, i18nMessages, containerWrapperClass = "page-container-wrapper--gray" } = {}) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          ...Languages
        }
      }
    }
  `)

  const url = location.pathname
  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const wrapperClassName = classNames("page-container-wrapper", containerWrapperClass)

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <BlankLayout>
        <CC />
        <Sitenav location={location} />
        <div className={wrapperClassName}>
          <div className="page-container__inner">
            {/* <IEWarning /> */}
            {children}
          </div>
        </div>
        <Footer location={location} />
      </BlankLayout>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
