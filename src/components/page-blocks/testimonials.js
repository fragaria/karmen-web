import React from "react"
import { FormattedMessage } from "react-intl"

import Testimonials from "components/testimonials"


const TestimonialsBlock = props => {
  return (
    <section {...props}>
      <h1 className="page-block-headline sitenav__anchorpush">
        <span className="sitenav__anchor" id="partners"></span>
        <FormattedMessage id="testimonials-block.headline" defaultMessage="Clients &amp; partners" />
      </h1>
      <p className="page-block-sub">
        <FormattedMessage id="testimonials-block.paragraph" defaultMessage="Karmen aims at both individuals with a single 3d printer as well as companies and organizations with multiple ones. Contrary to the other solutions on the market, Karmen allows you to connect multiple printers and to combine various printer brands without any limitations." />
      </p>
      <Testimonials />
    </section>
  )
}

export default TestimonialsBlock

