import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentLangKey } from "ptz-i18n"

import { CheckoutSession } from "./session"
import CheckoutForm from "./form"
import { selectShippingVariant } from "./config"

const CheckoutBooth = ({ location }) => {
  const { site: config } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          checkout {
            octobatConfigured
            octobatApiKey
            octobatBeanieConfigurationId
          }
          ...Languages
        }
      }
    }
  `)

  const { langs, defaultLangKey } = config.siteMetadata.languages
  const langKey = getCurrentLangKey(
    langs,
    defaultLangKey,
    window.location.pathname
  )

  const finalizeSession = async values => {
    if (config.siteMetadata.checkout.octobatConfigured) {
      const successUrl = langKey === "cs" ? "/cs/zaplaceno/" : "/en/paid/"
      const cancelUrl =
        langKey === "cs" ? "/cs/platba-zrusena/" : "/en/payment-cancelled/"

      const session = CheckoutSession({
        octobatApiKey: config.siteMetadata.checkout.octobatApiKey,
        octobatBeanieConfigurationId:
          config.siteMetadata.checkout.octobatBeanieConfigurationId,
        successUrl: config.siteMetadata.siteUrl + successUrl,
        cancelUrl: config.siteMetadata.siteUrl + cancelUrl,
      })
      const shippingVariant = selectShippingVariant(values["country"])

      session.finalize({
        items: [
          { sku: values["variant"], quantity: values["quantity"] },
          { sku: shippingVariant.sku, quantity: 1 },
        ],
        prefillData: {
          customer_name: values["fullName"],
          customer_email: values["email"],
        },
      })
    } else {
      console.error("Octobat integration not configured")
    }
  }

  return (
    <CheckoutForm
      onBuy={finalizeSession}
      initialCountryCode={langKey === "cs" ? "CZ" : "US"}
    />
  )
}

CheckoutBooth.propTypes = {
  location: PropTypes.object.isRequired,
}

export default CheckoutBooth
