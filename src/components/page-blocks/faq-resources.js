import React from "react"
import FaqItem from "components/page-blocks/faq-item"

const FaqResources = ({ resources, site, location, ...props }) => {
  return (
    <section
      {...props}
      className="content-block content-block--narrower content-block--shift-mobile"
    >
      <div className="v-faq-resources-listing">
        {resources.map((resource, index) => (
          <FaqItem key={index} resources={resource} />
        ))}
      </div>
    </section>
  )
}

export default FaqResources
