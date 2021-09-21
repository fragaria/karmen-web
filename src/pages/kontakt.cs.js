import React from "react"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import ContactBlock from "components/page-blocks/contact"

const ContactPage = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-contact">
      <SEOMetadata
        lang="cs"
        title="Kontaktuj Karmen"
        description="Kontaktní informace Karmen"
        pathname="/cs/kontakt/"
      />
      <SEOBusinessInfo />
      <ContactBlock />
    </Layout>
  )
}

export default ContactPage
