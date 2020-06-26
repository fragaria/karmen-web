import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import PressListing from "components/page-blocks/press-listing"

const PressPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  const site = data.site

  return (
    <Layout location={location} containerClass="v-press">
      <SEOMetadata
        lang="cs"
        title="Tiskové zprávy"
        description="Všechny inovace vychází z lenosti. Stejně tak vznikla i Karmen."
        pathname="/cs/press/"
      />
      <SEOBusinessInfo />

      <h1 className="page-block-headline">
        Tiskové zprávy
      </h1>

      <PressListing
        posts={posts}
        site={site}
        location={location}
       />
    </Layout>
  )
}

export default PressPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {lang: {eq: "cs"}}}
     ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            lang
            description
          }
        }
      }
    }
  }
`
