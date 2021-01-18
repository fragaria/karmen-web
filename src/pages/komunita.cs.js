import React from "react"
import Layout from "layouts/en"
import { graphql } from "gatsby"

import SEOMetadata from "components/seo/metadata"
import CommunityResources from "components/page-blocks/community-resources"

const Komunita = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-community-resources">
      <SEOMetadata title="Komunita" pathname={location.pathname} />
      <h1 className="page-block-headline">Komunita</h1>
      <CommunityResources
        resources={data.resources.edges.map(({ node }) => node)}
      />
    </Layout>
  )
}

export default Komunita

export const pageQuery = graphql`
  query {
    resources: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/resources/cs/" } }
      sort: { fields: fields___slug }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            link
            linkTitle
          }
        }
      }
    }
  }
`
