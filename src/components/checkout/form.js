import React from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field } from "formik"
import { FormattedMessage, defineMessages, useIntl } from "react-intl"

import {
  PILLS,
  PILL_SKUS,
  COUNTRIES,
  selectShippingVariant,
  getPillRefSku,
  getItemByProp,
} from "./config"

const messages = defineMessages({
  priceNote: {
    id: "checkoutform.price_note",
    defaultMessage: "excl. VAT",
  },
})

const CheckoutForm = ({ onBuy, initialCountryCode, showStateField = true }) => {
  const onSubmit = (values, { setSubmitting }) => {
    const retVals = { ...values }
    // Get Pill config by its id
    const pillRef = getItemByProp(PILLS, "id", retVals["variant"])

    retVals["product"] = {
      // Provide full Pill name
      name: pillRef.name,
      // Select right SKU according to the country used
      sku: getPillRefSku(pillRef, retVals["country"]),
    }

    // Drop internal variant reference
    delete retVals["variant"]

    setSubmitting(true)

    return onBuy(retVals)
  }

  const intl = useIntl()

  return (
    <Formik
      initialValues={{
        variant: PILLS[0].id,
        quantity: 1,
        fullName: "",
        email: "",
        phone: "",
        company: "",
        street: "",
        city: "",
        postalCode: "",
        state: "",
        country: initialCountryCode,
      }}
      validate={values => {
        const errors = {}

        if (!values.fullName) {
          errors.fullName = (
            <FormattedMessage
              id="checkoutform.error_missing_name"
              defaultMessage="Please fill out your name."
            />
          )
        }
        if (!values.phone) {
          errors.phone = (
            <FormattedMessage
              id="checkoutform.error_missing_phone"
              defaultMessage="Please fill out your phone number."
            />
          )
        }
        if (!values.email) {
          errors.email = (
            <FormattedMessage
              id="checkoutform.error_missing_email"
              defaultMessage="Please fill out your email address."
            />
          )
        }
        if (
          values.email &&
          !values.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          errors.email = (
            <FormattedMessage
              id="checkoutform.error_invalid_email"
              defaultMessage="Please fill out a valid email address."
            />
          )
        }
        if (!values.street) {
          errors.street = (
            <FormattedMessage
              id="checkoutform.error_missing_street"
              defaultMessage="Please fill out street and house number of your residence."
            />
          )
        }
        if (!values.city) {
          errors.city = (
            <FormattedMessage
              id="checkoutform.error_missing_city"
              defaultMessage="Please fill out the city."
            />
          )
        }
        if (!values.postalCode) {
          errors.postalCode = (
            <FormattedMessage
              id="checkoutform.error_missing_postal_code"
              defaultMessage="Please fill out your postal code."
            />
          )
        }

        return errors
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }) => {
        const currentCountry = values["country"]
        const showAdapterWarning = values["variant"] === "pill_us"

        // Get Pill config by its id
        const pillRef = getItemByProp(PILLS, "id", values["variant"])
        // Select right SKU according to the country used
        const pillSku = getPillRefSku(pillRef, currentCountry)
        // Get pill variant config (currency + price) by the sku
        const pillVariant = getItemByProp(PILL_SKUS, "sku", pillSku)
        // Shipping variant according to selected country
        const shippingVariant = selectShippingVariant(values["country"])
        // Total pill price (multiplied by quantity) excl. VAT
        const pillPrice = pillVariant.price * values["quantity"]
        // Total shipping price
        const shippingPrice = shippingVariant.price
        // Total price (pill + shipping)
        const totalPrice = pillPrice + shippingPrice

        const adapterWarningMsg = (
          <FormattedMessage
            id="checkoutform.us_adapters_out_of_stock"
            defaultMessage="<em>Please note that US adapters are currently out-of-stock and allow for a bit longer delivery time.</em>"
            values={{
              em: (...chunks) => (
                <p>
                  <em>{chunks}</em>
                </p>
              ),
            }}
          />
        )

        const getClass = (base, meta) =>
          base +
          ((meta.touched && meta.error && " form-control-wrapper--errored") ||
            "")

        return (
          <Form className="checkout-form">
            <div className="form__multiline checkout-form__variant checkout-form__body">
              <Field name="variant">
                {({ field, meta }) => (
                  <div className="form__field">
                    <label className="form-label" htmlFor="variant">
                      <FormattedMessage
                        id="checkoutform.label_variant"
                        defaultMessage="Variant"
                      />
                    </label>
                    <div
                      className={getClass(
                        "form-control-wrapper form-control-wrapper--select",
                        meta
                      )}
                    >
                      <select className="form-control" {...field}>
                        {PILLS.map(variant => (
                          <option key={variant.id} value={variant.id}>
                            {variant.name}
                          </option>
                        ))}
                      </select>
                      {meta.touched && meta.error && (
                        <p className="form-control-error">{meta.error}</p>
                      )}
                      {showAdapterWarning && adapterWarningMsg}
                    </div>
                  </div>
                )}
              </Field>
              <Field name="quantity">
                {({ field, meta }) => (
                  <div className="form__field checkout-form__quantity-field">
                    <label className="form-label" htmlFor="quantity">
                      <FormattedMessage
                        id="checkoutform.label_count"
                        defaultMessage="Count"
                      />
                    </label>
                    <div className={getClass("form-control-wrapper", meta)}>
                      <input
                        className="form-control form-control--bordered"
                        type="number"
                        min="1"
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <p className="form-control-error">{meta.error}</p>
                      )}
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div className="checkout-form__body">
              <h2>
                <FormattedMessage
                  id="checkoutform.shipping_address"
                  defaultMessage="Shipping address"
                />
              </h2>
              <div className="form__line">
                <Field name="fullName">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="fullName">
                        <FormattedMessage
                          id="checkoutform.label_full_name"
                          defaultMessage="Your full name"
                        />
                      </label>
                      <div className={getClass("form-control-wrapper", meta)}>
                        <input
                          className="form-control form-control--bordered"
                          type="text"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>
              <div className="form__line">
                <Field name="email">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="email">
                        <FormattedMessage
                          id="checkoutform.label_email"
                          defaultMessage="Your email"
                        />
                      </label>
                      <div className={getClass("form-control-wrapper", meta)}>
                        <input
                          className="form-control form-control--bordered"
                          type="email"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>
              <div className="form__line">
                <Field name="phone">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="phone">
                        <FormattedMessage
                          id="checkoutform.label_phone"
                          defaultMessage="Your phone"
                        />
                      </label>
                      <div className={getClass("form-control-wrapper", meta)}>
                        <input
                          className="form-control form-control--bordered"
                          type="phone"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>
              <div className="form__line">
                <Field name="company">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="company">
                        <FormattedMessage
                          id="checkoutform.label_company"
                          defaultMessage="Company name"
                        />
                      </label>
                      <div className={getClass("form-control-wrapper", meta)}>
                        <input
                          className="form-control form-control--bordered"
                          type="text"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>
              <div className="form__line">
                <Field name="street">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="street">
                        <FormattedMessage
                          id="checkoutform.label_street"
                          defaultMessage="Street and house number"
                        />
                      </label>
                      <div className={getClass("form-control-wrapper", meta)}>
                        <input
                          className="form-control form-control--bordered"
                          type="text"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>
              <div className="form__line">
                <Field name="city">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="city">
                        <FormattedMessage
                          id="checkoutform.label_city"
                          defaultMessage="City"
                        />
                      </label>
                      <div className={getClass("form-control-wrapper", meta)}>
                        <input
                          className="form-control form-control--bordered"
                          type="text"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>
              <div className="form__line">
                <Field name="postalCode">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="postalCode">
                        <FormattedMessage
                          id="checkoutform.label_postal_code"
                          defaultMessage="Postal code"
                        />
                      </label>
                      <div className={getClass("form-control-wrapper", meta)}>
                        <input
                          className="form-control form-control--bordered"
                          type="text"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>
              {showStateField && <div className="form__line">
                <Field name="state">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="state">
                        <FormattedMessage
                          id="checkoutform.label_state"
                          defaultMessage="State"
                        />
                      </label>
                      <div className={getClass("form-control-wrapper", meta)}>
                        <input
                          className="form-control form-control--bordered"
                          type="text"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>
              }
              <div className="form__line">
                <Field name="country">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="country">
                        <FormattedMessage
                          id="checkoutform.label_country"
                          defaultMessage="Country"
                        />
                      </label>
                      <div
                        className={getClass(
                          "form-control-wrapper form-control-wrapper--select",
                          meta
                        )}
                      >
                        <select
                          className="form-control form-control--bordered"
                          {...field}
                        >
                          {COUNTRIES.map(country => (
                            <option key={country.id} value={country.id}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>
            </div>
            <div className="checkout-form__body checkout-form__body--wdivider">
              <h2>
                <FormattedMessage
                  id="checkoutform.summary"
                  defaultMessage="Summary"
                />
              </h2>
              <div className="checkout-form__summary-line">
                <h3 className="checkout-form__summary-item">
                  {values["quantity"]}x Karmen Pill:
                </h3>
                <div className="checkout-form__summary-price">
                  <span className="checkout-form__summary-price-main">
                    {pillPrice} {pillVariant.currency}
                  </span>
                  <span className="checkout-form__summary-price-note">
                    {intl.formatMessage(messages.priceNote)}
                  </span>
                </div>
              </div>
              <div className="checkout-form__summary-line">
                <h3 className="checkout-form__summary-item">
                  <FormattedMessage
                    id="checkoutform.shipping"
                    defaultMessage="Shipping:"
                  />
                </h3>
                <div className="checkout-form__summary-price">
                  <span className="checkout-form__summary-price-main">
                    {shippingPrice} {shippingVariant.currency}
                  </span>
                  <span className="checkout-form__summary-price-note">
                    {intl.formatMessage(messages.priceNote)}
                  </span>
                </div>
              </div>
            </div>
            <div className="checkout-form__body checkout-form__body--wdivider">
              <div className="checkout-form__summary-line checkout-form__summary-line--total">
                <h3 className="checkout-form__summary-item">
                  <FormattedMessage
                    id="checkoutform.total"
                    defaultMessage="Total:"
                  />
                </h3>
                <div className="checkout-form__summary-price">
                  <span className="checkout-form__summary-price-main">
                    {totalPrice} {pillVariant.currency}
                  </span>
                  <span className="checkout-form__summary-price-note">
                    {intl.formatMessage(messages.priceNote)}
                  </span>
                </div>
              </div>
            </div>
            <div className="checkout-form__body checkout-form__body--wdivider">
              <div className="checkout-form__submit">
                <p>
                  <em>
                    <FormattedMessage
                      id="checkoutform.cta_note"
                      defaultMessage={`You will be redirected to the checkout page after clicking on "Buy". VAT amount as well as billing details will be resolved there.`}
                    />
                  </em>
                </p>
                <button
                  type="submit"
                  className="button button--red"
                  disabled={isSubmitting}
                >
                  <FormattedMessage
                    id="checkoutform.cta_buy"
                    defaultMessage="Buy"
                  />
                </button>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

CheckoutForm.props = {
  onBuy: PropTypes.func.isRequired,
  initialCountryCode: PropTypes.string,
  showStateField: PropTypes.bool,
}

CheckoutForm.defaultProps = {
  initialCountryCode: "US",
}

export default CheckoutForm
