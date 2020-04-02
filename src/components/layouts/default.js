/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Sitenav from "../sitenav"
import Footer from "../footer"
import IEWarning from "../legacy/ie-warning";

import BlankLayout from "./blank"

const Layout = ({ lang, children }) => (
    <BlankLayout>
        <Sitenav lang={lang} />
        <div className="page-container__inner sitenav-wrapper">
          <div className="sitenav-wrapper__push">
              <IEWarning />
              {children}
              <Footer />
          </div>
        </div>
    </BlankLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
