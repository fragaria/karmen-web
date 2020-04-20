import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import PricingBlock from "components/page-blocks/pricing"
import TestimonialsBlock from "components/page-blocks/testimonials"
import StoryBlock from "components/page-blocks/story"

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-home">
      <SEOMetadata title="Vítejte" />
      <SEOBusinessInfo />

      <div className="content-block">
        <PricingBlock location={location} className="v-home-pricing v-home-section" />
        <TestimonialsBlock className="v-home-testimonials v-home-section" />
      </div>

      <div className="content-block content-block--sitenavwide">
        <StoryBlock className="v-home-story v-home-section" />
      </div>
    </Layout>
  )
}

export default IndexPage

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
