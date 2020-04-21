import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"
import { CarouselProvider, DotGroup, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import 'pure-react-carousel/dist/react-carousel.es.css'


const SolutionBlock = props => {
  return (
    <section {...props}>
      <div className="solution">
        <div className="content-block">
          <div className="solution__inner">
            <div className="solution__desc">
              <h1 className="solution__headline">
                <FormattedMessage id="solution-block.meet_karmen" defaultMessage="Meet Karmen" />
              </h1>
              <h2 className="solution__sub">
                <FormattedMessage id="solution-block.claim_1" defaultMessage="Karmen lets you manage 3D printers remotely." /><br />
                <FormattedMessage
                  id="solution-block.claim_2"
                  defaultMessage="Get rid of SD cards once and for all."
                />
              </h2>
            </div>

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
                  <h3>Your print jobs. Centralized.</h3>
                  <p>No matter how many 3D printers you have and where they're based. Karmen lets you manage them remotely using your computer or smartphone. Start, pause or stop jobs, change the queue and redirect on another printer.</p>
                </Slide>
                <Slide index={1}>
                  <h3>They're close when you're afar</h3>
                  <p>Upload your print jobs using the internet and assign them to printers considering the loaded filament or they're busyness.</p>
                </Slide>
                <Slide index={2}>
                  <h3>Real-time print video</h3>
                  <p>Watch print progress live. Visually verify your job's progress or show how the printer's doing to your clients or colleagues.</p>
                </Slide>
                <Slide index={3}>
                  <h3>Simple team management</h3>
                  <p>Create teams for all your printers. Team members can manage the printers while the management will get clear picture about printer usage.</p>
                </Slide>
                <Slide index={4}>
                  <h3>Verified with demanding users</h3>
                  <p>Karmen did well everywhere there was a need to innovate quickly and effectively, i.e. in healthcare or technology companies.</p>
                </Slide>
              </Slider>

              <div className="solution__carousel-controls">
                <ButtonBack><i class="fas fa-long-arrow-alt-left" /></ButtonBack>
                <DotGroup />
                <ButtonNext><i class="fas fa-long-arrow-alt-right" /></ButtonNext>
              </div>
            </CarouselProvider>
          </div>
          </div>
      </div>
    </section>
  )
}

export default SolutionBlock

