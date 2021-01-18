import React from "react"
import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import OrderConfirmationBlock from "components/page-blocks/order-confirmation"

const OrderConfirmation = ({ location }) => {
  const locationParams = new URLSearchParams(location.search)

  return (
    <Layout location={location}>
      <SEOMetadata
        title="Order confirmation"
        pathname="/en/order-confirmation/"
      />
      <OrderConfirmationBlock params={locationParams} />
    </Layout>
  )
}

export default OrderConfirmation
