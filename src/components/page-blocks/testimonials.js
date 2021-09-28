import React from "react"
import { FormattedMessage } from "react-intl"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import testimonialImg1 from "assets/img/testimonials/01-example-testimonial-image.jpg"

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
              Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz
              nevydržel pouze pět století, on přežil i nástup elektronické sazby
              v podstatě beze změny.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__photo">
              <img src={testimonialImg1} alt="" />
            </div>
            <div className="testimonial__desc">
              <span className="testimonial__title">Lorem ipsum</span>
              <span className="testimonial__subtitle">Slovensko</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz
              nevydržel pouze pět století, on přežil i nástup elektronické sazby
              v podstatě beze změny.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__photo">
              <img src={testimonialImg1} alt="" />
            </div>
            <div className="testimonial__desc">
              <span className="testimonial__title">Lorem ipsum</span>
              <span className="testimonial__subtitle">Slovensko</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz
              nevydržel pouze pět století, on přežil i nástup elektronické sazby
              v podstatě beze změny.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__photo">
              <img src={testimonialImg1} alt="" />
            </div>
            <div className="testimonial__desc">
              <span className="testimonial__title">Lorem ipsum</span>
              <span className="testimonial__subtitle">Slovensko</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz
              nevydržel pouze pět století, on přežil i nástup elektronické sazby
              v podstatě beze změny.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__photo">
              <img src={testimonialImg1} alt="" />
            </div>
            <div className="testimonial__desc">
              <span className="testimonial__title">Lorem ipsum</span>
              <span className="testimonial__subtitle">Slovensko</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz
              nevydržel pouze pět století, on přežil i nástup elektronické sazby
              v podstatě beze změny.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__photo">
              <img src={testimonialImg1} alt="" />
            </div>
            <div className="testimonial__desc">
              <span className="testimonial__title">Lorem ipsum</span>
              <span className="testimonial__subtitle">Slovensko</span>
            </div>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__description">
            <div className="testimonial__description-text">
              Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz
              nevydržel pouze pět století, on přežil i nástup elektronické sazby
              v podstatě beze změny.
            </div>
          </div>
          <div className="testimonial__info">
            <div className="testimonial__photo">
              <img src={testimonialImg1} alt="" />
            </div>
            <div className="testimonial__desc">
              <span className="testimonial__title">Lorem ipsum</span>
              <span className="testimonial__subtitle">Slovensko</span>
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
