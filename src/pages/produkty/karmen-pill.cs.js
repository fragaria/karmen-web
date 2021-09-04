import React from "react"
import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import ProductBlockKarmenPill from "components/product-detail/karmen-pill.js"

const KarmenPill = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-product-detail">
      <SEOMetadata
        lang="cs"
        title="Karmen Pill"
        description="Detail produktu Karmen Pill"
        pathname="/cs/produkty/karmen-pill/"
      />
      <SEOBusinessInfo />
      <ProductBlockKarmenPill/>
    </Layout>
  )
}

export default KarmenPill
