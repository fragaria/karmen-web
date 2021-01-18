import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import BlogListing from "components/page-blocks/blog-listing"

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  const site = data.site

  return (
    <Layout location={location} containerClass="v-press">
      <SEOMetadata
        lang="cs"
        title="Blog"
        description="Všechny inovace vychází z lenosti. Stejně tak vznikla i Karmen."
        pathname="/cs/blog/"
      />
      <SEOBusinessInfo />

      <h1 className="page-block-headline">Blog</h1>

      <BlogListing posts={posts} site={site} location={location} />
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { lang: { eq: "cs" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "LL", locale: "cs")
            title
            lang
            description
          }
        }
      }
    }
  }
`
