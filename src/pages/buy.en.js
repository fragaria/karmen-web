import React from "react"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import CheckoutBooth from "components/checkout/booth"

const BuyPage = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-buy">
      <SEOMetadata title="Buy Karmen" />
      <SEOBusinessInfo />
      <div className="content-block">
        <CheckoutBooth location={location} />
      </div>
    </Layout>
  )
}

export default BuyPage
