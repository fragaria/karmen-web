import React from "react";
// import ReactDOM from 'react-dom';
// import {GCodeViewer} from "react-gcode-viewer";


import { Link } from "gatsby"

import karmenLogo from "assets/img/karmen-logo-social-media.png"

const GcodesListing = ({ list, site, location, ...props }) => {

  const url = "https://storage.googleapis.com/ucloud-v3/6127a7f9aa32f718b8c1ab4f.gcode"

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
          return (
            <div
              className="v-gcode"
              key={node.fields.slug}
            >
              <Link style={{ boxShadow: `none` }} to={link}>
              {/* <GCodeViewer
                  orbitControls
                  showAxes
                  url={'/gcodes/' + node.frontmatter.gcode + '.stl'}
              /> */}
                <img className="image" src="https://user-images.githubusercontent.com/461650/133330840-d11e4681-e265-45d0-b1d9-633ef285d972.png" />
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
