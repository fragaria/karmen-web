import React from 'react'
import { graphql } from "gatsby"
import STLViewer from "multiple-stl-viewer"
import {isMobile} from 'react-device-detect';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"


const GcodeDetailTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark

  const responsive = {
    tablet: {
      breakpoint: { max: 7680, min: 630 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 630, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

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
          <a className="content-block--back" href="../" title="Back" ><span className="icon--arrow-left"></span><span className="hidden">Zpět</span></a>
          <header>
            <div className="page-block-headline">
              <h1>{post.frontmatter.title}</h1>
            </div>
          </header>

          <div className="v-gcode-detail">
            <div className="gcode-carousel-container">
              <Carousel
                responsive={responsive}
                showDots={post.frontmatter.downloads.length > 1}
                infinite={true}
                dotListClass="gcodes-dot-list"
                arrows={post.frontmatter.downloads.length > 1}
                renderButtonGroupOutside={true}
                // customButtonGroup={}
                renderDotsOutside={true}
                swipeable={false}
                draggable={false}
                autoPlay={false}
                shouldResetAutoplay={false}
              >
                {post.frontmatter.downloads.map((download, idx) => {
                  return <STLViewer
                          key={idx}
                          width={isMobile ? 500: 900}
                          height={isMobile ? 400: 500}
                          urls={['/gcodes/' + download + '.stl']}
                          stlColors={['#ea272e']}
                          bedColor="#ffffff"
                          bedDimensions={isMobile ? '0x0,250x0,250x250,0x250' : '0x0,170x0,170x170,0x170'}
                          backgroundColor='#ffffff'
                          rotate={true}
                          orbitControls={true}
                          rotationSpeeds={[0, 0, 0.005]}
                        />
                })}
              </Carousel>


            </div>

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
                  Soubory&nbsp;ke&nbsp;stažení
                </dt>

                <dd>
                  <ul>
                    {post.frontmatter.downloads.map((download) => {
                      const urlStl = '/gcodes/' + download + '.stl'
                      const url3mf = '/gcodes/' + download + '.3mf'

                      return (
                        <>
                          <li>
                            <a className="" href={urlStl}>{download + '.stl'}</a>
                          </li>
                          <li>
                            <a className="" href={url3mf}>{download + '.3mf'}</a>
                          </li>
                        </>
                      )
                    })}
                  </ul>
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
