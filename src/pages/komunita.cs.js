import React from "react"
import Layout from "layouts/cs"
import { graphql } from "gatsby"

import SEOMetadata from "components/seo/metadata"
import CommunityResources from "components/page-blocks/community-resources"
import { BackgroundImage } from "../components/image"

const Komunita = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-community-resources">
      <SEOMetadata title="Komunita" pathname={location.pathname} />
      <BackgroundImage file={data.cover} className="community">
        <div className="community__cover">
          <div className="content-block">
            <h1 className="community__headline">Komunita</h1>
          </div>
        </div>
      </BackgroundImage>
      <CommunityResources
        resources={data.resources.edges.map(({ node }) => node)}
      />
    </Layout>
  )
}

export default Komunita

export const pageQuery = graphql`
  query {
    cover: file(relativePath: { eq: "community-lead.jpg" }) {
      ...fluidImage1920
    }
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
            ico
          }
        }
      }
    }
  }
`
