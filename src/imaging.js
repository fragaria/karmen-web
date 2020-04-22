import { graphql } from "gatsby"

export const fluidImage300 = graphql`
  fragment fluidImage300 on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const fluidImage300_noblur = graphql`
  fragment fluidImage300_noblur on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`

export const fluidImage300_traced = graphql`
  fragment fluidImage300_traced on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

export const fluidImage600 = graphql`
  fragment fluidImage600 on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const fluidImage600_noblur = graphql`
  fragment fluidImage600_noblur on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`

export const fluidImage600_traced = graphql`
  fragment fluidImage600_traced on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

export const fluidImage750 = graphql`
  fragment fluidImage750 on File {
    childImageSharp {
      fluid(maxWidth: 750) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const fluidImage750_noblur = graphql`
  fragment fluidImage750_noblur on File {
    childImageSharp {
      fluid(maxWidth: 750) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`

export const fluidImage750_traced = graphql`
  fragment fluidImage750_traced on File {
    childImageSharp {
      fluid(maxWidth: 750) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

export const fluidImage1024 = graphql`
  fragment fluidImage1024 on File {
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const fluidImage1024_noblur = graphql`
  fragment fluidImage1024_noblur on File {
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`

export const fluidImage1024_traced = graphql`
  fragment fluidImage1024_traced on File {
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

export const fluidImage1920 = graphql`
  fragment fluidImage1920 on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const fluidImage1920_noblur = graphql`
  fragment fluidImage1920_noblur on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`

export const fluidImage1920_traced = graphql`
  fragment fluidImage1920_traced on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`
