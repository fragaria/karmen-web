import React from "react"
import Layout from "layouts/cs"
import SEOMetadata from "components/seo/metadata"

const Zaplaceno = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata title="Zaplaceno" />
      <h1>Zaplaceno</h1>
    </Layout>
  )
}

export default Zaplaceno
