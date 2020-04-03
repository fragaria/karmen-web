import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layouts/blank"
import SEOMetadata from "../components/seo/metadata"

import karmenLogoImg from "assets/img/karmen-logo.svg"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query NotFoundQuery {
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
    <Layout lang="en">
      <SEOMetadata title="Oh-oh! There is nothing here." />
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
              Go to homepage instead
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
