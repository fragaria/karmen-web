import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import karmenLogoImg from "assets/img/karmen-logo-rect.svg"

const IEWarning = () => {
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

  return (
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
        <a href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a>
        .
      </p>
      <p>
        <strong>Thanks for your understanding</strong>.
      </p>
      <span className="button js-ie-warn__dismiss" role="button">
        Dismiss
      </span>
    </div>
  )
}

export default IEWarning
