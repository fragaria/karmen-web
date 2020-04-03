import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import strawberryImg from "assets/img/strawberry.svg"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
        }
      }
    }
  `)

  const currentYear = new Date().getFullYear()

  return (
    <footer className="content-block">
      <div className="footer">
        <a
          className="footer__meta"
          href="https://fragaria.cz"
          target="_blank"
          rel="noopener"
        >
          <img
            alt={data.site.siteMetadata.company.officialName}
            className="footer__brand"
            src={strawberryImg}
          />
          <div className="footer__copy">
            <div className="footer__copy-line footer__copy-line--emphasized">
              FRAGARIA &copy; {currentYear}
            </div>
            <div className="footer__copy-line">
              Talk is cheap, show me the code.
            </div>
          </div>
        </a>
        <div className="footer__social">
          {data.site.siteMetadata.company.social.github && (
            <a
              href={
                "https://github.com/" +
                data.site.siteMetadata.company.social.github
              }
              className="icon--github footer__social-icon"
              title="GitHub profile page"
            ></a>
          )}
          {data.site.siteMetadata.company.social.readthedocs && (
            <a
              href={`https://${data.site.siteMetadata.company.social.readthedocs}.readthedocs.io/`}
              className="icon--readthedocs footer__social-icon"
              title="Karmen Documentation Page"
            ></a>
          )}
          {data.site.siteMetadata.company.social.twitter && (
            <a
              href={`https://twitter.com/${data.site.siteMetadata.company.social.twitter}`}
              className="icon--twitter footer__social-icon"
              title="Twitter profile page"
            ></a>
          )}
          {data.site.siteMetadata.company.social.facebook && (
            <a
              href={`https://facebook.com/${data.site.siteMetadata.company.social.facebook}`}
              className="icon--facebook footer__social-icon"
              title="Facebook profile page"
            ></a>
          )}
          {data.site.siteMetadata.company.social.youtube && (
            <a
              href={`https://www.youtube.com/channel/${data.site.siteMetadata.company.social.youtube}`}
              className="icon--youtube footer__social-icon"
              title="Karmen Youtube Channel"
            ></a>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
