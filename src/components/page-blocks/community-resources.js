import React from "react"
import { Link } from "gatsby"

const CommunityResources = ({ resources, site, location, ...props }) => {
  return (
    <section
      {...props}
      className="content-block content-block--move-up content-block--narrow content-block--shift-mobile"
    >
      <div className="v-community-resources-listing">
        {resources.map(({ frontmatter, html }) => {
          const isExternalLink = !frontmatter.link.startsWith("/")

          return (
            <article
              key={frontmatter.link}
              className="v-community-resources-listing__item"
            >
                <h2 className="v-community-resources-listing__item__headline">{frontmatter.title}</h2>
                <div className="v-community-resources-listing__item__html"
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                />
                <div className="v-community-resources-listing__item__link-wrap">
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
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default CommunityResources
