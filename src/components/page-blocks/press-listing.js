import React from "react"
import { Link } from "gatsby"

import karmenLogo from "assets/img/karmen-logo-social-media.png"


const PressListing = ({ posts, site, location, ...props }) => {

  return (
    <article itemType="http://schema.org/Organization" itemScope>
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

      <section {...props}>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const link = "/" + node.frontmatter.lang + "/press" + node.fields.slug.replace(/en\/|cs\//gi, '')
          return (
            <article key={node.fields.slug} className="v-press-post content-block content-block--narrower">
              <Link style={{ boxShadow: `none` }} to={link}>
                <h3>
                    {title}
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </Link>
            </article>
          )
        })}

      </section>
    </article>
  )
}

export default PressListing
