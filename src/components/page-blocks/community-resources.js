import React from "react"
import { Link } from "gatsby"

const CommunityResources = ({ resources, site, location, ...props }) => {
  return (
    <section
      {...props}
      className="content-block content-block--narrow content-block--shift-mobile"
    >
      <div className="v-community-resources-listing">
        {resources.map(({ frontmatter, html }) => {
          const isExternalLink = !frontmatter.link.startsWith("/")

          return (
            <article
              key={frontmatter.link}
              className="v-community-resources-listing__item"
            >
              <h2>{frontmatter.title}</h2>
              {isExternalLink && (
                <a
                  href={frontmatter.link}
                  className="v-community-resources-listing-link anchor anchor--default"
                >
                  {frontmatter.linkTitle}
                </a>
              )}
              {!isExternalLink && (
                <Link
                  style={{ boxShadow: `none` }}
                  to={frontmatter.link}
                  className="v-community-resources-listing-link anchor anchor--default"
                >
                  {frontmatter.linkTitle}
                </Link>
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default CommunityResources
