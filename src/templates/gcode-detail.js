import React from "react"
// import ReactDOM from 'react-dom';
import { graphql } from "gatsby"
// import { GCodeViewer } from "react-gcode-viewer";

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

const GcodeDetailTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const url = "https://storage.googleapis.com/ucloud-v3/6127a7f9aa32f718b8c1ab4f.gcode"
  return (
    <Layout location={location} containerClass="v-gcode v-gcode-detail">
      <SEOMetadata
        title={post.frontmatter.title}
        description={post.excerpt}
        pathname={location.pathname}
      />
      <SEOBusinessInfo />
      {post && (
        <article className="content-block content-block--narrower content-block--relative">
          <a className="content-block--back" href="../" ><span className="icon--arrow-left"></span></a>
          <header>
            <div className="page-block-headline">
              <h1>{post.frontmatter.title}</h1>
            </div>
          </header>
          <div className="v-gcode-detail">
            <img className="image" width="1200" src="https://user-images.githubusercontent.com/461650/133330840-d11e4681-e265-45d0-b1d9-633ef285d972.png" />
            {/* <GCodeViewer
              orbitControls
              url={url}
              // url={'/gcodes/' + post.frontmatter.gcode + '.stl'}
            /> */}

            <section className="v-gcode-detail--content">
              <div
                dangerouslySetInnerHTML={{ __html: post.html }}
                className="text-left"
              />
              <div className="text-center">
                <a className="button button--primary u-margin--top1" href={'/gcodes/' + post.frontmatter.gcode + '.stl'}>Stáhnout</a>
              </div>
            </section>
          </div>
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
