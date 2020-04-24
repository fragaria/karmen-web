import React, { useState } from "react"
import classNames from "classnames"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "react-intl"
import { slide as MobileMenu } from "react-burger-menu"

import karmenLogoImg from "assets/img/karmen-logo-stroked.svg"

const Sitenav = () => {
  const data = useStaticQuery(graphql`
    query SitenavQuery {
      site {
        siteMetadata {
          company {
            officialName
            social {
              github
              readthedocs
              twitter
              facebook
              youtube
            }
          }
          nav {
            cs {
              url
              name
            }
            en {
              url
              name
            }
          }
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false)

  const intl = useIntl()
  const homeLink = `/${intl.locale}/`

  const toggleMobileMenu = evt => {
    evt.preventDefault()
    setIsOpen(!isOpen)
  }

  const mobileToggleClasses = classNames(
    "sitenav__mobile-menu-toggle hamburger",
    {
      "hamburger--collapse is-active": isOpen,
    }
  )

  return (
    <>
      <nav
        className="sitenav"
        role="navigation"
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
      >
        <div className="sitenav__menu">
          <Link className="sitenav__brand" to={homeLink}>
            <img
              alt={data.site.siteMetadata.company.officialName}
              src={karmenLogoImg}
            />
          </Link>

          <div className="sitenav__links">
            <Link
              to={homeLink}
              className="sitenav__company sitenav__link typeset__anchor--nounderline"
              itemProp="url"
            >
              <span itemProp="name">Karmen</span>
            </Link>

            {intl.locale === "en" && (
              <Link
                to="/cs/"
                className="sitenav__langswitch"
                title="Přepnout do češtiny"
              >
                CS
              </Link>
            )}
            {intl.locale !== "en" && (
              <Link
                to="/en/"
                className="sitenav__langswitch"
                title="Switch to english"
              >
                EN
              </Link>
            )}

            {data.site.siteMetadata.nav[intl.locale].map(item => (
              <Link
                to={item.url}
                className="sitenav__link sitenav__link--lowprio typeset__anchor--nounderline"
                itemProp="url"
                key={item.url}
              >
                <span itemProp="name">{item.name}</span>
              </Link>
            ))}
          </div>
          <button className={mobileToggleClasses} onClick={toggleMobileMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </nav>
      <MobileMenu
        isOpen={isOpen}
        onStateChange={({ isOpen }) => setIsOpen(isOpen)}
        right
        customCrossIcon={false}
        customBurgerIcon={false}
        disableAutoFocus
        // gu size for gitter link and menu button
        width={"14.562rem"}
        className="sitenav__mobile-menu"
        overlayClassName="sitenav__mobile-overlay"
      >
        {data.site.siteMetadata.nav[intl.locale].map(item => (
          <Link to={item.url} itemProp="url" key={item.url}>
            <span itemProp="name">{item.name}</span>
          </Link>
        ))}
      </MobileMenu>
    </>
  )
}

Sitenav.props = {}

export default Sitenav
