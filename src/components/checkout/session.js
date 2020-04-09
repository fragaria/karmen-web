/**
 * Simple checkout sesion that will redirect to Octobat Beanie simple checkout
 * page.
 */
export const CheckoutSession = ({
  octobatApiKey,
  octobatBeanieConfigurationId,
  successUrl,
  cancelUrl,
}) => ({
  /**
   * Redirect customer to the checkout page
   */
  finalize({ clientReferenceId, prefillData, items, shippingAddress }) {
    const beanie = window.OctobatBeanie(octobatApiKey)

    const metadata = {}

    // store all shipping data under metadata keys prefixed by shipping_
    Object.keys(shippingAddress).forEach(key => {
      metadata[`shipping_${key}`] = shippingAddress[key]
    })

    beanie.redirectToBeanie({
      items,
      successUrl,
      cancelUrl,
      configurationId: octobatBeanieConfigurationId,
      clientReferenceId,
      prefillData,
      metadata,
    })
  },
})
