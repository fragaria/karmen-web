import React, { useEffect, useState } from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentLangKey } from "ptz-i18n"

import karmenLogoImg from "assets/img/karmen-logo.svg"

/**
 * Shrink site navigation when user scrolls 100px down
 * and takes it backs when user returns to top
 * @param {HTMLElement} element
 */
function shirkSitenavOnScroll(element) {
  function getBodyScrollTop() {
    const el = document.scrollingElement || document.documentElement
    return el.scrollTop
  }

  const onScroll = () => {
    const scrolled = Math.max(window.pageYOffset, getBodyScrollTop())

    scrolled > 100
      ? element.classList.add("sitenav--shrinked")
      : element.classList.remove("sitenav--shrinked")
  }

  const enableAnimations = () => {
    element.classList.add("sitenav--animated")
  }

  const raf =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame
  let lastScrollTop = getBodyScrollTop()

  if (raf) {
    // make sure to run it first time too
    onScroll()
    loop()
    setTimeout(enableAnimations)
  }

  function loop() {
    const scrollTop = getBodyScrollTop()

    if (lastScrollTop === scrollTop) {
      raf(loop)
      return
    } else {
      lastScrollTop = scrollTop

      // fire scroll function if scrolls vertically
      onScroll()
      raf(loop)
    }
  }
}

const Sitenav = ({ location }) => {
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
          ...Languages
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false)
  const [isAnimated, setIsAnimated] = useState(true)
  const sitenavRef = React.createRef()

  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, location.pathname)
  const homeLink = `/${langKey}/`

  useEffect(() => {
    shirkSitenavOnScroll(sitenavRef.current)
  })

  const menuToggleClasses = classNames(
    "sitenav__menutoggle hamburger hamburger--collapse",
    {
      "is-active": isOpen,
    }
  )
  const rootClasses = classNames("sitenav js-sitenav", {
    "sitenav-wrapper--noanim": !isAnimated,
    "sitenav-wrapper--show": isOpen,
  })

  const toggle = () => {
    setIsAnimated(true)
    isOpen
      ? document.body.classList.remove("noscroll")
      : document.body.classList.add("noscroll")
    setIsOpen(!isOpen)
  }

  const navigate = (evt, url) => {
    const targetSuffix = url.replace(window.location.pathname, "")

    if (targetSuffix.startsWith("#")) {
      evt.preventDefault()
      const targetId = targetSuffix.substring(1)
      const target = document.getElementById(targetId)

      window.scroll({ top: target.offsetTop - 80, behavior: "smooth" })
      window.history.pushState({}, evt.target.text, targetSuffix)

      setIsAnimated(false)
      setIsOpen(false)

      document.body.classList.remove("noscroll")
    }
  }

  return (
    <nav
      id="js-sitenav"
      ref={sitenavRef}
      className={rootClasses}
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="sitenav__container">
        <div className="content-block content-block__cover--mobile">
          <div className="sitenav__menu js-sitenav-menu">
            <Link
              to={homeLink}
              className="sitenav__company typeset__anchor--nounderline"
              itemProp="url"
            >
              <span itemProp="name">Karmen</span>
            </Link>

            <Link className="sitenav__brand" to={homeLink}>
              <img
                alt={data.site.siteMetadata.company.officialName}
                src={karmenLogoImg}
              />
            </Link>

            {langKey === "en" && (
              <Link
                to="/cs/"
                className="sitenav__switch flag czech-republic"
                title="Přepnout do češtiny"
              ></Link>
            )}
            {langKey !== "en" && (
              <Link
                to="/en/"
                className="sitenav__switch flag united-kingdom"
                title="Switch to english"
              ></Link>
            )}

            <button
              className={menuToggleClasses}
              type="button"
              aria-label="Menu"
              aria-controls="js-sitenav"
              aria-expanded={isOpen}
              onClick={toggle}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <ul className="sitenav__linkset">
            {data.site.siteMetadata.nav[langKey].map(item => (
              <li
                key={item.url}
                className="sitenav__linkset-item js-sitenav__link"
              >
                <a
                  onClick={evt => navigate(evt, item.url)}
                  className="sitenav__link typeset__anchor--nounderline js-sitenav-menu__anchor"
                  itemProp="url"
                >
                  <span itemProp="name">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

Sitenav.props = {
  location: PropTypes.object.isRequired,
}

export default Sitenav
