/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "src/styles/global.scss"

// Load i18n graphql fragment
import { querying } from "src/i18n/querying" // eslint-disable-line

// Load imaging graphql fragments
// eslint-disable-next-line
import * as imaging from "src/imaging"

/**
 * Automatically redirect to /en if lang prefix is missing
 */
export const onClientEntry = () => {
  const hasLangPrefix =
    window.location.pathname.startsWith("/en") ||
    window.location.pathname.startsWith("/cs")

  if (window.location.pathname.startsWith("/en")) {
    const pathname = window.location.pathname.replace("/en", "");
    window.location.pathname = `/cs${pathname}`
  }

  if (!hasLangPrefix) {
    // window.location.pathname = `/en${window.location.pathname}`
    window.location.pathname = `/cs${window.location.pathname}`
  }
}

export const onRouteUpdate = ({ location }) => {
  anchorScroll(location)
  return true
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location && location.hash) {
    anchorScroll(location)
    return false
  } else {
    return true
  }
}

function anchorScroll(location) {
  if (location && location.hash) {
    setTimeout(() => {
      const elm = document.querySelector(`${location.hash}`)
      elm.scrollIntoView({ behavior: "smooth" })
    }, 20)
  }
}
