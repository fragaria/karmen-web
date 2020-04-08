import React from "react"
import Layout from "layouts/en"
import SEOMetadata from "components/seo/metadata"

const PaymentCancelled = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata title="Payment cancelled" />
      <h1>Payment cancelled</h1>
    </Layout>
  )
}

export default PaymentCancelled
