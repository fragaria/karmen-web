import React from "react"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import ContactBlock from "components/page-blocks/contact"

const ContactPage = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-contact">
      <SEOMetadata
        lang="cs"
        title="Contact Karmen"
        description="Contact information Karmen"
        pathname="/en/contact/"
      />
      <SEOBusinessInfo />
      <ContactBlock/>
    </Layout>
  )
}

export default ContactPage
