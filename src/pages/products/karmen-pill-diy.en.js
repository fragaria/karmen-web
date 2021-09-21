import React from "react"
import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"

import ProductBlockKarmenPillDiy from "components/product-detail/karmen-diy.js"

const KarmenDiy = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-product-detail">
      <SEOMetadata
        lang="en"
        title="Karmen Pill DIY"
        description="Details about Karmen Pill DIY"
        pathname="/en/products/karmen-pill-diy/"
      />
      <SEOBusinessInfo />
      <ProductBlockKarmenPillDiy />
    </Layout>
  )
}

export default KarmenDiy
