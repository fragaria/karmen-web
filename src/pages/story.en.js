import React from "react"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import AboutBlock from "components/page-blocks/about"

const StoryPage = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-story">
      <SEOMetadata title="Karmen story" />
      <SEOBusinessInfo />
      <AboutBlock />
    </Layout>
  )
}

export default StoryPage
