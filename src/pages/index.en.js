import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import CasesBlock from "components/page-blocks/cases"
import HeroBlock from "components/page-blocks/hero"
import PricingBlock from "components/page-blocks/pricing"
import PrincipleBlock from "components/page-blocks/principle"
import TestimonialsBlock from "components/page-blocks/testimonials"
import SolutionBlock from "components/page-blocks/solution"
import SpecsBlock from "components/page-blocks/specs"
import ContactBlock from "components/page-blocks/contact"
import StoryBlock from "components/page-blocks/story"
import MeetKarmenBlock from "components/page-blocks/meet-karmen"

const IndexENPage = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-home">
      <SEOMetadata
        title="Your 3D printers anytime, anywhere with Karmen"
        pathname="/en/"
      />
      <SEOBusinessInfo />
      <HeroBlock className="v-home-hero v-home-section" />
      <MeetKarmenBlock className="v-home-meet-karmen v-home-section" />
      <SolutionBlock className="v-home-solution v-home-section" />
      <PrincipleBlock className="v-home-principle v-home-section" />
      <PricingBlock
        location={location}
        className="v-home-pricing v-home-section"
      />
      <CasesBlock className="v-home-cases v-home-section" />
      <SpecsBlock className="v-home-specs v-home-section" />
      <TestimonialsBlock className="v-home-testimonials v-home-section" />
      <ContactBlock className="v-home-story v-home-section" />
      <StoryBlock className="v-home-story v-home-section" />
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
