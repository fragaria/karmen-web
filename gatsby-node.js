const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pressPost = path.resolve(`./src/templates/blog-post.js`)
  const gcodeDetail = path.resolve(`./src/templates/gcode-detail.js`)
  const blogQuery = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/(blog)/" } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                lang
              }
            }
          }
        }
      }
    `
  )

  const gcodesQuery = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/(gcodes)/" } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                lang
              }
            }
          }
        }
      }
    `
  )

  if (blogQuery.errors) {
    throw blogQuery.errors
  }
  if (gcodesQuery.errors) {
    throw gcodesQuery.errors
  }

  // Create pages.
  const posts = blogQuery.data.allMarkdownRemark.edges

  posts
    .filter(post => !!post.node.frontmatter.lang)
    .forEach((post, index) => {
      const path =
        "/" +
        post.node.frontmatter.lang +
        "/blog/" +
        post.node.fields.slug.replace(/\/(en|cs)\//gi, "")
      createPage({
        path,
        component: pressPost,
        context: {
          slug: post.node.fields.slug,
          lang: post.node.frontmatter.lang,
        },
      })
    })

    const gcodes = gcodesQuery.data.allMarkdownRemark.edges

    gcodes
    .filter(post => !!post.node.frontmatter.lang)
    .forEach((post, index) => {
      const path =
        "/" +
        post.node.frontmatter.lang +
        "/gcodes/" +
        post.node.fields.slug.replace(/\/(en|cs)\//gi, "")
      createPage({
        path,
        component: gcodeDetail,
        context: {
          slug: post.node.fields.slug,
          lang: post.node.frontmatter.lang,
        },
      })
    })
  }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
