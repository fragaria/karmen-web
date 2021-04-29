import React from "react"
import { FormattedMessage } from "react-intl"
import { graphql, useStaticQuery } from "gatsby"
import { BackgroundImage } from "components/image"

const ConnectOctoBlock = props => {
  const data = useStaticQuery(graphql`
    query {
      octo: file(relativePath: { eq: "octo-karmen-love.png" }) {
        ...fluidImage1024
      }
    }
  `)

  return (
    <section {...props}>
      <div className="content-block">
        <div className="connect-octo">
          <div className="connect-octo__desc">
            <h1 className="connect-octo__headline">
              <FormattedMessage
                id="connect-octo-block.headline"
                defaultMessage="Connect Octo"
              />
            </h1>
            <h2 className="connect-octo__sub" itemProp="description">
              <FormattedMessage
                id="connect-octo.claim"
                defaultMessage="Karmen with its simple online access solves what many OctoPrint users just can’t achieve easily: having their box accessible on the road literally from anywhere."
              />
            </h2>
            <a href="https://medium.com/karmen3d/connecting-octoprint-boxes-to-karmen-53afc48ea9b6" className="button">
              Connect my OctoPrint
            </a>
          </div>
          <BackgroundImage
            className="connect-octo__img"
            file={data.octo}
            style={{ backgroundSize: "contain" }}
          />
        </div>
      </div>
    </section>
  )
}

export default ConnectOctoBlock
