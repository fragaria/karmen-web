import React from "react"
import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOJsonLd from "components/seo/seo-json-ld"

import PaidBlock from "components/page-blocks/paid"

const Paid = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata title="Paid" pathname="/en/paid/" />
      <SEOJsonLd title="Paid" pathname="/en/paid" />
      <PaidBlock />
    </Layout>
  )
}

export default Paid
