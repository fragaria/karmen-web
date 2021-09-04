import React from "react"
import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import ProductBlockKarmenCloud from "components/product-detail/karmen-cloud.js"

const KarmenPill = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-product-detail">
      <SEOMetadata
        lang="en"
        title="Karmen Pill"
        description="Details about Karmen Cloud"
        pathname="/en/products/karmen-cloud/"
      />
      <SEOBusinessInfo />
      <ProductBlockKarmenCloud/>
    </Layout>
  )
}

export default KarmenPill
