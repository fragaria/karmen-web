import React from "react"
import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import ProductBlockKarmenPillDiy from "components/product-detail/karmen-diy.js"

const KarmenDiy = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-product-detail">
      <SEOMetadata
        lang="cs"
        title="Karmen Pill Skládačka"
        description="Detaily o Karmen Pill Skládačce"
        pathname="/cs/produkty/karmen-pill-skladacka/"
      />
      <SEOBusinessInfo />
      <ProductBlockKarmenPillDiy />
    </Layout>
  )
}

export default KarmenDiy
