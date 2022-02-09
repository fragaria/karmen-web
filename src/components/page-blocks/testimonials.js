import React from "react"
import { FormattedMessage } from "react-intl"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const TestimonialsCarousel = ({ data }) => {
  const CustomButtonGroupAsArrows = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems, slidesToShow },
    } = rest
    const isArrowsDisabled = totalItems <= slidesToShow
    if (!isArrowsDisabled) {
      return (
        <div className="carousel-arrows carousel-arrows--right-to-headline">
          <button
            title="Previous"
            className={`carousel__arrow carousel__arrow--left${
              currentSlide === 0 ? " disabled" : ""
            }`}
            onClick={previous}
            aria-label="prev"
          ></button>
          <button
            title="Next"
            className={`carousel__arrow carousel__arrow--right${
              currentSlide === totalItems - slidesToShow ? " disabled" : ""
            }`}
            onClick={next}
            aria-label="next"
          ></button>
        </div>
      )
    } else {
      return <div></div>
    }
  }
  const responsive = {
    tablet: {
      breakpoint: { max: 7680, min: 630 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 630, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  }
  return (
    <div className="carousel-wrapper carousel-wrapper--testimonials">
      <Carousel
        responsive={responsive}
        centerMode={false}
        partialVisible={true}
        arrows={false}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        renderButtonGroupOutside={true}
        containerClass="testimonials__carousel"
        renderArrowsWhenDisabled={true}
      >
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
            Karmen Pill spolu s Karmen Cloud považujeme za velice užitečné a zdařilé řešení vzdáleného ovládání 3D tiskárny. Není tak problém si např. i z domova večer pustit ve škole 3D tisk a ráno přijít a jen z podložky odebrat hotový výtisk.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__desc">
              <span className="testimonial__title">Mgr. Vladimír Vais</span>
              <span className="testimonial__subtitle">Gymnázium Františka Palackého, Neratovice</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Karmen Pill je skvělé řešení, jak nejen vzdáleně dohlížet na 3D tiskárny, ale také je ovládat. Pro naši školu je Karmen skvělou pomůckou, jak lépe 3D tisk poskytnout žákům a udělat pro ně tuto novou technologii více zajímavou a ještě atraktivnější.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__desc">
              <span className="testimonial__title">Petr Novák</span>
              <span className="testimonial__subtitle">Ředitel ZŠ MŠ Kladno</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Kamerky používám doma i v práci k plné spokojenosti. Mohu tisk kontrolovat a ovládat i z telefonu. Při nějaké nehodě mohu tisk přerušit či úplně zastavit a v noci si přisvítit. Rozhodně to není klamavá reklama.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__desc">
              <span className="testimonial__title">Petr Musil</span>
              <span className="testimonial__subtitle">LUKAS CZ spol s.r.o.</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Na Karmen se mi moc líbí i její skvěle zpracované UI, které mi hodně usnadňuje práci.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__desc">
              <span className="testimonial__title">JV</span>
              <span className="testimonial__subtitle">AnyoneGo</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Už jsme si zvykli dávat gcody přes webové rozhraní. Hlavně u dlouhých tisků na to koukáme z domova a když je vidět, že něco nejde podle plánu, je super mít možnost to na dálku zastavit.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__desc">
              <span className="testimonial__title">MB</span>
              <span className="testimonial__subtitle">IKEM</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Karmen je výborné řešení pro vzdálenou kontrolu a správu mého tisku a tiskárny. Tiskárnu mám umístěnou doma a nyní mohu kontrolovat tisk odkudkoliv. A v případě chybného tisku ho ihned zastavit.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__desc">
              <span className="testimonial__title">Jakub Šperl</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Připojujeme se k iniciativě #TiskneCeleCesko. Ke kontrole a správě našich tiskáren využíváme software Karmen, který nám teď pomáhá víc než kdy jindy a snižuje náklady na správu tisku.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__desc">
              <span className="testimonial__title">David Frýbert</span>
              <span className="testimonial__subtitle">Střední průmyslová škola Na Třebešíně</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
            Možnost tisk kdykoliv sledovat, když mám po ruce pouze mobil, případně ho zastavit je k nezaplacení, konečně beze strachu mohu tisknout, i když jsem v práci. Karmen Cloud je skvěle přehledný a jednoduchý na ovládání. Za mě dokonalý přístroj a dokonalý Cloud.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__desc">
              <span className="testimonial__title">Michal Kanta</span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

const TestimonialsBlock = props => {
  return (
    <section {...props} className="v-home-section v-home-testimonials">
      <div className="content-block">
        <div className="testimonials__wrapper">
          <h1 className="testimonials__headline sitenav__anchorpush">
            <span className="sitenav__anchor" id="partners"></span>
            <FormattedMessage
              id="testimonials-block.headline"
              defaultMessage="Reference našich klientů"
            />
          </h1>
          <div className="testimonials-carousel">
            <TestimonialsCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsBlock
