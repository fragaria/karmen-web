import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentLangKey } from "ptz-i18n"

import { CheckoutSession } from "./session"
import CheckoutForm from "./form"
import { selectShippingVariant } from "./config"

const CheckoutBooth = () => {
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

  const finalizeSession = async values => {
    if (config.siteMetadata.checkout.octobatConfigured) {
      const { langs, defaultLangKey } = config.siteMetadata.languages
      const langKey = getCurrentLangKey(
        langs,
        defaultLangKey,
        window.location.pathname
      )

      const successUrl = langKey === "cs" ? "/cs/zaplaceno/" : "/en/paid/"
      const cancelUrl =
        langKey === "cs" ? "/cs/platba-zrusena/" : "/en/payment-cancelled/"

      const session = CheckoutSession({
        octobatApiKey: config.siteMetadata.checkout.octobatApiKey,
        octobatBeanieConfigurationId:
          config.siteMetadata.checkout.octobatBeanieConfigurationId,
        successUrl: config.siteMetadata.siteUrl + successUrl,
        cancelUrl: config.siteMetadata.checkout.cancelUrl + cancelUrl,
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

  return <CheckoutForm onBuy={finalizeSession} />
}

export default CheckoutBooth
