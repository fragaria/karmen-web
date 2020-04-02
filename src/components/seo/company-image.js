import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import socialMediaLogo from "assets/img/karmen-logo-social-media.png"

const SEOCompanyImage = () => {
    const data = useStaticQuery(graphql`
        query SiteCompanyQuery {
            site {
                siteMetadata {
                    company {
                        officialName
                    }
                }
            }
        }
    `)

    return (
        <span itemProp="image" itemType="http://schema.org/ImageObject" itemScope className="hidden">
            <meta itemProp="caption" content={data.site.siteMetadata.company.officialName} />
            <meta itemProp="url" content={socialMediaLogo} />
            <meta itemProp="width" content="272" />
            <meta itemProp="height" content="507" />
        </span>
    )
}

export default SEOCompanyImage
