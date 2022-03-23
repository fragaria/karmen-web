import React from 'react'
import { Link } from "gatsby"

import karmenLogo from "assets/img/karmen-logo-social-media.png"

const GcodesListing = ({ list, site, location, ...props }) => {
  return (
    <article
      className="content-block content-block--narrow"
      itemType="http://schema.org/Organization"
      itemScope
    >
      <span
        itemProp="logo"
        itemType="http://schema.org/ImageObject"
        itemScope
        className="hidden"
      >
        <meta itemProp="caption" content={site.siteMetadata.title} />
        <meta itemProp="url" content={karmenLogo} />
        <meta itemProp="width" content="1000" />
        <meta itemProp="height" content="1000" />
      </span>
      <meta itemProp="url" content={site.siteMetadata.siteUrl} />

      <section {...props} className="v-gcodes-listing">
        {list.edges.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const link =
            "/" +
            node.frontmatter.lang +
            "/gcodes/" +
            node.fields.slug.replace(/\/(en|cs)\//gi, "")
          console.log(node.frontmatter.cover)
          return (
            <div
              className="v-gcode"
              key={node.fields.slug}
            >
              <Link style={{ boxShadow: `none` }} to={link}>
                <img className="image" src={node.frontmatter.cover} alt={node.frontmatter.title} />
                <h3>{title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </Link>
            </div>
          )
        })}
      </section>
    </article>
  )
}

export default GcodesListing
