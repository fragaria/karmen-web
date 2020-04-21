import React from "react"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import AboutBlock from "components/page-blocks/about"

const StoryPage = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-story">
      <SEOMetadata title="Příběh Karmen" />
      <SEOBusinessInfo />
      <AboutBlock />
    </Layout>
  )
}

export default StoryPage
