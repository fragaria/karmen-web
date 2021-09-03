import React from "react"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"


const KarmenPill = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-product-detail">
      <SEOMetadata
        lang="en"
        title="Karmen Pill"
        description="Details about Karmen Pill"
        pathname="/en/products/karmen-pill/"
      />
      <SEOBusinessInfo />
      <h1>Karmen Pill EN</h1>
    </Layout>
  )
}

export default KarmenPill
