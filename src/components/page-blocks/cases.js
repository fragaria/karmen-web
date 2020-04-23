import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import { BackgroundImage } from "components/image"

const CasesBlock = props => {
  const data = useStaticQuery(graphql`
    query {
      individuals: file(relativePath: { eq: "cases-individuals.jpg" }) {
        ...fluidImage1024_noblur
      }
      teams: file(relativePath: { eq: "cases-teams.jpg" }) {
        ...fluidImage1024_noblur
      }
    }
  `)

  return (
    <div className="content-block content-block--sitenavwide content-block--shift-mobile">
      <section {...props}>
        <div className="cases sitenav__anchorpush">
          <span className="sitenav__anchor" id="cases"></span>
          <BackgroundImage
            file={data.individuals}
            backgroundColor={`#eaeaea`}
            className="cases__box"
          >
            <div className="cases__inner-box">
              <h1>
                <FormattedMessage
                  id="cases-block.individuals_headline"
                  defaultMessage="For individuals"
                />
              </h1>
              <div className="cases__inner-desc">
                <p>
                  <FormattedMessage
                    id="cases-block.individuals_desc"
                    defaultMessage="Get a complete overview of your print progress. Karmen lets you monitor print jobs and manage the print queue from anywhere on computer or smartphone. The built-in camera lets you quickly see if everything’s turning out OK."
                  />
                </p>
              </div>
            </div>
          </BackgroundImage>
          <BackgroundImage
            file={data.teams}
            backgroundColor={`#eaeaea`}
            className="cases__box"
          >
            <div className="cases__inner-box">
              <h1>
                <FormattedMessage
                  id="cases-block.teams_headline"
                  defaultMessage="For teams"
                />
              </h1>
              <div className="cases__inner-desc">
                <p>
                  <FormattedMessage
                    id="cases-block.teams_desc"
                    defaultMessage="Print prototypes, spare parts or scarce items. Karmen makes your print queue more effective and makes it easy to coordinate the management of print jobs and teams worldwide. Karmen’s features make it popular among companies, schools, co-working spaces and other organisations."
                  />
                </p>
              </div>
            </div>
          </BackgroundImage>
        </div>
      </section>
    </div>
  )
}

export default CasesBlock
