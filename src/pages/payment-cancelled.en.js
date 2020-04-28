import React from "react"
import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import PaymentCancelledBlock from "components/page-blocks/payment-cancelled"

const PaymentCancelled = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata
        title="Payment cancelled"
        pathname="/en/payment-cancelled/"
      />
      <PaymentCancelledBlock />
    </Layout>
  )
}

export default PaymentCancelled
