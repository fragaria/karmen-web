import React from "react"
import ReactDOM from 'react-dom';
import { graphql } from "gatsby"
import { GCodeViewer } from "react-gcode-viewer";

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

const GcodeDetailTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const url = "https://storage.googleapis.com/ucloud-v3/6127a7f9aa32f718b8c1ab4f.gcode"
  return (
    <Layout location={location} containerClass="v-blog v-blog-detail">
      <SEOMetadata
        title={post.frontmatter.title}
        description={post.excerpt}
        pathname={location.pathname}
      />
      <SEOBusinessInfo />
      {post && (
        <article className="content-block content-block--narrower">
          <header>
            <h1 className="page-block-headline">{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
          </header>
          <img src="https://user-images.githubusercontent.com/461650/133330840-d11e4681-e265-45d0-b1d9-633ef285d972.png" />
          {/* <GCodeViewer
            orbitControls
            url={url}
            // url={'/gcodes/' + post.frontmatter.gcode + '.stl'}
          /> */}

          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="text-left"
          />
          <a className="button button--primary" href={'/gcodes/' + post.frontmatter.gcode + '.stl'}>Stáhnout</a>
        </article>
      )}
    </Layout>
  )
}

export default GcodeDetailTemplate

export const pageQuery = graphql`
  query GcodeDetailBySlug($slug: String!) {
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
        gcode
        description
      }
    }
  }
`
