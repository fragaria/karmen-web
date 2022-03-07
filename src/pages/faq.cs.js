import React from "react"
import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import LookHere from "../components/page-blocks/look-here"

const Faq = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-faq-resources">
      <SEOMetadata title="FAQ" lang="cs" pathname={location.pathname} />
      <h1 className="page-block-headline">Často kladené otázky</h1>
      <LookHere></LookHere>
    </Layout>
  )
}

export default Faq
