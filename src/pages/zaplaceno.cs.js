import React from "react"
import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOJsonLd from "components/seo/seo-json-ld"

import PaidBlock from "components/page-blocks/paid"

const Zaplaceno = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata
        title="Zaplaceno"
        lang="cs"
        pathname="/cs/zaplaceno/"
      />
      <SEOJsonLd
        title="Zaplaceno"
        lang="cs"
        pathname="/cs/zaplaceno/"
      />
      <PaidBlock />
    </Layout>
  )
}

export default Zaplaceno
