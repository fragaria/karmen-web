import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import karmenLogoImg from "assets/img/karmen-logo-stroked.svg"

function isIE() {
  const ua = window.navigator.userAgent //Check the userAgent property of the window.navigator object
  const msie = ua.indexOf("MSIE ") // IE 10 or older
  const trident = ua.indexOf("Trident/") //IE 11
  return msie > 0 || trident > 0
}

const IEWarning = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query IEWarningQuery {
      site {
        siteMetadata {
          title
          company {
            officialName
          }
        }
      }
    }
  `)

  const [showWarning, setShowWarning] = useState(
    isIE() && document.cookie.indexOf("iewarndismissed") === -1
  )
  const cls = classNames(className, { "old-ie": showWarning })

  const dismiss = () => {
    const date = new Date()
    date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000)
    // store cookie not to bother with this again
    document.cookie =
      "iewarndismissed=true; expires=" + date.toGMTString() + " path=/"
    setShowWarning(false)
  }

  return (
    <div className={cls}>
      {children}

      <div className="old-ie-overlay"></div>
      <div className="old-ie-warning">
        <img
          alt={data.site.siteMetadata.company.officialName}
          src={karmenLogoImg}
        />
        <h1>{data.site.siteMetadata.title}</h1>
        <p>
          To see our website in it's full glance, we suggest using{" "}
          <a href="https://www.microsoft.com/en-us/windows/microsoft-edge">
            Microsoft Edge
          </a>
          , <a href="https://www.google.com/chrome/">Google Chrome</a>,{" "}
          <a href="https://www.opera.com/download">Opera</a> or{" "}
          <a href="https://www.mozilla.org/en-US/firefox/new/">
            Mozilla Firefox
          </a>
          .
        </p>
        <p>
          <strong>Thanks for your understanding</strong>.
        </p>
        <button className="button" onClick={dismiss}>
          Dismiss
        </button>
      </div>
    </div>
  )
}

export default IEWarning
