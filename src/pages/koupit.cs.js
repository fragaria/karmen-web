import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import CheckoutBooth from "components/checkout/booth"

const BuyPage = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-buy">
      <SEOMetadata title="Koupit Karmen" />
      <SEOBusinessInfo />
      <div className="content-block">
        <CheckoutBooth location={location} />
      </div>
    </Layout>
  )
}

export default BuyPage
