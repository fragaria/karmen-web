import React, { useEffect, useState } from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentLangKey } from "ptz-i18n"

import karmenLogoImg from "assets/img/karmen-logo.svg"


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

  const menuToggleClasses = classNames(
    "sitenav__menutoggle hamburger hamburger--collapse",
    {
      "is-active": isOpen,
    }
  )
  const rootClasses = classNames("sitenav", {
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
      className={rootClasses}
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="content-block content-block__cover--mobile">
        <div className="sitenav__menu">
          <Link className="sitenav__brand" to={homeLink}>
            <img
              alt={data.site.siteMetadata.company.officialName}
              src={karmenLogoImg}
            />
          </Link>

          <Link
            to={homeLink}
            className="sitenav__company sitenav__link typeset__anchor--nounderline"
            itemProp="url"
          >
            <span itemProp="name">Karmen</span>
          </Link>


          {data.site.siteMetadata.nav[langKey].map(item => (
            <a
              onClick={evt => navigate(evt, item.url)}
              className="sitenav__link typeset__anchor--nounderline"
              itemProp="url"
              key={item.url}
            >
              <span itemProp="name">{item.name}</span>
            </a>
          ))}

          {langKey === "en" && (
            <Link
              to="/cs/"
              className="sitenav__langswitch flag czech-republic"
              title="Přepnout do češtiny"
            ></Link>
          )}
          {langKey !== "en" && (
            <Link
              to="/en/"
              className="sitenav__langswitch flag united-kingdom"
              title="Switch to english"
            ></Link>
          )}
        </div>
      </div>
    </nav>
  )
}

Sitenav.props = {
  location: PropTypes.object.isRequired,
}

export default Sitenav
