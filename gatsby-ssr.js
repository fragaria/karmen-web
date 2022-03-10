/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require("react")

// You can delete this file if you're not using it

// Load i18n graphql fragment
const { querying } = require("src/i18n/querying")

// Load imaging graphql fragments
// eslint-disable-next-line
// import * as imaging from "src/imaging"

const HeadComponents = [
  <script key="octobat-beanie" src="https://cdn.jsdelivr.net/gh/0ctobat/octobat-beanie.js@latest/dist/octobat-beanie.min.js" />,
  <script key="packeta" src="https://widget.packeta.com/v6/www/js/library.js" />,
]

exports.onRenderBody = ({
  setHeadComponents,
}, pluginOptions) => {
  setHeadComponents(HeadComponents)
}
