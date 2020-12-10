import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
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
    if (values["paymentMethod"] === "transfer") {
      const redirUrl = langKey === "cs" ? "/cs/potvrzeni-objednavky/" : "/en/order-confirmation/"
      const params = new URLSearchParams()

      params.append("quantity", values.quantity)
      params.append("pillPrice", values.purchaseDetails.pillPrice)
      params.append("pillCurrency", values.purchaseDetails.pillVariant.currency)
      params.append("shippingPrice", values.purchaseDetails.shippingPrice)
      params.append("shippingCurrency", values.purchaseDetails.shippingVariant.currency)
      params.append("totalPrice", values.purchaseDetails.totalPrice)
      params.append("totalCurrency", values.purchaseDetails.pillVariant.currency)

      navigate(`${redirUrl}?${params.toString()}`)
    } else {
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

  }

  return (
    <>
      {!config.siteMetadata.checkout.octobatConfigured && (
        <div className="typeset">
          <p>
            <strong>Configure octobat!</strong>
          </p>
        </div>
      )}
      {config.siteMetadata.checkout.octobatConfigured && (
        <CheckoutForm
          onBuy={finalizeSession}
          contactEmail={config.siteMetadata.company.contactEmail}
          initialCountryCode={langKey === "cs" ? "CZ" : "US"}
          showStateField={langKey !== "cs"}
        />
      )}
    </>
  )
}

export default CheckoutBooth
