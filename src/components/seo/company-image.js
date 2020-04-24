import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import fragariaLogo from "assets/img/strawberry.svg"

const SEOCompanyImage = () => {
  const data = useStaticQuery(graphql`
    query SiteCompanyQuery {
      site {
        siteMetadata {
          siteUrl
          company {
            officialName
          }
        }
      }
    }
  `)

  return (
    <span
      itemProp="image"
      itemType="http://schema.org/ImageObject"
      itemScope
      className="hidden"
    >
      <meta
        itemProp="caption"
        content={`${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.company.officialName}`}
      />
      <meta itemProp="url" content={fragariaLogo} />
      <meta itemProp="width" content="172" />
      <meta itemProp="height" content="134" />
    </span>
  )
}

export default SEOCompanyImage
