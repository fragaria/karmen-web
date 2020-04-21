import React from "react"
import { FormattedMessage } from "react-intl"

const CasesBlock = props => {
  return (
    <section {...props}>
      <div className="cases sitenav__anchorpush">
        <span className="sitenav__anchor" id="cases"></span>
        <div className="cases__box cases__box--individuals">
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
        <div className="cases__box cases__box--teams">
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
      </div>
    </section>
  )
}

export default CasesBlock
