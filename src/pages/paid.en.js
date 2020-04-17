import React from "react"
import Layout from "layouts/en"
import { Link } from "gatsby"

import SEOMetadata from "components/seo/metadata"

const Paid = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOMetadata title="Paid" />
      <div className="content-block v-payment-confirmation">
        <div className="typeset">
          <h3>Payment has been processed sucessfully</h3>
          <h1>Thank you for your purchase</h1>
          <div className="cta-row">
            <Link to="/en/" className="button">Continue back to homepage</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Paid
