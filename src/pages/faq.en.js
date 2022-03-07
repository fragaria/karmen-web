import React from "react"
import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import LookHere from "../components/page-blocks/look-here"

const Faq = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-faq-resources">
      <SEOMetadata title="FAQ" lang="en" pathname={location.pathname} />
      <h1 className="page-block-headline">FAQ</h1>
      <LookHere></LookHere>
    </Layout>
  )
}

export default Faq
