/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import CookieConsent from "react-cookie-consent"

const BlankLayout = ({ children }) => (
  <>
    <CookieConsent
      location="bottom"
      buttonText="Got it!"
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
      This site uses its own cookies and third-party cookies to gather
      information on your browsing for statistical purposes. If you continue
      browsing or fill in the form, we consider that you accept its use and{" "}
      <a
        href="/documents/fragaria-privacy-policy.pdf"
        style={{ color: "#fff", textDecoration: "underline" }}
      >
        Fragaria Privacy Policy
      </a>
    </CookieConsent>
    <div className="page-container baseline-grid js-baseline-grid js-ie-warn">
      {children}
    </div>
  </>
)

BlankLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlankLayout
