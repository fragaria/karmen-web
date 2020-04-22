import React from "react"
import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import PaidBlock from "components/page-blocks/paid"

const Paid = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata title="Paid" />
      <PaidBlock />
    </Layout>
  )
}

export default Paid
