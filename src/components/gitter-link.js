import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

const GitterLink = () => {
  const data = useStaticQuery(graphql`
    query GitterLinkQuery {
      site {
        siteMetadata {
          company {
            social {
              gitter
            }
          }
        }
      }
    }
  `)

  return (
    <div className="gitter-link">
      <a
        href={`https://gitter.im/${data.site.siteMetadata.company.social.gitter}`}
        className="gitter-link__button"
      >
        <div className="gitter-brand">
          <svg
            className="gitter-logo-img"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 25"
          >
            <rect x="15" y="5" width="2" height="10"></rect>
            <rect x="10" y="5" width="2" height="20"></rect>
            <rect x="5" y="5" width="2" height="20"></rect>
            <rect width="2" height="15"></rect>
          </svg>
          <svg
            className="gitter-logo-text"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 98.7 16.3"
          >
            <g id="XMLID_43_">
              <path
                id="XMLID_62_"
                className="logo-white-lettering"
                d="M20.9,0.3h2.6v15.8h-2.6V0.3z"
              ></path>
              <path
                id="XMLID_60_"
                className="logo-white-lettering"
                d="M34.8,2.9h-4V0.3h11.8v2.6h-5.2v13.2h-2.6V2.9z"
              ></path>
              <path
                id="XMLID_58_"
                className="logo-white-lettering"
                d="M51.9,2.9h-4V0.3h11.8v2.6h-5.2v13.2h-2.6V2.9z"
              ></path>
              <path
                id="XMLID_56_"
                className="logo-white-lettering"
                d="M66.4,0.3h11.8v2.6H69v3.9h7.9v2.6H69v4h9.2v2.6H66.4V0.3z"
              ></path>
              <path
                id="XMLID_53_"
                className="logo-white-lettering"
                d="M98.7,16.1l-4.2-5.9c1.7-0.9,2.8-2.5,2.8-4.6c0-3.1-2.5-5.3-5.7-5.3l-6.2,0v15.8h2.6l0-5.3
              c0,0,3.6,0,3.6,0l3.8,5.3H98.7z M88.1,8.2l0-5.3l3.5,0c1.7,0,3,1,3,2.6c0,1.7-1.4,2.6-3,2.6L88.1,8.2z"
              ></path>
              <path
                id="XMLID_52_"
                className="logo-white-lettering"
                d="M7.9,7.1v2.6l3.9,0c0,0,0,1.4,0,2.3c-0.1,0.2-0.4,1.8-3.8,1.8c-0.2,0-0.3,0-0.5,0
              c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-2.1-0.7-3.5-2.8-3.5-5.3
              l0,0v0v0c0-0.3,0-0.5,0.1-0.8C3.3,4.7,5.4,2.5,8,2.5c0.9,0,2.5,0.3,3.6,1.5l1.5-2.2c0,0-1.3-1.9-5-1.9C3.7,0,0.4,3.3,0,7.3
              c0,0.3,0,0.6,0,0.8l0,0l0,0c0,4.3,3.2,7.9,7.7,8.1c0.2,0,0.3,0,0.5,0c0,0,0.1,0,0.1,0c0.3,0,0.5,0,0.7,0c0.1,0,0.2,0,0.3,0
              c0.2,0,0.3,0,0.5-0.1c2.7-0.1,4.7-2.3,4.7-3.4c0-5,0-5.7,0-5.7H7.9z"
              ></path>
            </g>
          </svg>
        </div>
        <span className="gitter-link__caption">
          <FormattedMessage id="gitter.label" defaultMessage="I need help" />
        </span>
      </a>
    </div>
  )
}

export default GitterLink
