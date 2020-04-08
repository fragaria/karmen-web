import { graphql } from "gatsby"

export const querying = graphql`
  fragment Languages on SiteSiteMetadata {
    languages {
      langs
      defaultLangKey
    }
  }
`
