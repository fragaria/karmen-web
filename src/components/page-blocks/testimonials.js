import React from "react"
import { FormattedMessage } from "react-intl"

import testimonialImg1 from "assets/img/testimonials/01-example-testimonial-image.jpg"

const TestimonialsBlock = props => {
  return (
    <div className="content-block">
      <section {...props}>
        <div className="testimonials-header">
          <h1 className="page-block-headline sitenav__anchorpush">
            <span className="sitenav__anchor" id="partners"></span>
            <FormattedMessage
              id="testimonials-block.headline"
              defaultMessage="Reference našich klientů"
            />
          </h1>
          <div className="testimonials-controls">
            <div className="testimonial-control-arrow"></div>
            <div className="testimonial-control-arrow"></div>
          </div>
        </div>
        <div className="testimonials-wrapper">
          <div className="testimonials-carousel">
            <div className="testimonial__item">
              <div className="testimonial__description">
                <div className="testimonial__description-text">
                  Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny.
                </div>
              </div>
              <div className="testimonial__info">
                <div className="testimonial__photo">
                  <img src={testimonialImg1} alt=""/>
                </div>
                <div className="testimonial__desc">
                  <span className="testimonial__title">
                    Lorem ipsum
                  </span>
                  <span className="testimonial__subtitle">
                    Slovensko
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__description">
                <div className="testimonial__description-text">
                  Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny.
                </div>
              </div>
              <div className="testimonial__info">
                <div className="testimonial__photo">
                  <img src={testimonialImg1} alt=""/>
                </div>
                <div className="testimonial__desc">
                  <span className="testimonial__title">
                    Lorem ipsum
                  </span>
                  <span className="testimonial__subtitle">
                    Slovensko
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__description">
                <div className="testimonial__description-text">
                  Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny.
                </div>
              </div>
              <div className="testimonial__info">
                <div className="testimonial__photo">
                  <img src={testimonialImg1} alt=""/>
                </div>
                <div className="testimonial__desc">
                  <span className="testimonial__title">
                    Lorem ipsum
                  </span>
                  <span className="testimonial__subtitle">
                    Slovensko
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__description">
                <div className="testimonial__description-text">
                  Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny.
                </div>
              </div>
              <div className="testimonial__info">
                <div className="testimonial__photo">
                  <img src={testimonialImg1} alt=""/>
                </div>
                <div className="testimonial__desc">
                  <span className="testimonial__title">
                    Lorem ipsum
                  </span>
                  <span className="testimonial__subtitle">
                    Slovensko
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__description">
                <div className="testimonial__description-text">
                  Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny.
                </div>
              </div>
              <div className="testimonial__info">
                <div className="testimonial__photo">
                  <img src={testimonialImg1} alt=""/>
                </div>
                <div className="testimonial__desc">
                  <span className="testimonial__title">
                    Lorem ipsum
                  </span>
                  <span className="testimonial__subtitle">
                    Slovensko
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__description">
                <div className="testimonial__description-text">
                  Jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny.
                </div>
              </div>
              <div className="testimonial__info">
                <div className="testimonial__photo">
                  <img src={testimonialImg1} alt=""/>
                </div>
                <div className="testimonial__desc">
                  <span className="testimonial__title">
                    Lorem ipsum
                  </span>
                  <span className="testimonial__subtitle">
                    Slovensko
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsBlock
