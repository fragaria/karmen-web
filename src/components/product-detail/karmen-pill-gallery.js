import Carousel from "react-multi-carousel"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BackgroundImage } from "components/image"

const KarmenPillGalleryCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      pillFull: file(relativePath: { eq: "product-full-pill.png" }) {
        ...fluidImage1024_traced
      }
      gallery1: file(
        relativePath: { eq: "karmen-pill/karmen-pill-in-reality1.jpg" }
      ) {
        ...fluidImage1024
      }
      gallery2: file(
        relativePath: { eq: "karmen-pill/karmen-pill-in-reality2.jpg" }
      ) {
        ...fluidImage1024
      }
      gallery3: file(
        relativePath: { eq: "karmen-pill/karmen-pill-in-reality3.jpg" }
      ) {
        ...fluidImage1024
      }
    }
  `)
  const CustomButtonGroupAsArrows = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems, slidesToShow },
    } = rest
    const isArrowsDisabled = totalItems <= slidesToShow
    if (!isArrowsDisabled) {
      return (
        <div className="carousel-arrows">
          <button
            className={`carousel__arrow carousel__arrow--left${
              currentSlide === 0 ? " disabled" : ""
            }`}
            onClick={previous}
          ></button>
          <button
            className={`carousel__arrow carousel__arrow--right${
              currentSlide === totalItems - slidesToShow ? " disabled" : ""
            }`}
            onClick={next}
          ></button>
        </div>
      )
    } else {
      return <div></div>
    }
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 8000, min: 1024 },
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
      partialVisibilityGutter: 40,
    },
  }
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

export default KarmenPillGalleryCarousel
