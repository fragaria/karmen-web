import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import PressListing from "components/page-blocks/press-listing"

import karmenLogo from "assets/img/karmen-logo-social-media.png"

const PressPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  const site = data.site

  return (
    <Layout location={location} containerClass="v-press">
      <SEOMetadata
        title="Press releases"
        description="All innovations come from laziness. And that was of course the case of Karmen too."
        pathname="/en/press/"
      />
      <SEOBusinessInfo />

      <h1 className="page-block-headline">
        Press Releases
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
      filter: {frontmatter: {lang: {eq: "en"}}}
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
            description
          }
        }
      }
    }
  }
`
