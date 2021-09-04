import  React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

import { FormattedMessage } from "react-intl"

import { BackgroundImage } from "components/image"

import logoCura from "assets/img/logo-cura.png"
import logoPrusaSlicer from "assets/img/logo-prusa-slicer.png"
import logoUltimakerCura from "assets/img/logo-ultimaker-cura.png"

const ProductBlockKarmenCloud = ({ props }) => {
  const cloudRegister = 'test';
  const data = useStaticQuery(graphql`
    query {
      cloudFull: file(relativePath: { eq: "product-full-cloud.png" }) {
        ...fluidImage1024_traced
      }
    }
  `)
  return (
    <div>
      <div className="product-detail__hero">
        <BackgroundImage
          file={data.cloudFull}
          style={{
            backgroundSize: '',
            backgroundPosition: ''
          }}
          className="product-detail__left product-detail__img product-detail__img--cloud">
        </BackgroundImage>
        <div className="product-detail__right">
          <h1 className="product-detail__headline">
            <FormattedMessage
              id="product-detail-cloud.title"
              defaultMessage="Karmen Cloud"
            />
          </h1>
          <div className="product-detail__desc">
            <FormattedMessage
              id="product-detail-cloud.desc"
              defaultMessage="Ovládá jednu či více 3D tiskáren z webového prohlížeče počítače, tabletu či telefonu. Umožňuje např. zadávat tiskové úlohy, sledovat průběh tisku či distribuovat tisk mezi více tiskárnami, a díky použitému softwarovému řešení je kompatibilní se širokou škálou tiskáren i slicerů."
            />
          </div>
          <div className="product-detail__price">
            <FormattedMessage
              id="product-detail-cloud.price"
              defaultMessage="Zdarma"
            />
          </div>
          <div className="product-detail__price-vat">
            <FormattedMessage
              id="product-detail-cloud.price-vat"
              defaultMessage="Zdarma pro všechny"
            />
          </div>
          <Link to={cloudRegister} className="product-detail__buy-button button button--full button--red">
            <FormattedMessage
              id="product-detail-cloud.register_button"
              defaultMessage="Registrovat se"
            />
          </Link>
          <div className="product-detail-circle"></div>
        </div>
      </div>
      <div className="product-detail-page content-block">
        <section {...props}>
          <div className="product-detail">
            <section className="product-detail__functions">
              <h1 className="product-detail__headline2">
                <FormattedMessage
                  id="product-detail-cloud.title_functions"
                  defaultMessage="Funkce Karmen Cloud"
                />
              </h1>
              <div className="product-detail__solution">
                <div className="solution-listing">
                  <div className="solution-listing__item">
                    <div className="solution-listing__icon solution-listing__icon--stats"></div>
                    <h2>
                      <FormattedMessage
                        id="product-detail-cloud.function_stats_headline"
                        defaultMessage="Statistiky tisku"
                      />
                    </h2>
                    <p>
                      <FormattedMessage
                        id="product-detail-cloud.function_stats_desc"
                        defaultMessage="Vaší pozornosti už neunikne žádný údaj, jako například teplota senzorů nebo podrobnosti o probíhajícím tisku."
                      />
                    </p>
                  </div>
                  <div className="solution-listing__item">
                    <div className="solution-listing__icon solution-listing__icon--control"></div>
                    <h2>
                      <FormattedMessage
                        id="product-detail-cloud.function_control_headline"
                        defaultMessage="Základní ovládání tiskárny"
                      />
                    </h2>
                    <p>
                      <FormattedMessage
                        id="product-detail-cloud.function_control_desc"
                        defaultMessage="Ovládaní z jediného přehledného okna webového prohlížeče, nechybí ani pokročilá zpráva uživatelů, tiskových souborů či tvorba tiskových front."
                      />
                    </p>
                  </div>
                  <div className="solution-listing__item">
                    <div className="solution-listing__icon solution-listing__icon--interface"></div>
                    <h2>
                      <FormattedMessage
                        id="product-detail-cloud.function_interface_headline"
                        defaultMessage="Jedno rozhraní"
                      />
                    </h2>
                    <p>
                      <FormattedMessage
                        id="product-detail-cloud.function_interface_desc"
                        defaultMessage="Spojte tiskárny stejných nebo různych typů z různych míst v jednom rozhraní"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="product-detail__article">
              <h1 className="product-detail__headline2">
                <FormattedMessage
                  id="product-detail-pill.compatibility_title"
                  defaultMessage="Kompatibilita s nejrozširenejšími slicery"
                />
              </h1>
              <div className="product-detail__text">
                <p>
                  <FormattedMessage
                    id="product-detail-pill.compatibility_text"
                    defaultMessage="Karmen Pill je kompatibilní s nejrozšířenějšími slicery včetně Slic3r, PrusaSlicer či Ultimaker Cura."
                  />
                </p>
              </div>
              <div className="product-detail__logo-list">
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoCura} />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoPrusaSlicer} />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoUltimakerCura} />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductBlockKarmenCloud
