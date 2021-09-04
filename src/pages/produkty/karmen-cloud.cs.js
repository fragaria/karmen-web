import React from "react"
import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import ProductBlockKarmenCloud from "components/product-detail/karmen-cloud.js"

const KarmenPill = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-product-detail">
      <SEOMetadata
        lang="cs"
        title="Karmen Pill"
        description="Detail produktu Karmen Cloud"
        pathname="/cs/produkty/karmen-cloud/"
      />
      <SEOBusinessInfo />
      <ProductBlockKarmenCloud/>
    </Layout>
  )
}

export default KarmenPill
