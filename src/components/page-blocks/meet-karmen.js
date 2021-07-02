import React from "react"
import { FormattedMessage } from "react-intl"
import Video from "../../assets/video/meet-karmen-cs.mp4"
import VideoPoster from "../../assets/img/video-poster.jpg";
import VideoPlayer from "../video";

const MeetKarmenBlock = props => {
  return (
    <section {...props}>
      <div className="meet-karmen" itemType="http://schema.org/Product" itemScope>
        <div className="content-block sitenav__anchorpush">
          <span className="sitenav__anchor" id="meet"></span>
          <h1 className="meet-karmen__headline">
            <FormattedMessage
              id="meet-karmen-block.headline"
              defaultMessage="Meet Karmen"
            />
          </h1>
          <h2 className="meet-karmen__sub" itemProp="description">
            <FormattedMessage
              id="meet-karmen-block.claim_1"
              defaultMessage="Karmen lets you manage your 3D printers remotely."
            />
            <br />
            <FormattedMessage
              id="meet-karmen-block.claim_2"
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

export default MeetKarmenBlock
