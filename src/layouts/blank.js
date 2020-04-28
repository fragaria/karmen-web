/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import IEWarning from "components/legacy/ie-warning"

const BlankLayout = ({ wrapperClass = "", children } = {}) => {
  const containerClass = classNames(
    "page-container baseline-grid",
    wrapperClass
  )
  return <IEWarning className={containerClass}>{children}</IEWarning>
}

BlankLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlankLayout
