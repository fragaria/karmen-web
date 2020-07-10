import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import SEOJsonLd from "components/seo/seo-json-ld"

const PressPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark

  return (
    <Layout location={location} containerClass="v-press v-press-detail">
      <SEOMetadata
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <SEOBusinessInfo />
      <SEOJsonLd
        lang={post.frontmatter.lang}
        title={post.frontmatter.title}
        pathname={pageContext.slug}
      />
      {post && (
        <article className="content-block content-block--narrower">
          <header>
            <h1 className="page-block-headline">
              {post.frontmatter.title}
            </h1>
            <small>
              {post.frontmatter.date}
            </small>
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
