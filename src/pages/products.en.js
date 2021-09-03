import React from "react"
import Layout from "layouts/cs"
import ProductsBlock from "../components/page-blocks/products"

import SEOMetadata from "components/seo/metadata"

const Products = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-products">
      <SEOMetadata
        lang="en"
        title="Products"
        pathname={location.pathname}
      />
      <ProductsBlock location={location} />
    </Layout>
  )
}

export default Products
