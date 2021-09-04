import  React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

import { FormattedMessage } from "react-intl"

import { BackgroundImage } from "components/image"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const GalleryCarousel = ({data}) => {
  const CustomButtonGroupAsArrows = ({ next, previous, ...rest }) => {
    const {
      carouselState: {
        currentSlide,
        totalItems,
        slidesToShow
      }
    } = rest;
    const isArrowsDisabled = totalItems <= slidesToShow;
    if(!isArrowsDisabled) {
      return (
        <div className="carousel-arrows">
          <button className={`carousel__arrow carousel__arrow--left${currentSlide === 0 ? ' disabled' : ''}`} onClick={previous}></button>
          <button className={`carousel__arrow carousel__arrow--right${currentSlide === (totalItems - slidesToShow) ? ' disabled' : ''}`} onClick={next}></button>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 8000, min: 1024 },
      items: 4,
      slidesToSlide: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40
    }
  };
  return (
    <div className="carousel-wrapper">
      <Carousel
        responsive={responsive}
        centerMode={false}
        partialVisible={true}
        arrows={false}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        renderButtonGroupOutside={true}
        containerClass="product-detail__gallery"
        renderArrowsWhenDisabled={true}
      >
        <BackgroundImage
          file={data.gallery1}
          style={{
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="gallery__item"
        />
        <BackgroundImage
          file={data.gallery2}
          style={{
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="gallery__item"
        />
        <BackgroundImage
          file={data.gallery3}
          style={{
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="gallery__item"
        />
      </Carousel>
    </div>
  )
}

const PackageCarousel = ({data}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 5000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0
    }
  };
  return (
    <div className="carousel-wrapper">
      <Carousel
        responsive={responsive}
        centerMode={false}
        partialVisible={false}
        arrows={false}
        showDots={true}
        dotListClass="carousel__dots"
        containerClass="carousel__pckg"
      >
        <div className="package-content__item">
          <div className="pckg-item__text">
            <FormattedMessage
              id="product-detail-package.print_cable"
              defaultMessage="Kabel k připojení s tiskárnou"
            />
          </div>
          <BackgroundImage
            file={data.pckgCablePrint}
            style={{
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
            className="pckg-item__img"
          />
        </div>
        <div className="package-content__item">
          <div className="pckg-item__text">
            <FormattedMessage
              id="product-detail-package.print_cable_pill"
              defaultMessage="Kabel k propojení Pill s tiskárnou"
            />
          </div>
          <BackgroundImage
            file={data.pckgCablePrintPill}
            style={{
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
            className="pckg-item__img"
          />
        </div>
        <div className="package-content__item">
          <div className="pckg-item__text">
            <FormattedMessage
              id="product-detail-package.focus_ring"
              defaultMessage="Zaostřovací kolečko kamery"
            />
          </div>
          <BackgroundImage
            file={data.pckgFocusRing}
            style={{
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
            className="pckg-item__img"
          />
        </div>
        <div className="package-content__item">
          <div className="pckg-item__text">
            <FormattedMessage
              id="product-detail-package.cable_pill_pc"
              defaultMessage="Kabel k ůvodnímu nastavení Pill s PC"
            />
          </div>
          <BackgroundImage
            file={data.pckgCablePillPc}
            style={{
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
            className="pckg-item__img"
          />
        </div>
        <div className="package-content__item">
          <div className="pckg-item__text">
            <FormattedMessage
              id="product-detail-package.usb_cable"
              defaultMessage="Prodlužovací USB kabel"
            />
          </div>
          <BackgroundImage
            file={data.pckgCableUsb}
            style={{
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
            className="pckg-item__img"
          />
        </div>
        <div className="package-content__item">
          <div className="pckg-item__text">
            <FormattedMessage
              id="product-detail-package.karmen_pill"
              defaultMessage="Karmen Pill"
            />
          </div>
          <BackgroundImage
            file={data.pckgKarmenPill}
            style={{
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
            className="pckg-item__img"
          />
        </div>
        <div className="package-content__item">
          <div className="pckg-item__text">
            <FormattedMessage
              id="product-detail-package.power_suply"
              defaultMessage="Napájecí 5V adaptér"
            />
          </div>
          <BackgroundImage
            file={data.pckgPowerSupply}
            style={{
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
            className="pckg-item__img"
          />
        </div>
        <div className="package-content__item">
          <div className="pckg-item__text">
            <FormattedMessage
              id="product-detail-package.karmen_pill_case"
              defaultMessage="Obal pro Karmen Pill"
            />
          </div>
          <BackgroundImage
            file={data.pckgKarmenPillCase}
            style={{
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
            className="pckg-item__img"
          />
        </div>
      </Carousel>
    </div>
  )
}

const ProductBlockKarmenPill = ({ props, location }) => {
  const pillBuy = 'test';
  const data = useStaticQuery(graphql`
    query {
      pillFull: file(relativePath: { eq: "product-full-pill.png" }) {
        ...fluidImage1024_traced
      },
      gallery1: file(relativePath: { eq: "karmen-pill/karmen-pill-in-reality1.jpg" }) {
        ...fluidImage1024
      },
      gallery2: file(relativePath: { eq: "karmen-pill/karmen-pill-in-reality2.jpg" }) {
        ...fluidImage1024
      },
      gallery3: file(relativePath: { eq: "karmen-pill/karmen-pill-in-reality3.jpg" }) {
        ...fluidImage1024
      },
      pckgCablePrint: file(relativePath: { eq: "karmen-pill/pckg-content/cable-print.jpg" }) {
        ...fluidImage1024
      },
      pckgCablePrintPill: file(relativePath: { eq: "karmen-pill/pckg-content/cable-print-pill.jpg" }) {
        ...fluidImage1024
      },
      pckgFocusRing: file(relativePath: { eq: "karmen-pill/pckg-content/focus-ring.jpg" }) {
        ...fluidImage1024
      },
      pckgCablePillPc: file(relativePath: { eq: "karmen-pill/pckg-content/cable-pill-pc.jpg" }) {
        ...fluidImage1024
      },
      pckgKarmenPill: file(relativePath: { eq: "karmen-pill/pckg-content/karmen-pill.jpg" }) {
        ...fluidImage1024
      },
      pckgKarmenPillCase: file(relativePath: { eq: "karmen-pill/pckg-content/karmen-pill-case.jpg" }) {
        ...fluidImage1024
      },
      pckgPowerSupply: file(relativePath: { eq: "karmen-pill/pckg-content/power-supply.jpg" }) {
        ...fluidImage1024
      },
      pckgCableUsb: file(relativePath: { eq: "karmen-pill/pckg-content/cable-usb.jpg" }) {
        ...fluidImage1024
      }
    }
  `)
  return (
    <div>
      <div className="product-detail__hero">
        <BackgroundImage
          file={data.pillFull}
          style={{
            backgroundSize: '',
            backgroundPosition: ''
          }}
          className="product-detail__left product-detail__img product-detail__img--pill">
        </BackgroundImage>
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
              <img src={czFlag}/>
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
          <Link to={pillBuy} className="product-detail__buy-button button button--full button--red">
            <FormattedMessage
              id="product-detail-pill.buy_button"
              defaultMessage="Zakoupit"
            />
          </Link>
          <ul className="product-detail__delivery list--unstyled">
            <li>
              <img src={iconPackage} className="list-icon" alt="Odeslání do dvou dnů"/>
              <FormattedMessage
                id="product-detail-pill.delivery"
                defaultMessage="Odeslání do dvou dnů"
              />
            </li>
            <li>
              <img src={iconTruck} className="list-icon" alt="Odeslání do dvou dnů"/>
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
              TODO: sipky by meli byt na desktopu vedle nadpisu
              */}
              <GalleryCarousel data={data} />
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
                <PackageCarousel data={data}/>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductBlockKarmenPill
