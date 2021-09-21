import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import "react-multi-carousel/lib/styles.css"

import { BackgroundImage } from "components/image"
import CheckoutBooth from "components/checkout/booth"

import KarmenPillGalleryCarousel from "components/product-detail/karmen-pill-gallery"
import KarmenPillPackageCarousel from "components/product-detail/karmen-pill-package"

import czFlag from "assets/img/cz-flag.png"
import iconPackage from "assets/img/icon-package.png"
import iconTruck from "assets/img/icon-truck.png"

import logoCura from "assets/img/logo-cura.png"
import logoPrusaSlicer from "assets/img/logo-prusa-slicer.png"
import logoUltimakerCura from "assets/img/logo-ultimaker-cura.png"
import logoBtl from "assets/img/logo-btl.png"
import logoCvut from "assets/img/logo-cvut.png"
import logoIkem from "assets/img/logo-ikem.png"
import logoTrebesin from "assets/img/logo-prumyslovka-trebesin.png"

const ProductBlockKarmenPill = ({ props }) => {
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
  const checkoutEnabled = data.site.siteMetadata.checkout.enabled
  const [active, setActive] = useState(false)
  const toggleSidebar = evt => {
    evt.preventDefault()
    if (active) {
      document.documentElement.classList.remove("overflow-sidebar-opened")
    } else {
      document.documentElement.classList.add("overflow-sidebar-opened")
    }
    setActive(!active)
  }
  return (
    <section>
      <section
        className={`offcanvas-sidebar ${active === true ? "active" : ""}`}
      >
        <button
          className="sidebar__button sidebar__button--big button button--red"
          onClick={toggleSidebar}
        >
          <FormattedMessage
            id="product-detail-pill.back"
            defaultMessage="Zpět"
          />
        </button>
        <div className="offcanvas-sidebar__inner">
          <div className="sidebar__header">
            <button
              className="sidebar__button button button--red"
              onClick={toggleSidebar}
            >
              <FormattedMessage
                id="product-detail-pill.back"
                defaultMessage="Zpět"
              />
            </button>
            <h1 className="sidebar__headline">
              <FormattedMessage
                id="buy-block.headline"
                defaultMessage="Buy Karmen"
              />
            </h1>
          </div>
          {!checkoutEnabled && (
            <div className="buy__disabled-warning typeset">
              <p className="s5">
                <FormattedMessage
                  id="buy-block.disabled_temporarily"
                  defaultMessage="Due to unexpectedly large number of orders, we had to <strong>temporarily disable our online store</strong> to be able fulfill the orders within a reasonable time. Please <contactLink>drop us an email</contactLink> in case you're interested in buying Karmen and we'll let you know once the store is back online."
                  values={{
                    strong: (...chunks) => <strong>{chunks}</strong>,
                    contactLink: (...chunks) => (
                      <a
                        href={`mailto:${data.site.siteMetadata.company.contactEmail}`}
                      >
                        {chunks}
                      </a>
                    ),
                  }}
                />
              </p>
            </div>
          )}
          {checkoutEnabled && <CheckoutBooth />}
        </div>
      </section>
      <div
        className={`offcanvas-overlay ${active === true ? "active" : ""}`}
      ></div>
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
          <div className="product-detail__desc">
            <FormattedMessage
              id="product-detail-pill.desc"
              defaultMessage="Karmen Pill je malá krabička s rozměry 77 x 34 x 12 mm, která připojením přes USB port, zpřístupní tiskárnu do lokální sítě nebo internetu a umožní ji připojit ke cloudové službě Karmen."
            />
          </div>
          <div className="product-detail__made-in">
            <div className="made-in-icon">
              <img src={czFlag} />
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
          {/*<Link to={pillBuy} className="product-detail__buy-button button button--full button--red">*/}
          {/*  <FormattedMessage*/}
          {/*    id="product-detail-pill.buy_button"*/}
          {/*    defaultMessage="Zakoupit"*/}
          {/*  />*/}
          {/*</Link>*/}
          <button
            className="product-detail__buy-button button button-full button--red"
            onClick={toggleSidebar}
          >
            <FormattedMessage
              id="product-detail-pill.buy_button"
              defaultMessage="Zakoupit"
            />
          </button>
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
                  <img className="logo-img" src={logoBtl} />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoCvut} />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoIkem} />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoTrebesin} />
                </div>
              </div>
            </section>
            <section className="product-detail__article">
              <h1 className="product-detail__headline2">
                <FormattedMessage
                  id="product-detail-pill.package-content_title"
                  defaultMessage="Obsah balení"
                />
              </h1>
              <div className="product-detail__package-content">
                <KarmenPillPackageCarousel />
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ProductBlockKarmenPill
