import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"
import Video from "../../assets/video/meet-karmen-cs.mp4"
import VideoPoster from "../../assets/img/video-poster.jpg";
import VideoPlayer from "../video";

const SolutionBlock = props => {
  const data = useStaticQuery(graphql`
    query {
      smartphoneAndPillMetadata: file(
        relativePath: { eq: "smartphone-and-pill.png" }
      ) {
        ...fluidImage1920_noblur
      }

      site {
        siteMetadata {
          siteUrl
          company {
            officialName
          }
        }
      }
    }
  `)

  return (
    <section {...props}>
      <div className="solution" itemType="http://schema.org/Product" itemScope>
        <div className="content-block sitenav__anchorpush">
          <span className="sitenav__anchor" id="meet"></span>
          <h1 className="solution__headline">
            <FormattedMessage
              id="solution-block.meet_karmen"
              defaultMessage="Meet Karmen"
            />
          </h1>
          <h2 className="solution__sub" itemProp="description">
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
        <div className="content-block">
          <VideoPlayer video={Video} poster={VideoPoster}/>
        </div>
      </div>
    </section>
  )
}

export default SolutionBlock
