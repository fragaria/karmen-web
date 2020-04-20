import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import PricingBlock from "components/page-blocks/pricing"
import TestimonialsBlock from "components/page-blocks/testimonials"

const IndexENPage = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-home">
      <SEOMetadata title="Welcome" />
      <SEOBusinessInfo />

      <div className="content-block">
        <PricingBlock location={location} className="v-home-pricing v-home-section" />
        <TestimonialsBlock className="v-home-testimonials v-home-section" />
      </div>
    </Layout>
  )
}

export default IndexENPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        company {
          contactEmail
          social {
            twitter
            github
          }
        }
      }
    }
  }
`
