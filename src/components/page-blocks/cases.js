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
            <p>
              <FormattedMessage
                id="cases-block.individuals_desc"
                defaultMessage="Získejte dokonalý přehled a komfort obsluhy Vaší 3D tiskárny. Karmen vám umožní ovládat tiskovou frontu kdekoli na světě prostřednictvím počítače či mobilního telefonu. Díky zabudované kameře snadno zjistíte,  v jakém stádiu tisku se váš projekt nachází."
              />
            </p>
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
            <p>
              <FormattedMessage
                id="cases-block.teams_desc"
                defaultMessage="Tiskněte prototypy, náhradní díly či nedostatkové zboží.  S pomocí řešení Karmen snadno vytvoříte efektivní strukturu pro vaše tisková zařízení a týmy po celém světě. Karmen  si pro své vlastnosti oblíbily firmy, školy, coworkingová centra i další organizace. "
              />
            </p>
          </div>
        </BackgroundImage>
      </div>
    </section>
  )
}

export default CasesBlock
