export const CheckoutSession = ({ octobatApiKey, octobatBeanieConfigurationId }) => ({
  beanie: null,
  /**
   * Load all products (Pill and shipping variants)
   */
  initialize() {
    this.beanie = window.OctobatBeanie(octobatApiKey)
  },
  /**
   * Redirect customer to the checkout page
   */
  finalize({ prefillData, items }) {
    this.beanie.redirectToBeanie({
      items,
      successUrl: "https://karmen.tech",
      cancelUrl: "https://karmen.tech",
      configurationId: octobatBeanieConfigurationId,
      prefillData
    })
  }
})
