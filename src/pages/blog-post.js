import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

const PressPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark

  return (
    <Layout location={location} containerClass="v-blog v-blog-detail">
      <SEOMetadata
        title="The Karmen story"
        description="All innovations come from laziness. And that was of course the case of Karmen too."
        pathname="/en/story/"
      />
      <SEOBusinessInfo />
      {post && (
        <article className="content-block content-block--narrower">
          <header>
            <h1 className="page-block-headline">{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="text-left"
          />
        </article>
      )}
    </Layout>
  )
}

export default PressPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $lang: String!) {
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
        date(formatString: "LL", locale: $lang)
        description
      }
    }
  }
`
