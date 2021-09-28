import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { FormattedMessage } from "react-intl"

import { BackgroundImage } from "components/image"

import logoCura from "assets/img/logo-cura.png"
import logoPrusaSlicer from "assets/img/logo-prusa-slicer.png"
import logoUltimakerCura from "assets/img/logo-ultimaker-cura.png"

const ProductBlockKarmenPillDiy = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      diyFull: file(relativePath: { eq: "product-full-diy.png" }) {
        ...fluidImage1024_traced
      }
    }
  `)
  return (
    <div>
      <div className="product-detail__hero">
        <BackgroundImage
          file={data.diyFull}
          style={{
            backgroundSize: "",
            backgroundPosition: "",
          }}
          className="product-detail__left product-detail__img product-detail__img--diy"
        ></BackgroundImage>
        <div className="product-detail__right product-detail__right--without-btn">
          <h1 className="product-detail__headline">
            <FormattedMessage
              id="product-detail-diy.title"
              defaultMessage="Karmen Pill skládačka"
            />
          </h1>
          <div className="product-detail__desc">
            <FormattedMessage
              id="product-detail-diy.desc"
              defaultMessage="Baví Vás DO IT YOURSELF projekty, kupovali jste si ábíčko a skládali modely, rádi kutíte a troufnete si postavit vlastní zařízení? Složte si Karmen Pill sami podle návodu. Nakupte komponenty (raspberry, kameru, SD kartu, kabely) připájejte vše dohromady, vytiskněte si vlastní Pill z dodaných STL, nahrajte software, slepte krabičku dohromady, zapojte, připojte na wifi, na tiskárnu a sledujte tisk na kameře."
            />
          </div>
          <div className="product-detail__price">
            <FormattedMessage
              id="product-detail-diy.price"
              defaultMessage="Zdarma"
            />
          </div>
          {/*<div className="product-detail__price-vat">*/}
          {/*  <FormattedMessage*/}
          {/*    id="product-detail-diy.price-vat"*/}
          {/*    defaultMessage="Zdarma pro všechny"*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<Link to={diyBuy} className="product-detail__buy-button button button--full button--red">*/}
          {/*  <FormattedMessage*/}
          {/*    id="product-detail-diy.buy_button"*/}
          {/*    defaultMessage="Zakoupit"*/}
          {/*  />*/}
          {/*</Link>*/}
          <div className="product-detail-circle"></div>
        </div>
      </div>
      <div className="product-detail-page content-block">
        <section {...props}>
          <div className="product-detail">
            <section className="product-detail__howto">
              <h1 className="product-detail__headline2">
                <FormattedMessage
                  id="product-detail-diy.title_howto"
                  defaultMessage="Jak na to?"
                />
              </h1>
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
                  <img className="logo-img" src={logoCura} alt="Ultimaker Cura: World’s most popular 3D printing software" />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoPrusaSlicer} alt="PrusaSlicer: open-source, feature-rich, frequently updated tool that contains everything you need to export the perfect print files" />
                </div>
                <div className="product-detail__logo">
                  <img className="logo-img" src={logoUltimakerCura} alt="Slic3r: Open source 3D printing toolbox" />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductBlockKarmenPillDiy
