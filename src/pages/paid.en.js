import React from "react"
import Layout from "layouts/en"
import SEOMetadata from "components/seo/metadata"

const Paid = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata title="Paid" />
      <h1>Paid!</h1>
    </Layout>
  )
}

export default Paid
