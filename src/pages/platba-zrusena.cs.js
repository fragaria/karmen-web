import React from "react"
import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import PaymentCancelledBlock from "components/page-blocks/payment-cancelled"

const Zruseno = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata
        title="Platba zrušena"
        lang="cs"
        pathname="/cs/platba-zrusena/"
      />
      <PaymentCancelledBlock />
    </Layout>
  )
}

export default Zruseno
