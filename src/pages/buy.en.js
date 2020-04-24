import React from "react"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import BuyBlock from "components/page-blocks/buy"

const BuyPage = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-buy">
      <SEOMetadata title="Buy Karmen" />
      <SEOBusinessInfo />
      <BuyBlock />
    </Layout>
  )
}

export default BuyPage
