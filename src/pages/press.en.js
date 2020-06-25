import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import karmenLogo from "assets/img/karmen-logo-social-media.png"

const PressPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  const site = data.site

  return (
    <Layout location={location} containerClass="v-press">
      <SEOMetadata
        title="Press"
        description="All innovations come from laziness. And that was of course the case of Karmen too."
        pathname="/en/press/"
      />
      <SEOBusinessInfo />

      <article itemType="http://schema.org/Organization" itemScope>
        <span
          itemProp="logo"
          itemType="http://schema.org/ImageObject"
          itemScope
          className="hidden"
        >
          <meta itemProp="caption" content={site.siteMetadata.title} />
          <meta itemProp="url" content={karmenLogo} />
          <meta itemProp="width" content="1000" />
          <meta itemProp="height" content="1000" />
        </span>
        <meta itemProp="url" content={site.siteMetadata.siteUrl} />
        <section>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className="content-block content-block--narrower">
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}

        </section>
      </article>
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
