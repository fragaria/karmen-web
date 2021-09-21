import Carousel from "react-multi-carousel"
import { FormattedMessage } from "react-intl"
import React from "react"

import { BackgroundImage } from "components/image"
import { graphql, useStaticQuery } from "gatsby"

const KarmenPillPackageCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      pckgCablePrint: file(
        relativePath: { eq: "karmen-pill/pckg-content/cable-print.jpg" }
      ) {
        ...fluidImage1024
      }
      pckgCablePrintPill: file(
        relativePath: { eq: "karmen-pill/pckg-content/cable-print-pill.jpg" }
      ) {
        ...fluidImage1024
      }
      pckgFocusRing: file(
        relativePath: { eq: "karmen-pill/pckg-content/focus-ring.jpg" }
      ) {
        ...fluidImage1024
      }
      pckgCablePillPc: file(
        relativePath: { eq: "karmen-pill/pckg-content/cable-pill-pc.jpg" }
      ) {
        ...fluidImage1024
      }
      pckgKarmenPill: file(
        relativePath: { eq: "karmen-pill/pckg-content/karmen-pill.jpg" }
      ) {
        ...fluidImage1024
      }
      pckgKarmenPillCase: file(
        relativePath: { eq: "karmen-pill/pckg-content/karmen-pill-case.jpg" }
      ) {
        ...fluidImage1024
      }
      pckgPowerSupply: file(
        relativePath: { eq: "karmen-pill/pckg-content/power-supply.jpg" }
      ) {
        ...fluidImage1024
      }
      pckgCableUsb: file(
        relativePath: { eq: "karmen-pill/pckg-content/cable-usb.jpg" }
      ) {
        ...fluidImage1024
      }
    }
  `)
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
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  }
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

export default KarmenPillPackageCarousel
