import React from "react"
import { FormattedMessage } from "react-intl"

const SubscriptionBox = () => {
  return (
    <div className="content-block content-block--sitenavwide content-block--shift-mobile">
      <div className="subscription-box">
        <div className="subscription-box__caption">
          <h1 className="subscription-box__title">
            <FormattedMessage
              id="subscription-box.main"
              defaultMessage="Subscribe to Karmen news"
            />
          </h1>
          <h2 className="subscription-box__subtitle">
            <FormattedMessage
              id="subscription-box.sub"
              defaultMessage="Stay in the loop"
            />
          </h2>
        </div>
        <div className="subscription-box__form">
          <form
            className="form"
            action="https://tech.us19.list-manage.com/subscribe/post?u=4dcf00156fa5e9a90c4bdda03&amp;id=b15800dd3b"
            method="POST"
            acceptCharset="UTF-8"
            target="_blank"
            noValidate
          >
            <fieldset className="form__line">
              <div className="form-control-wrapper form-control-wrapper--inline">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  className="form-control subscription-box__input"
                  type="email"
                  name="EMAIL"
                  placeholder="E-mail"
                />
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_4dcf00156fa5e9a90c4bdda03_b15800dd3b"
                    tabIndex="-1"
                    value=""
                    readOnly
                  />
                </div>
                <button className="button button--primaryToWhite" type="submit">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionBox
