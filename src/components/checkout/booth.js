import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { useIntl } from "react-intl"

import { CheckoutSession } from "./session"
import CheckoutForm from "./form"
import { selectShippingVariant } from "./config"

const sendOrderConfirmation = async (functionRoot, context) => {
  await fetch(`${functionRoot}.netlify/functions/send-order-confirmation`, {
    method: "POST",
    body: JSON.stringify(context),
  })
}

const sendOrderNotification = async (functionRoot, context) => {
  await fetch(`${functionRoot}.netlify/functions/send-order-notification`, {
    method: "POST",
    body: JSON.stringify(context),
  })
}

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
          functions {
            rootUrl
          }
        }
      }
    }
  `)

  const intl = useIntl()
  const langKey = intl.locale

  const finalizeSession = async values => {
    const purchaseDetails = {
      quantity: values.quantity,
      pillPrice: values.purchaseDetails.pillPrice,
      pillCurrency: values.purchaseDetails.pillVariant.currency,
      shippingPrice: values.purchaseDetails.shippingPrice,
      shippingCurrency: values.purchaseDetails.shippingVariant.currency,
      totalPrice: values.purchaseDetails.totalPrice,
      totalCurrency: values.purchaseDetails.pillVariant.currency,
      osType: values.purchaseDetails.osType,
      printerType: values.purchaseDetails.printerType,
    }

    const emailContext = {
      email: values.email,
      phone: values.phone,
      lang: langKey,
      name: values.fullName,
      company: values.company,
      vatId: values.vatId,
      street: values.street,
      city: values.city,
      postalCode: values.postalCode,
      state: values.state,
      paymentMethod: values.paymentMethod,
      country: values.country,
      pillVariant: values.product.name,
      delivery: values.delivery,
      packetaPoint: values.packetaPoint,
      ...purchaseDetails,
    }

    await Promise.all([
      sendOrderConfirmation(
        config.siteMetadata.functions.rootUrl,
        emailContext
      ),
      sendOrderNotification(
        config.siteMetadata.functions.rootUrl,
        emailContext
      ),
    ])

    if (values["paymentMethod"] === "transfer") {
      const redirUrl =
        langKey === "cs"
          ? "/cs/potvrzeni-objednavky/"
          : "/en/order-confirmation/"
      const params = new URLSearchParams()

      for (const [key, value] of Object.entries(purchaseDetails)) {
        params.append(key, value)
      }

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
            {
              sku: shippingVariant.sku,
              name: shippingVariant.name,
              quantity: 1,
            },
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
