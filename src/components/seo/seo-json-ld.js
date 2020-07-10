import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { JsonLd } from "./json-ld"

import strawberryImg from "assets/img/strawberry.svg"

function SEOJsonLd({ lang, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            company {
              officialName
              phone
              websiteTitle
              contactEmail
            }
            siteUrl
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title

  return (
    <JsonLd>
      {{
        "@context": "https://schema.org",
        "@graph": [
        {
          "@type": "Organization",
          "@id": `${site.siteMetadata.siteUrl}#organization`,
          "name": site.siteMetadata.company.officialName,
          "image":
          {
            "@type": "ImageObject",
            "url": strawberryImg,
          },
          "url": "https://fragaria.cz",
          "email": site.siteMetadata.company.contactEmail,
          "telephone": site.siteMetadata.company.phone,
        },
        {
          "@type": "WebSite",
          "@id": `${site.siteMetadata.siteUrl}#website`,
          "url":  site.siteMetadata.siteUrl,
          "name": site.siteMetadata.company.websiteTitle,
          "publisher":
          {
            "@id": `${site.siteMetadata.siteUrl}#organization`,
          }
        },
        {
          "@type": "WebPage",
          "@id": `${site.siteMetadata.siteUrl}${pathname || "/"}#webpage`,
          "url": `${site.siteMetadata.siteUrl}${pathname || "/"}`,
          "inLanguage": lang,
          "name": metaTitle,
          "isPartOf":
          {
            "@id": `${site.siteMetadata.siteUrl}#website`,
          },
        }]
      }}
    </JsonLd>
  )
}

SEOJsonLd.defaultProps = {
  lang: `en`,
}

export default SEOJsonLd
