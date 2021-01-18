import React from "react"
import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import OrderConfirmationBlock from "components/page-blocks/order-confirmation"

const PotvrzeniObjednavky = ({ location }) => {
  const locationParams = new URLSearchParams(location.search)

  return (
    <Layout location={location}>
      <SEOMetadata
        title="Potvrzení objednávky"
        pathname="/cs/potvrzeni-objednavky/"
      />
      <OrderConfirmationBlock params={locationParams} />
    </Layout>
  )
}

export default PotvrzeniObjednavky
