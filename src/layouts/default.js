/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { IntlProvider } from "react-intl"
import "intl"

import Sitenav from "components/sitenav"
import Footer from "components/footer"
// import IEWarning from "../legacy/ie-warning"

import BlankLayout from "./blank"

const Layout = ({ children, location, i18nMessages }) => {
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

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <BlankLayout>
        <Sitenav />
        <div className="page-container__inner sitenav-wrapper">
          <div className="sitenav-wrapper__push">
            {/* <IEWarning /> */}
            {children}
            <Footer />
          </div>
        </div>
      </BlankLayout>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
