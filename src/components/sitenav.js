import React, { useState } from "react"
import classNames from "classnames"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useIntl, FormattedMessage } from "react-intl"
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

            <div className="sitenav__right">
              {intl.locale === "en" && (
                <>
                  <a
                    href="https://next.karmen.tech/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sitenav__link sitenav__link--lowprio typeset__anchor--nounderline"
                  >
                    Sign up
                  </a>

                  <Link
                    to="/cs/"
                    className="sitenav__langswitch"
                    title="Přepnout do češtiny"
                  >
                    CS
                  </Link>
                </>
              )}
              {intl.locale !== "en" && (
                <>
                  <a
                    href="https://eshop.karmen.tech/cart"
                    rel="noopener noreferrer"
                    className="sitenav__link sitenav__link--lowprio typeset__anchor--nounderline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 768 768"
                      stroke="currentColor"
                      className="sitenav__icon"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M544.5 576q25.5 0 44.25 19.5t18.75 45-18.75 44.25-44.25 18.75-45-18.75-19.5-44.25 19.5-45 45-19.5zM31.5 64.5h105l30 63h474q13.5 0 22.5 9.75t9 23.25q0 1.5-4.5 15l-114 207q-18 33-55.5 33h-238.5l-28.5 52.5-1.5 4.5q0 7.5 7.5 7.5h370.5v64.5h-384q-25.5 0-44.25-19.5t-18.75-45q0-15 7.5-30l43.5-79.5-115.5-243h-64.5v-63zM223.5 576q25.5 0 45 19.5t19.5 45-19.5 44.25-45 18.75-44.25-18.75-18.75-44.25 18.75-45 44.25-19.5z"></path>
                    </svg>
                  </a>

                  <Link
                    to="/en/"
                    className="sitenav__langswitch hidden"
                    title="Switch to english"
                  >
                    EN
                  </Link>
                </>
              )}
            </div>
          </div>
          <a
            href="https://eshop.karmen.tech/cart"
            rel="noopener noreferrer"
            className="sitenav__mobile-menu-cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 768 768"
              stroke="currentColor"
              className="sitenav__icon"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M544.5 576q25.5 0 44.25 19.5t18.75 45-18.75 44.25-44.25 18.75-45-18.75-19.5-44.25 19.5-45 45-19.5zM31.5 64.5h105l30 63h474q13.5 0 22.5 9.75t9 23.25q0 1.5-4.5 15l-114 207q-18 33-55.5 33h-238.5l-28.5 52.5-1.5 4.5q0 7.5 7.5 7.5h370.5v64.5h-384q-25.5 0-44.25-19.5t-18.75-45q0-15 7.5-30l43.5-79.5-115.5-243h-64.5v-63zM223.5 576q25.5 0 45 19.5t19.5 45-19.5 44.25-45 18.75-44.25-18.75-18.75-44.25 18.75-45 44.25-19.5z"></path>
            </svg>
          </a>

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
        // gu size for menu button
        width={"13.5rem"}
        className="sitenav__mobile-menu"
        overlayClassName="sitenav__mobile-overlay"
      >
        {data.site.siteMetadata.nav[intl.locale].map(item => (
          <Link
            to={item.url}
            itemProp="url"
            key={item.url}
            onClick={() => setIsOpen(false)}
          >
            <span itemProp="name">{item.name}</span>
          </Link>
        ))}
      </MobileMenu>
    </>
  )
}

Sitenav.props = {}

export default Sitenav
