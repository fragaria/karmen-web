import React from "react"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import ProductBlockKarmenPill from "components/product-detail/karmen-pill.js"

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
      <ProductBlockKarmenPill />
    </Layout>
  )
}

export default KarmenPill
