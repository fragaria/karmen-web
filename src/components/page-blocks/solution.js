import React from "react"
import { FormattedMessage } from "react-intl"

const SolutionBlock = props => {
  return (
    <section {...props}>
      <div className="solution" itemType="http://schema.org/Product" itemScope>
        <div className="solution__circle"></div>
        <div className="content-block sitenav__anchorpush">
          <span className="sitenav__anchor" id="solution"></span>
          <h1 className="solution__headline">
            <FormattedMessage
              id="solution-block.meet_karmen"
              defaultMessage="What is Karmen solving?"
            />
          </h1>
          <div className="solution-listing">
            <div className="solution-listing__item">
              <div className="solution-listing__icon solution-listing__icon--sliders"></div>
              <h2>
                <FormattedMessage
                  id="solution-block.solution_headline_print"
                  defaultMessage="Tisk pod kontrolou, ať jste kdekoliv"
                />
              </h2>
              <p>
                <FormattedMessage
                  id="solution-block.solution_desc_print"
                  defaultMessage="Kamera se světlem vám umožní sledovat, jak tisk pokračuje. Můžete ho také zastavit nebo znovu spustit"
                />
              </p>
            </div>
            <div className="solution-listing__item">
              <div className="solution-listing__icon solution-listing__icon--cloud"></div>
              <h2>
                <FormattedMessage
                  id="solution-block.solution_headline_remote"
                  defaultMessage="Ovládání tiskárny na dálku"
                />
              </h2>
              <p>
                <FormattedMessage
                  id="solution-block.solution_desc_remote"
                  defaultMessage="Karmen vám umožní nahrát tisková data a ovládat tiskové úlohy na dálku, ať už jste u vedlejšího stolu nebo na jiném kontinentu."
                />
              </p>
            </div>
            <div className="solution-listing__item">
              <div className="solution-listing__icon solution-listing__icon--people"></div>
              <h2>
                <FormattedMessage
                  id="solution-block.solution_headline_team"
                  defaultMessage="V týmu se to lépe tiskne"
                />
              </h2>
              <p>
                <FormattedMessage
                  id="solution-block.solution_desc_team"
                  defaultMessage="Řízení tiskáren můžete sdílet s přáteli nebo kolegy, přidělovat jim role nebo třeba ukázat klientům, jak práce postupuje"
                />
              </p>
            </div>
            <div className="solution-listing__item">
              <div className="solution-listing__icon solution-listing__icon--mobile"></div>
              <h2>
                <FormattedMessage
                  id="solution-block.solution_headline_mobile"
                  defaultMessage="Tiskové úlohy ve vaší kapse"
                />
              </h2>
              <p>
                <FormattedMessage
                  id="solution-block.solution_desc_mobile"
                  defaultMessage="Všechny funkce, které Karmen Pill a Kamern Cloud nabízejí, můžete ovládat také ze svého mobilního zařízení"
                />
              </p>
            </div>
            <div className="solution-listing__item">
              <div className="solution-listing__icon solution-listing__icon--boxes"></div>
              <h2>
                <FormattedMessage
                  id="solution-block.solution_headline_printers"
                  defaultMessage="Víc tiskáren víc vytiskne"
                />
              </h2>
              <p>
                <FormattedMessage
                  id="solution-block.solution_desc_printers"
                  defaultMessage="Karmen Cloud můžete přes jedno rozhraní ovládat libovolný počet tiskáren na libovolném počtu různých míst"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionBlock
