import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import HeroBlock from "components/page-blocks/hero"
import MeetKarmenBlock from "components/page-blocks/meet-karmen"
import PricingBlock from "components/page-blocks/pricing"
import PrincipleBlock from "components/page-blocks/principle"
import SolutionBlock from "components/page-blocks/solution"
import StoryBlock from "components/page-blocks/story"
import TestimonialsBlock from "components/page-blocks/testimonials"

const IndexPage = ({ data, location }) => {
  const testimonials = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} containerClass="v-home">
      <SEOMetadata
        title="S Karmen máte 3D tiskárny vždy po ruce"
        lang="cs"
        pathname="/cs/"
      />
      <SEOBusinessInfo />
      <HeroBlock className="v-home-hero v-home-section" />
      <MeetKarmenBlock className="v-home-meet-karmen v-home-section" />
      <SolutionBlock className="v-home-solution v-home-section" />
      <PricingBlock
        location={location}
        className="v-home-pricing v-home-section"
      />
      <PrincipleBlock className="v-home-principle v-home-section" />
      <TestimonialsBlock testimonials={testimonials}/>
      <StoryBlock className="v-home-story v-home-section" />
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/resources/testimonials/cs/" } }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            person
            institution
          }
        }
      }
    }
  }
`
