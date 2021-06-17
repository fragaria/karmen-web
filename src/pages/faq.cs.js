import React from "react"
import Layout from "layouts/cs"
import { graphql, Link } from "gatsby"

import SEOMetadata from "components/seo/metadata"
import FaqResources from "components/page-blocks/faq-resources"
import { FormattedMessage } from "react-intl"
import LookHere from "../components/page-blocks/look-here"

const Faq = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-faq-resources">
      <SEOMetadata title="Faq"
                   lang="cs"
                   pathname={location.pathname} />
      <h1 className="page-block-headline">Často kladené otázky</h1>
      <FaqResources
        resources={data.faq.edges.map(({ node }) => node)}
      />
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
