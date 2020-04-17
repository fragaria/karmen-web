import React from "react"
import Layout from "layouts/cs"
import { Link } from "gatsby"

import SEOMetadata from "components/seo/metadata"

const Zaplaceno = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata title="Zaplaceno" />
      <div className="content-block v-payment-confirmation">
        <div className="typeset">
          <h3>Platba proběhla úspěšně</h3>
          <h1>Děkujeme za váš nákup</h1>
          <div className="cta-row">
            <Link to="/cs/" className="button">Zpátky na homepage</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Zaplaceno
