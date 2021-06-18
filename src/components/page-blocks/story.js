import React from "react"
import { FormattedMessage, useIntl } from "react-intl"
import { graphql, Link, useStaticQuery } from "gatsby"

import { Image } from "components/image"

const StoryBlock = props => {
  const intl = useIntl()
  const storyLink = intl.locale === "cs" ? "/cs/pribeh" : "/en/story"
  const teamLink = storyLink + "#team"
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "story-illustration.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
      <section {...props}>
        <div className="content-block">
          <div className="story">
            <div className="story__content">
              <h1 className="story__headline">
                <FormattedMessage
                  id="story.headline"
                  defaultMessage="Příběh Karmen"
                />
              </h1>
              <h2 className="story__sub">
                <FormattedMessage
                  id="story.sub"
                  defaultMessage="Všechny funkce, které Karmen Pill a Kamern Cloud nabízejí, můžete ovládat také ze svého mobilního zařízení"
                />
              </h2>
              <Link className="button button--red button--mr button-mb" to={storyLink}>
                <FormattedMessage
                  id="story.cta"
                  defaultMessage="Zobrazit celý příběh"
                />
              </Link>
              <Link className="button button--outlineBlack" to={teamLink}>
                <FormattedMessage
                  id="story.team"
                  defaultMessage="Tým Karmen"
                />
              </Link>
            </div>
            <div className="story__illustration">
              <Image file={data.file}/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default StoryBlock
