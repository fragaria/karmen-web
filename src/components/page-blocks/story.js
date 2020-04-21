import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"

const StoryBlock = props => {
  const data = useStaticQuery(graphql`
    query StoryQuery {
      site {
        siteMetadata {
          company {
            phone
            contactEmail
          }
        }
      }
    }
  `)

  const intl = useIntl()
  const storyLink = intl.locale === "cs" ? "/cs/pribeh/" : "/en/story/"
  const teamLink = intl.locale === "cs" ? "/cs/pribeh/#team" : "/en/story/#team"

  return (
    <section {...props}>
      <div className="story">
        <div className="story__story story-box">
          <h1 className="sitenav__anchorpush">
            <span className="sitenav__anchor" id="story"></span>
            <FormattedMessage
              id="story-block.karmen_story"
              defaultMessage="Karmen story"
            />
          </h1>
          <p>
            <FormattedMessage
              id="story-block.karmen_story_full"
              defaultMessage="Řešení Karmen se snaží cílit na jednotlivce s typicky jednou domácí 3D tiskárnou, stejně tak na firmy a organizace s více 3D tiskárnami."
            />
          </p>
          <Link className="button button--red" to={storyLink}>
            <FormattedMessage
              id="story-block.karmen_story_link"
              defaultMessage="See full story"
            />
          </Link>
        </div>
        <div className="story__team story-box">
          <h1>
            <FormattedMessage
              id="story-block.karmen_team"
              defaultMessage="Karmen team"
            />
          </h1>
          <p>
            <Link className="anchor anchor--default" to={teamLink}>
              See the team
            </Link>
          </p>
        </div>
        <div className="story__contact story-box">
          <h1>
            <FormattedMessage
              id="story-block.contact_us"
              defaultMessage="Contact us"
            />
          </h1>
          <ul className="list list--unstyled">
            <li>
              <a
                className="anchor anchor--default"
                href={`mailto:${data.site.siteMetadata.company.contactEmail}`}
              >
                {data.site.siteMetadata.company.contactEmail}
              </a>
            </li>
            <li>
              <a
                className="anchor anchor--default"
                href={`tel:${data.site.siteMetadata.company.phone}`}
              >
                {data.site.siteMetadata.company.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default StoryBlock
