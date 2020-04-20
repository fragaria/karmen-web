import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query ClientsQuery {
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
  )
}

export default Testimonials
