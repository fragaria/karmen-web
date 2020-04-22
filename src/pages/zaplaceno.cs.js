import React from "react"
import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import PaidBlock from "components/page-blocks/paid"

const Zaplaceno = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata title="Zaplaceno" />
      <PaidBlock />
    </Layout>
  )
}

export default Zaplaceno
