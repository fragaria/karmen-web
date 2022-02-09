import React, { useState } from 'react'
import { graphql } from "gatsby"
import { StlViewer } from 'react-stl-file-viewer'

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

const GcodeDetailTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const [volume, setvolume] = useState(0)
  const url = '/gcodes/' + post.frontmatter.gcode + '.stl'
  console.log(post)
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
            <StlViewer
              width={900}
              height={600}
              url={url}
              groundColor='rgb(255, 255, 255)'
              objectColor='rgb(234,39,46)'
              skyboxColor='rgb(255, 255, 255)'
              gridLineColor='rgb(0, 0, 0)'
              lightColor='rgb(255, 255, 255)'
              volume={setvolume}
              style={{ position: "absolute"}}
            />
            <section className="v-gcode-detail--content typeset">
              <div
                dangerouslySetInnerHTML={{ __html: post.html }}
                className="text-left"
              />

              <dl>
                <dt>Materiál</dt>
                <dd>
                  {post.frontmatter.material.material}
                  <small>{post.frontmatter.material.description}</small>
                </dd>

                <dt>Support&nbsp;materiál</dt>
                <dd>
                  {post.frontmatter.support}
                </dd>

                <dt>Výška&nbsp;vrstvy</dt>
                <dd>
                  {post.frontmatter.layer}
                </dd>

                <dt>
                  Soubor
                  {post.frontmatter.downloads.length > 1 ? "y" : ""}
                  &nbsp;ke&nbsp;stažení
                </dt>

                <pre>
                  {post.frontmatter.downloads.length > 1}
                </pre>


                <dd>
                  {post.frontmatter.downloads.length > 1 && (
                    <ul>
                      {post.frontmatter.downloads.map((download) => {
                        const url = '/gcodes/' + download + '.stl'

                        return (
                          <li>
                            <a className="" href={url}>{download + '.stl'}</a>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                  {post.frontmatter.downloads.length == 1 && (
                    <a className="" href={url}>{post.frontmatter.gcode + '.stl'}</a>
                  )}
                  </dd>
              </dl>
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
        material {
          material
          description
        }
        support
        layer
        downloads
      }
    }
  }
`
