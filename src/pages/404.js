import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "layouts/blank"

import SEOMetadata from "components/seo/metadata"
import SEOJsonLd from "components/seo/seo-json-ld"

import karmenLogoImg from "assets/img/karmen-logo-stroked.svg"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          company {
            officialName
            social {
              github
              readthedocs
              twitter
              facebook
              youtube
            }
          }
        }
      }
    }
  `)

  return (
    <Layout lang="en" wrapperClass="page-container--nopush">
      <SEOMetadata title="Oh-oh! There is nothing here." />
      <SEOJsonLd title="Not found" />
      <div className="v-error typeset">
        <div className="v-error__inner">
          <img
            alt={data.site.siteMetadata.company.officialMame}
            src={karmenLogoImg}
          />
          <h1>Oh-oh! There is nothing here.</h1>
          <h3>Sorry, we couldn't find the page you were looking for.</h3>
          <div className="text-center">
            <a href="/" className="button" role="button">
              See homepage instead
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
