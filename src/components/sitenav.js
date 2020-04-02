

import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import karmenLogoImg from "assets/img/karmen-logo.svg"

const Sitenav = ({ lang }) => {
    const data = useStaticQuery(graphql`
        query SitenavQuery {
            site {
                siteMetadata {
                    company {
                        officialName,
                        social {
                            github, readthedocs, twitter, facebook, youtube
                        }
                    }
                    nav {
                        cs { url, name }
                        en { url, name }
                    }
                }
            }
        }
    `)

    return (
        <nav id="js-sitenav" className="sitenav js-sitenav" role="navigation" itemScope itemType="http://schema.org/SiteNavigationElement">
            <div className="sitenav__container">
                <div className="content-block content-block__cover--mobile">
                    <div className="sitenav__menu js-sitenav-menu">
                        <a href="/" className="sitenav__company typeset__anchor--nounderline" itemProp="url"><span itemProp="name">Karmen</span></a>

                        <a className="sitenav__brand" href="/">
                            <img alt={data.site.siteMetadata.company.officialName} src={karmenLogoImg} />
                        </a>

                        {lang === "en" && <Link to="/" className="sitenav__switch flag czech-republic" title="Přepnout do češtiny"></Link>}
                        {lang !== "en" && <Link to="/en" className="sitenav__switch flag united-kingdom" title="Switch to english"></Link>}

                        <button className="sitenav__menutoggle hamburger hamburger--collapse js-sitenav-menu__toggle" type="button" aria-label="Menu" aria-controls="js-sitenav" aria-expanded="false">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>

                    <ul className="sitenav__linkset">
                        {data.site.siteMetadata.nav[lang].map(item => (
                            <li key={item.url} className="sitenav__linkset-item js-sitenav__link"><a href={item.url} className="sitenav__link typeset__anchor--nounderline js-sitenav-menu__anchor" itemProp="url"><span itemProp="name">{item.name}</span></a></li>

                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Sitenav.props = {
    lang: PropTypes.string.isRequired
}

export default Sitenav
