import React from "react"
import Layout from "layouts/cs"
import ProductsBlock from "../components/page-blocks/products"

import SEOMetadata from "components/seo/metadata"

const Produkty = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-products">
      <SEOMetadata
        lang="cs"
        title="Produkty"
        pathname={location.pathname}
      />
      <ProductsBlock location={location} />
    </Layout>
  )
}

export default Produkty
