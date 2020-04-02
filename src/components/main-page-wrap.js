import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layouts/default"
import SEOMetadata from "../components/seo/metadata"
import SEOCompanyImage from "../components/seo/company-image"

import karmenSocialLogo from "assets/img/karmen-logo-social-media.png"

const MainPageWrap = ({ children, lang, pageTitle }) => {
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
                            twitter, github
                        }
                    }
                }
            }
        }
    `
    )

    return (
        <Layout lang={lang}>
            <SEOMetadata title={pageTitle} />
            <div className="content-block typeset v-home" itemScope itemType="http://schema.org/LocalBusiness">
                <meta itemProp="name" content={data.site.siteMetadata.company.officialName} />
                <meta itemProp="openingHours" content="Mo-Fr 10:00-17:00" />
                <meta itemProp="hasMap" content={data.site.siteMetadata.company.address.residence.mapLink} />
                <meta itemProp="logo" content={karmenSocialLogo} />
                <meta itemProp="url" content={data.site.siteMetadata.siteUrl} />
                <SEOCompanyImage />

                {data.site.siteMetadata.company.social.twitter &&
                    <meta itemProp="sameAs" content={`https://twitter.com/${data.site.siteMetadata.company.social.twitter}`} />
                }
                {data.site.siteMetadata.company.social.github &&
                    <meta itemProp="sameAs" content={`https://github.com/${data.site.siteMetadata.company.social.github}`} />
                }

                {children}
            </div>
        </Layout>
    )
}

export default MainPageWrap

