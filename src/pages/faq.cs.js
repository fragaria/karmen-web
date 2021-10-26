import React from "react"
import Layout from "layouts/cs"
import { graphql } from "gatsby"

import SEOMetadata from "components/seo/metadata"
import LookHere from "../components/page-blocks/look-here"

const Faq = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-faq-resources">
      <SEOMetadata title="FAQ" lang="cs" pathname={location.pathname} />
      <h1 className="page-block-headline">Často kladené otázky</h1>
      <LookHere></LookHere>
    </Layout>
  )
}

export default Faq

export const pageQuery = graphql`
  query {
    faq: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/resources/faq/cs/" } }
      sort: { fields: fields___slug }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            active
          }
        }
      }
    }
  }
`
