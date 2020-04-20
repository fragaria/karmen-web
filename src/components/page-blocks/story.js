import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"

const StoryBlock = props => {
  return (
    <section {...props}>
      <div className="story">
        <div className="story__story story-box">
          <h1>
            <FormattedMessage id="story-block.karmen_story" defaultMessage="Karmen story" />
          </h1>
          <p>
            <FormattedMessage id="story-block.karmen_story_full" defaultMessage="Řešení Karmen se snaží cílit na jednotlivce s typicky jednou domácí 3D tiskárnou, stejně tak na firmy a organizace s více 3D tiskárnami." />
          </p>
          <Link class="button button--red" to="/en/about/"><FormattedMessage id="story-block.karmen_story_link" defaultMessage="See full story" /></Link>
        </div>
        <div className="story__team story-box">
          <h1>
            <FormattedMessage id="story-block.karmen_team" defaultMessage="Karmen team" />
          </h1>
          </div>
        <div className="story__contact story-box">
          <h1>
            <FormattedMessage id="story-block.contact_us" defaultMessage="Contact us" />
          </h1>
        </div>
      </div>
    </section>
  )
}

export default StoryBlock

