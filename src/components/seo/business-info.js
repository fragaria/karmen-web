import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEOCompanyImage from "./company-image"
import karmenSocialLogo from "assets/img/karmen-logo-social-media.png"

const SEOBusinessInfo = ({ children, location, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          company {
            officialName
            address {
              residence {
                mapLink
              }
            }
            social {
              twitter
              github
            }
          }
        }
      }
    }
  `)

  return (
    <div
      itemScope
      itemType="http://schema.org/LocalBusiness"
    >
      <meta
        itemProp="name"
        content={data.site.siteMetadata.company.officialName}
      />
      <meta itemProp="openingHours" content="Mo-Fr 10:00-17:00" />
      <meta
        itemProp="hasMap"
        content={data.site.siteMetadata.company.address.residence.mapLink}
      />
      <meta itemProp="logo" content={karmenSocialLogo} />
      <meta itemProp="url" content={data.site.siteMetadata.siteUrl} />
      <SEOCompanyImage />

      {data.site.siteMetadata.company.social.twitter && (
        <meta
          itemProp="sameAs"
          content={`https://twitter.com/${data.site.siteMetadata.company.social.twitter}`}
        />
      )}
      {data.site.siteMetadata.company.social.github && (
        <meta
          itemProp="sameAs"
          content={`https://github.com/${data.site.siteMetadata.company.social.github}`}
        />
      )}
    </div>
  )
}

export default SEOBusinessInfo
