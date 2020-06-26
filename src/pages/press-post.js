import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

const PressPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} containerClass="v-press">
      <SEOMetadata
        title="The Karmen story"
        description="All innovations come from laziness. And that was of course the case of Karmen too."
        pathname="/en/story/"
      />
      <SEOBusinessInfo />

      <article className="content-block content-block--narrower">
        <header>
          <h1 className="page-block-headline">
            {post.frontmatter.title}
          </h1>
          <p>
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export default PressPostTemplate

export const pageQuery = graphql`
  query PressPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        lang
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
