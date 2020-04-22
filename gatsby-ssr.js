/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// Load i18n graphql fragment
import { querying } from "src/i18n/querying"

// Load imaging graphql fragments
// eslint-disable-next-line
import {
  fluidImage300,
  fluidImage600,
  fluidImage750,
  fluidImage1024,
  fluidImage1920,
} from "src/imaging"
