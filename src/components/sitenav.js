import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "react-intl"

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

  // const [isOpen, setIsOpen] = useState(false)

  const intl = useIntl()
  const homeLink = `/${intl.locale}/`

  const rootClasses = classNames("sitenav", {
    // "sitenav-wrapper--show": isOpen,
  })

  // const navigate = (evt, url) => {
  //   const targetSuffix = url.replace(window.location.pathname, "")

  //   if (targetSuffix.startsWith("#")) {
  //     evt.preventDefault()
  //     const targetId = targetSuffix.substring(1)
  //     const target = document.getElementById(targetId)

  //     window.scroll({ top: target.offsetTop - 80, behavior: "smooth" })
  //     window.history.pushState({}, evt.target.text, targetSuffix)

  //     setIsOpen(false)

  //     document.body.classList.remove("noscroll")
  //   }
  // }

  return (
    <nav
      className={rootClasses}
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
              className="sitenav__link typeset__anchor--nounderline"
              itemProp="url"
              key={item.url}
            >
              <span itemProp="name">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

Sitenav.props = {}

export default Sitenav
