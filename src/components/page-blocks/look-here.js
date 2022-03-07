import { Link } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"
import React from "react"

const LookHere = () => {
  const intl = useIntl()
  const contactLink = intl.locale === "cs" ? "/cs/kontakt" : "/en/contact"

  return (
    <div className="look-here">
      <h2 className="look-here__headline">
        <FormattedMessage
          id="look-here.headline"
          defaultMessage="Nejčastější dotazy shrnujeme v naší dokumentaci"
        />
      </h2>
      <div className="look-here__body">
        <p>
          <FormattedMessage
            id="look-here.body"
            defaultMessage="Prozkoumejte je, nebo nám napište."
            values={{ lineBreak: <br /> }}
          />
        </p>
      </div>
      <Link
        to={"https://docs.karmen.tech/#/faq"}
        className="button button--red button--mr button-mb"
      >
        <FormattedMessage
          id="look-here.doc"
          defaultMessage="Nejčastejší dotazy / FAQ"
        />
      </Link>
      <Link to={contactLink} className="button button--outlineBlack">
        <FormattedMessage id="look-here.contact" defaultMessage="Contact us" />
      </Link>
    </div>
  )
}

export default LookHere
