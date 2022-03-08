import React from "react"
import { FormattedMessage } from "react-intl"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const TestimonialsCarousel = ({ testimonials }) => {
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
        {testimonials.map(({ node }) => {
          const idx = node.html.length

          return (
            <div className="testimonial__item" key={idx}>
              <div className="testimonial__description">
                <div
                  className="testimonial__description-text"
                  dangerouslySetInnerHTML={{
                    __html: node.html,
                  }}
                />
              </div>

              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <span className="testimonial__title">{node.frontmatter.person}</span>
                  <span className="testimonial__subtitle">{node.frontmatter.institution}</span>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

const TestimonialsBlock = ({ testimonials }) => {
  return (
    <section className="v-home-section v-home-testimonials">
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
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsBlock
