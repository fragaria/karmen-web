import React from "react"
import { FormattedMessage } from "react-intl"

import martinBurianImg from "assets/img/martin-burian.jpg"
import martinBilekImg from "assets/img/martin-bilek.jpg"
import strawberryImg from "assets/img/strawberry.svg"

const AboutBlock = props => {
  return (
    <article>
      <section {...props}>
        <div className="about-hero">
          <div className="content-block about-hero__headline">
            <h1 className="about-hero__main sitenav__anchorpush">
              <span className="sitenav__anchor" id="about"></span>
              <FormattedMessage
                id="about-block.story_headline"
                defaultMessage="Story of Karmen"
              />
            </h1>
            <h2 className="about-hero__sub">
              <FormattedMessage
                id="about-block.motto"
                defaultMessage="Everything starts with laziness."
              />
            </h2>
          </div>
        </div>

        <div className="content-block content-block--narrower about-body">
          <h3>
            <FormattedMessage
              id="about-block.beginning"
              defaultMessage="The beginning"
            />
          </h3>
          <p>
            Řešení Karmen se snaží cílit na jednotlivce s typicky jednou domácí
            3D tiskárnou, stejně tak na firmy a organizace s více 3D tiskárnami.{" "}
          </p>
          <h3>
            <FormattedMessage
              id="about-block.progress"
              defaultMessage="The progress"
            />
          </h3>
          <p>
            Řešení Karmen se snaží cílit na jednotlivce s typicky jednou domácí
            3D tiskárnou, stejně tak na firmy a organizace s více 3D tiskárnami.{" "}
          </p>
          <h3>
            <FormattedMessage
              id="about-block.finale"
              defaultMessage="The finale"
            />
          </h3>
          <p>
            Řešení Karmen se snaží cílit na jednotlivce s typicky jednou domácí
            3D tiskárnou, stejně tak na firmy a organizace s více 3D tiskárnami.{" "}
          </p>
        </div>
      </section>

      <section>
        <div className="content-block content-block--narrow">
          <h1 className="about-founders-headline sitenav__anchorpush">
            <span className="sitenav__anchor" id="team"></span>
            <FormattedMessage
              id="about-block.team_headline"
              defaultMessage="Founders"
            />
          </h1>
          <div className="about-founders">
            <div className="about-founders__founder">
              <div className="about-founders__founder-image">
                <img src={martinBurianImg} alt="Martin Bílek" />
              </div>
              <div className="about-founders__founder-body">
                <h2>Martin Burián</h2>
                <h3>
                  <FormattedMessage
                    id="about-block.burian_sub"
                    defaultMessage="Fragaria CEO"
                  />
                </h3>
                <p>
                  Řešení Karmen se snaží cílit na jednotlivce s typicky jednou
                  domácí 3D tiskárnou, stejně tak na firmy a organizace s více
                  3D tiskárnami.
                </p>
              </div>
            </div>
            <div className="about-founders__founder">
              <div className="about-founders__founder-image">
                <img src={martinBilekImg} alt="Martin Bílek" />
              </div>
              <div className="about-founders__founder-body">
                <h2>Martin Bílek</h2>
                <h3>
                  <FormattedMessage
                    id="about-block.bilek_sub"
                    defaultMessage="Fragaria CTO, chairmen of Pyvec.org"
                  />
                </h3>
                <p>
                  Řešení Karmen se snaží cílit na jednotlivce s typicky jednou
                  domácí 3D tiskárnou, stejně tak na firmy a organizace s více
                  3D tiskárnami.
                </p>
              </div>
            </div>
            <div className="about-founders__founder about-founders__founder--company">
              <div className="about-founders__founder-image">
                <img src={strawberryImg} alt="Fragaria" />
              </div>
              <div className="about-founders__founder-body">
                <h2>Fragaria</h2>
                <h3>
                  <FormattedMessage
                    id="about-block.devteam"
                    defaultMessage="Developer team"
                  />
                </h3>
                <p>
                  Řešení Karmen se snaží cílit na jednotlivce s typicky jednou
                  domácí 3D tiskárnou, stejně tak na firmy a organizace s více
                  3D tiskárnami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default AboutBlock
