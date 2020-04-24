import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "react-intl"

import { CheckoutSession } from "./session"
import CheckoutForm from "./form"
import { selectShippingVariant } from "./config"

const CheckoutBooth = () => {
  const { site: config } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          company {
            contactEmail
          }
          checkout {
            octobatConfigured
            octobatApiKey
            octobatBeanieConfigurationId
          }
        }
      }
    }
  `)

  const intl = useIntl()
  const langKey = intl.locale

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
        clientReferenceId: values["email"],
        items: [
          {
            sku: values["product"].sku,
            name: values["product"].name,
            quantity: values["quantity"],
          },
          { sku: shippingVariant.sku, name: shippingVariant.name, quantity: 1 },
        ],
        prefillData: {
          customer_name: values["fullName"],
          customer_email: values["email"],
        },
        shippingAddress: {
          fullName: values["fullName"],
          company: values["company"],
          email: values["email"],
          phone: values["phone"],
          line1: values["street"],
          line2: values["city"],
          state: values["state"],
          postalCode: values["postalCode"],
          country: values["country"],
        },
      })
    } else {
      console.error("Octobat integration not configured")
    }
  }

  return (
    <CheckoutForm
      onBuy={finalizeSession}
      contactEmail={config.siteMetadata.company.contactEmail}
      initialCountryCode={langKey === "cs" ? "CZ" : "US"}
      showStateField={langKey !== "cs"}
    />
  )
}

export default CheckoutBooth
