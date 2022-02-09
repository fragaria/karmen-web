import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
// import SEOBusinessInfo from "components/seo/business-info"

import GcodesListing from "components/page-blocks/gcodes-listing"

const GcodesPage = ({ data, location }) => {
  const site = data.site
  return (
    <Layout location={location} containerClass="v-gcodes">
      <SEOMetadata title="Gcodes" pathname={location.pathname} />

      <h1 className="page-block-headline">Modely ke stažení</h1>

      <GcodesListing list={data.resources} site={site} location={location} />
    </Layout>
  )
}


export default GcodesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    resources: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/gcodes/" } }
      sort: { fields: fields___slug }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            gcode
            title
            lang
            description
          }
        }
      }
    }
  }
`
