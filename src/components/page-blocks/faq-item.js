import React, { useState, useRef } from "react"

const FaqItem = ({ resources, site, location, ...props }) => {
  const [active, setActive] = useState(false)
  const [setHeight, setHeightState] = useState("0px")
  const { frontmatter, html } = resources
  const content = useRef(null)

  const toggleItem = evt => {
    evt.preventDefault()
    setActive(!active)
    setHeightState(
      active === true ? "0px" : `${content.current.scrollHeight}px`
    )
  }

  return (
    <article className={"v-faq-resources__item " + (active ? "active" : "")}>
      <div className="v-faq-resources__item__header" role="tab" onClick={toggleItem}>
        <h2 className="v-faq-resources__item__headline">{frontmatter.title}</h2>
        <div
          className={
            "v-faq-resources__item__button " + (active ? "active" : "")
          }
        ></div>
      </div>
      <div
        className="v-faq-resources__item__content"
        ref={content}
        aria-expanded={active}
        style={{ maxHeight: `${setHeight}` }}
      >
        <div
          className="v-faq-resources__item__content__inner"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </article>
  )
}

export default FaqItem
