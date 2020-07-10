import React from "react"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import SEOJsonLd from "components/seo/seo-json-ld"

import AboutBlock from "components/page-blocks/about"

const StoryPage = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-story">
      <SEOMetadata
        title="The Karmen story"
        description="All innovations come from laziness. And that was of course the case of Karmen too."
        pathname="/en/story/"
      />
      <SEOBusinessInfo />
      <SEOJsonLd
        title="The Karmen story"
        pathname="/en/story/"
      />

      <AboutBlock />
    </Layout>
  )
}

export default StoryPage
