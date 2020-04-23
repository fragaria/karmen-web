import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

const TestimonialsBlock = props => {
  const data = useStaticQuery(graphql`
    query TestimonialsQuery {
      site {
        siteMetadata {
          clients {
            title
            img
          }
        }
      }
    }
  `)

  return (
    <div className="content-block">
      <section {...props}>
        <h1 className="page-block-headline sitenav__anchorpush">
          <span className="sitenav__anchor" id="partners"></span>
          <FormattedMessage
            id="testimonials-block.headline"
            defaultMessage="Clients and partners"
          />
        </h1>
        <p className="page-block-sub">
          <FormattedMessage
            id="testimonials-block.paragraph"
            defaultMessage="Karmen is popular among companies that own 3D printers of various manufacturers and types, as well as among individuals who want an overview of their print jobs."
          />
        </p>
        <div className="testimonials">
          {data.site.siteMetadata.clients.map(client => (
            <span key={client.title} className="testimonials__item">
              <img
                className="testimonials__image"
                src={client.img}
                alt={client.title}
                title={client.title}
              />
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TestimonialsBlock
