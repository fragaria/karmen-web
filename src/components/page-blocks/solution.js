import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"
import {
  CarouselProvider,
  DotGroup,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import { BackgroundImage } from "components/image"

const SolutionBlock = props => {
  const data = useStaticQuery(graphql`
    query {
      smartphoneAndPill: file(relativePath: { eq: "smartphone-and-pill.png" }) {
        ...fluidImage1024_traced
      }
      smartphoneAndPillMobile: file(
        relativePath: { eq: "pill-w-cloud-mobile.png" }
      ) {
        ...fluidImage1024_traced
      }
    }
  `)

  return (
    <section {...props}>
      <div className="solution">
        <div className="content-block sitenav__anchorpush">
          <span className="sitenav__anchor" id="meet"></span>
          <BackgroundImage
            file={data.smartphoneAndPill}
            className="solution__inner"
            style={{ backgroundPosition: "right top", backgroundSize: "50%" }}
          >
            <div className="solution__desc">
              <h1 className="solution__headline">
                <FormattedMessage
                  id="solution-block.meet_karmen"
                  defaultMessage="Meet Karmen"
                />
              </h1>
              <h2 className="solution__sub">
                <FormattedMessage
                  id="solution-block.claim_1"
                  defaultMessage="Karmen lets you manage your 3D printers remotely."
                />
                <br />
                <FormattedMessage
                  id="solution-block.claim_2"
                  defaultMessage="Get rid of SD cards once and for all."
                />
              </h2>
            </div>
            <BackgroundImage
              file={data.smartphoneAndPillMobile}
              style={{
                backgroundPosition: "left top",
                backgroundSize: "600px 373px",
              }}
              className="solution__mobileimage"
            />

            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              interval={4000}
              isPlaying={true}
              totalSlides={5}
              className="solution__carousel"
            >
              <Slider>
                <Slide index={0}>
                  <h3>
                    <FormattedMessage
                      id="solution-block.slide_1_title"
                      defaultMessage="Your print jobs. Centralized."
                    />
                  </h3>
                  <p>
                    <FormattedMessage
                      id="solution-block.slide_1_content"
                      defaultMessage="It doesn’t matter how many 3D printers you have or where they’re located. Karmen lets you manage your printers on a computer or smartphone. Start, pause and stop print jobs, change the order in the queue or redirect to another device."
                    />
                  </p>
                </Slide>
                <Slide index={1}>
                  <h3>
                    <FormattedMessage
                      id="solution-block.slide_2_title"
                      defaultMessage="Right there with you on the road"
                    />
                  </h3>
                  <p>
                    <FormattedMessage
                      id="solution-block.slide_2_content"
                      defaultMessage="It’s easy to send new print jobs over the internet and assign them to printers according to workload or filament colour."
                    />
                  </p>
                </Slide>
                <Slide index={2}>
                  <h3>
                    <FormattedMessage
                      id="solution-block.slide_3_title"
                      defaultMessage="Video from print jobs in real time"
                    />
                  </h3>
                  <p>
                    <FormattedMessage
                      id="solution-block.slide_3_content"
                      defaultMessage="Monitor print job progress in real time. Check job status visually anytime and show print progress to colleagues and clients."
                    />
                  </p>
                </Slide>
                <Slide index={3}>
                  <h3>
                    <FormattedMessage
                      id="solution-block.slide_4_title"
                      defaultMessage="Easy team management"
                    />
                  </h3>
                  <p>
                    <FormattedMessage
                      id="solution-block.slide_4_content"
                      defaultMessage="Create teams for all your printers. Members can manage their devices remotely, while support has a complete overview of device usage."
                    />
                  </p>
                </Slide>
                <Slide index={4}>
                  <h3>
                    <FormattedMessage
                      id="solution-block.slide_5_title"
                      defaultMessage="Tested by the toughest users"
                    />
                  </h3>
                  <p>
                    <FormattedMessage
                      id="solution-block.slide_5_content"
                      defaultMessage="Karmen has proven itself everywhere there’s a need to rapidly and effectively innovate, such as in healthcare and technology companies."
                    />
                  </p>
                </Slide>
              </Slider>

              <div className="solution__carousel-controls">
                <ButtonBack>
                  <i className="fas fa-long-arrow-alt-left" />
                </ButtonBack>
                <DotGroup />
                <ButtonNext>
                  <i className="fas fa-long-arrow-alt-right" />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </BackgroundImage>
        </div>
      </div>
    </section>
  )
}

export default SolutionBlock
