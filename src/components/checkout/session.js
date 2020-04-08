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
  finalize({ prefillData, items }) {
    const beanie = window.OctobatBeanie(octobatApiKey)

    beanie.redirectToBeanie({
      items,
      successUrl,
      cancelUrl,
      configurationId: octobatBeanieConfigurationId,
      prefillData,
    })
  },
})
