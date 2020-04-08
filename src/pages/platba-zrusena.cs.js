import React from "react"
import Layout from "layouts/cs"
import SEOMetadata from "components/seo/metadata"

const Zruseno = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata title="Zaplaceno" />
      <h1>Platba byla zrušena</h1>
    </Layout>
  )
}

export default Zruseno
