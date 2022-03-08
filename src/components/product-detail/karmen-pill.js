import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"

import "react-multi-carousel/lib/styles.css"

import { BackgroundImage } from "components/image"

import KarmenPillGalleryCarousel from "components/product-detail/karmen-pill-gallery"

import czFlag from "assets/img/cz-flag.svg"
import iconPackage from "assets/img/icon-package.png"
import iconTruck from "assets/img/icon-truck.png"

import logoCura from "assets/img/logo-cura.png"
import logoPrusaSlicer from "assets/img/logo-prusa-slicer.png"
import logoSlic3r from "assets/img/logo-slic3r.png"
import logoBtl from "assets/img/logo-btl.png"
import logoCvut from "assets/img/logo-cvut.png"
import logoIkem from "assets/img/logo-ikem.png"
import logoTrebesin from "assets/img/logo-prumyslovka-trebesin.png"

const ProductBlockKarmenPill = ({ props }) => {
  const intl = useIntl()
  const buyPillLink =
    intl.locale === "cs"
      ? "/cs/koupit/"
      : "/en/koupit/"
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          checkout {
            enabled
          }
          company {
            contactEmail
          }
        }
      }
      pillFull: file(relativePath: { eq: "product-full-pill.png" }) {
        ...fluidImage1024_traced
      }
    }
  `)
  return (
    <section>
      <div className="product-detail__hero">
        <BackgroundImage
          file={data.pillFull}
          style={{
            backgroundSize: "",
            backgroundPosition: "",
          }}
          className="product-detail__left product-detail__img product-detail__img--pill"
        ></BackgroundImage>
        <div className="product-detail__right">
          <h1 className="product-detail__headline">
            <FormattedMessage
              id="product-detail-pill.title"
              defaultMessage="Karmen Pill"
            />
          </h1>
          <div className="product-detail__desc typeset">
            <FormattedMessage
              id="product-detail-pill.desc"
              defaultMessage="Karmen Pill je zařízení, které zajistí zabezpečené ovládání a monitoring 3D tiskárny přes cloudovou službu Karmen."
            />

            <p/>

            <strong>
              <FormattedMessage
                id="product-detail-pill.specs_title"
                defaultMessage="Karmen Pill se skládá z:"
              />
            </strong>

            <ul>
              <li>
                <FormattedMessage
                  id="product-detail-pill.specs01"
                  defaultMessage="základní desky"
                />
              </li>
              <li>
                <FormattedMessage
                  id="product-detail-pill.specs02"
                  defaultMessage="webkamery a ostřícího kolečka"
                />
              </li>
              <li>
                <FormattedMessage
                  id="product-detail-pill.specs03"
                  defaultMessage="led diody"
                />
              </li>
              <li>
                <FormattedMessage
                  id="product-detail-pill.specs04"
                  defaultMessage="adaptérů a propojovacích kabelů"
                />
              </li>
              <li>
                <FormattedMessage
                  id="product-detail-pill.specs05"
                  defaultMessage="3D tištěných krytů (modely pro tisk - odkaz níže)"
                />
              </li>
            </ul>
            <FormattedMessage
              id="product-detail-pill.specs_appendix"
              defaultMessage="Instalace je velmi jednoduchá, držáky k tiskárně a další díly jsou k dispozici zde"
              values={{
                linkGcodes: <a href="../../gcodes/">zde</a>,
              }}
            />
          </div>
          <div className="product-detail__made-in">
            <div className="made-in-icon">
              <img src={czFlag} alt="Czechia" />
            </div>
            <FormattedMessage
              id="product-detail-pill.made_in"
              defaultMessage="Karmen vyrábíme v Čechách."
            />
          </div>
          <div className="product-detail__price">
            <FormattedMessage
              id="product-detail-pill.price"
              defaultMessage="4235 Kč s DPH"
            />
          </div>
          <div className="product-detail__price-vat">
            <FormattedMessage
              id="product-detail-pill.price-vat"
              defaultMessage="3500 Kč bez DPH"
            />
          </div>
          <Link to={buyPillLink} className="product-detail__buy-button button button--full button--red">
            <FormattedMessage
              id="product-detail-pill.buy_button"
              defaultMessage="Zakoupit"
            />
          </Link>
          <ul className="product-detail__delivery list--unstyled">
            <li>
              <img
                src={iconPackage}
                className="list-icon"
                alt="Odeslání do dvou dnů"
              />
              <FormattedMessage
                id="product-detail-pill.delivery"
                defaultMessage="Odeslání do dvou dnů"
              />
            </li>
            <li>
              <img
                src={iconTruck}
                className="list-icon"
                alt="Odeslání do dvou dnů"
              />
              <FormattedMessage
                id="product-detail-pill.delivery_price"
                defaultMessage="Poštovné 60 Kč"
              />
            </li>
          </ul>
          <div className="product-detail-circle"></div>
        </div>
      </div>
      <div className="product-detail-page content-block">
        <section {...props}>
          <div className="product-detail">
            <section className="product-detail__gallery-block">
              <h1 className="product-detail__headline2">
                <FormattedMessage
                  id="product-detail-pill.subheading_in-work"
                  defaultMessage="Karmen v praxi"
                />
              </h1>
              {/*
              TODO: galerie by mela byt sitenavwide
              */}
              <KarmenPillGalleryCarousel />
            </section>
            <section className="product-detail__functions">
              <h1 className="product-detail__headline2">
                <FormattedMessage
                  id="product-detail-pill.title_functions"
                  defaultMessage="Funkce Karmen Pill"
                />
              </h1>
              <div className="product-detail__text">
                <p>
                  <FormattedMessage
                    id="product-detail-pill.functions_text"
                    defaultMessage="Umožňuje přenos obrazu z kamery do webového rozhraní, přes nějž poskytuje uživateli rovněž informace o teplotě senzorů a probíhajícím tisku. Umožňuje také základní ovládání tiskárny."
                  />
                </p>
              </div>
              <div className="product-detail__solution">
                <div className="solution-listing">
                  <div className="solution-listing__item">
                    <div className="solution-listing__icon solution-listing__icon--plug"></div>
                    <h2>
                      <FormattedMessage
                        id="product-detail-pill.function_plug_headline"
                        defaultMessage="Plug & Play"
                      />
                    </h2>
                    <p>
                      <FormattedMessage
                        id="product-detail-pill.function_plug_desc"
                        defaultMessage="Připojíte na wifi a následně k tiskárně a je to."
                      />
                    </p>
                  </div>
                  <div className="solution-listing__item">
                    <div className="solution-listing__icon solution-listing__icon--wifi"></div>
                    <h2>
                      <FormattedMessage
                        id="product-detail-pill.function_wifi_headline"
                        defaultMessage="Wi-Fi konektivita"
                      />
                    </h2>
                    <p>
                      <FormattedMessage
                        id="product-detail-pill.function_wifi_desc"
                        defaultMessage="Z každé lokální 3D tiskárny snadno udělá tiskárnu síťovou."
                      />
                    </p>
                  </div>
                  <div className="solution-listing__item">
                    <div className="solution-listing__icon solution-listing__icon--usb"></div>
                    <h2>
                      <FormattedMessage
                        id="product-detail-pill.function_usb_headline"
                        defaultMessage="USB propojení s tiskárnou"
                      />
                    </h2>
                    <p>
                      <FormattedMessage
                        id="product-detail-pill.function_usb_desc"
                        defaultMessage="Pro připojení vám stačí jeden USB port."
                      />
                    </p>
                  </div>
                  <div className="solution-listing__item">
                    <div className="solution-listing__icon solution-listing__icon--light"></div>
                    <h2>
                      <FormattedMessage
                        id="product-detail-pill.function_light_headline"
                        defaultMessage="Přisvětlovací dioda"
                      />
                    </h2>
                    <p>
                      <FormattedMessage
                        id="product-detail-pill.function_light_desc"
                        defaultMessage="Karmen Vám přisvítí díky LED didodě."
                      />
                    </p>
                  </div>
                  <div className="solution-listing__item">
                    <div className="solution-listing__icon solution-listing__icon--camera"></div>
                    <h2>
                      <FormattedMessage
                        id="product-detail-pill.function_camera_headline"
                        defaultMessage="Obraz z kamery"
                      />
                    </h2>
                    <p>
                      <FormattedMessage
                        id="product-detail-pill.function_camera_desc"
                        defaultMessage="U tiskárny už nemusíte stát osobně, celý průběh 3D tisku můžete sledovat na dálku kdykoli a odkudkoli."
                      />
                    </p>
                  </div>
                  <div className="solution-listing__item">
                    <div className="solution-listing__icon solution-listing__icon--slicer"></div>
                    <h2>
                      <FormattedMessage
                        id="product-detail-pill.function_compatibility_headline"
                        defaultMessage="Kompatibilita se slicery"
                      />
                    </h2>
                    <p>
                      <FormattedMessage
                        id="product-detail-pill.function_compatibility_desc"
                        defaultMessage="Jejich počet neustále rozšiřujeme."
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
                    defaultMessage="Karmen je kompatibilní s nejrozšířenějšími slicery včetně Slic3r, PrusaSlicer či Ultimaker Cura."
                  />
                </p>
              </div>
              <div className="product-detail__logo-list">
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoCura} alt="Ultimaker Cura: World’s most popular 3D printing software" />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoPrusaSlicer} alt="PrusaSlicer: open-source, feature-rich, frequently updated tool that contains everything you need to export the perfect print files" />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoSlic3r} alt="Slic3r: Open source 3D printing toolbox" />
                </div>
              </div>
            </section>
            <section className="product-detail__article">
              <h1 className="product-detail__headline2">
                <FormattedMessage
                  id="product-detail-pill.user_proved_title"
                  defaultMessage="Ověřeno uživateli"
                />
              </h1>
              <div className="product-detail__text">
                <p>
                  <FormattedMessage
                    id="product-detail-pill.user_proved_text"
                    defaultMessage="Za dva roky fungování používá nyní Karmen přes 120 uživatelů. Zákazníci z řad jednotlivců, firem i velkých organizací."
                  />
                </p>
              </div>
              <div className="product-detail__logo-list product-detail__logo-list--two-cols">
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoBtl} alt="BTL" />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoCvut} alt="ČVUT" />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoIkem} alt="IKEM" />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoTrebesin} alt="Střední průmyslová škola Třebešín" />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ProductBlockKarmenPill
