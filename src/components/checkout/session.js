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

    // store all shipping data under metadata keys prefixed by shipping:
    Object.keys(shippingAddress).forEach(key => {
      metadata[`shipping:${key}`] = shippingAddress[key]
    })

    // store all item data under metadata keys prefixed by order:
    items.forEach((item, index) => {
      metadata[`order:item_${index}`] = `${item.quantity}x ${item.name}`
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
