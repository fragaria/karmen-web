import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import classNames from "classnames"
import BackgroundImg from "gatsby-background-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const Image = ({
  file,
  className: desiredClass = "",
  fixed = false,
  ...props
} = {}) => {
  const cls = classNames("image", desiredClass)

  if (fixed) {
    return <Img className={cls} fixed={file.childImageSharp.fixed} {...props} />
  }

  return <Img className={cls} fluid={file.childImageSharp.fluid} {...props} />
}

Image.propTypes = {
  file: PropTypes.object.isRequired,
  className: PropTypes.string,
  fixed: PropTypes.bool,
}

export const BackgroundImage = ({
  file,
  tag,
  className: desiredClass = "",
  fixed = false,
  ...props
}) => {
  const cls = classNames("background-image", desiredClass)

  if (fixed) {
    return (
      <BackgroundImg
        Tag={tag}
        className={cls}
        fixed={file.childImageSharp.fixed}
        {...props}
      />
    )
  }

  return (
    <BackgroundImg
      Tag={tag}
      className={cls}
      fluid={file.childImageSharp.fluid}
      {...props}
    />
  )
}

BackgroundImage.propTypes = {
  file: PropTypes.object.isRequired,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  tag: PropTypes.string,
}
