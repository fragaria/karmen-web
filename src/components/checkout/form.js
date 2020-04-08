import React from "react"
import PropTypes from "prop-types"
import { Formik, Form, Field } from "formik"
import { FormattedMessage } from "react-intl"

import {
  PILL_VARIANTS,
  COUNTRIES,
  selectShippingVariant,
  getItemBySku,
} from "./config"

const CheckoutForm = ({ onBuy }) => (
  <Formik
    initialValues={{
      variant: PILL_VARIANTS[0].sku,
      quantity: 1,
      fullName: "",
      email: "",
      phone: "",
      company: "",
      line1: "",
      line2: "",
      postalCode: "",
      state: "",
      country: COUNTRIES[0].id,
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
      if (!values.line1) {
        errors.line1 = (
          <FormattedMessage
            id="checkoutform.error_missing_line1"
            defaultMessage="Please fill out street and house number of your residence."
          />
        )
      }
      if (!values.line2) {
        errors.line2 = (
          <FormattedMessage
            id="checkoutform.error_missing_line2"
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
    onSubmit={(values, { setSubmitting }) => onBuy(values)}
  >
    {({ isSubmitting, values }) => {
      const showAdapterWarning = values["variant"] === "karmen_pill_us_adapter"
      const pillVariant = getItemBySku(PILL_VARIANTS, values["variant"])
      const shippingVariant = selectShippingVariant(values["country"])

      const pillPrice = pillVariant.price * values["quantity"]
      const shippingPrice = shippingVariant.price
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
        ((meta.touched && meta.error && " form-control-wrapper--errored") || "")

      return (
        <Form>
          <h2>Buy Karmen</h2>
          <div className="form__line">
            <Field name="variant">
              {({ field, meta }) => (
                <>
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
                      {PILL_VARIANTS.map(variant => (
                        <option key={variant.sku} value={variant.sku}>
                          {variant.name}
                        </option>
                      ))}
                    </select>
                    {meta.touched && meta.error && (
                      <p className="form-control-error">{meta.error}</p>
                    )}
                    {showAdapterWarning && adapterWarningMsg}
                  </div>
                </>
              )}
            </Field>
          </div>
          <div className="form__line">
            <Field name="quantity">
              {({ field, meta }) => (
                <>
                  <label className="form-label" htmlFor="quantity">
                    <FormattedMessage
                      id="checkoutform.label_count"
                      defaultMessage="Count"
                    />
                  </label>
                  <div className={getClass("form-control-wrapper", meta)}>
                    <input
                      className="form-control"
                      type="number"
                      min="1"
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
          <h3>Adresa pro doručení</h3>
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
                    <input className="form-control" type="text" {...field} />
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
                    <input className="form-control" type="email" {...field} />
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
                    <input className="form-control" type="phone" {...field} />
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
                    <input className="form-control" type="text" {...field} />
                    {meta.touched && meta.error && (
                      <p className="form-control-error">{meta.error}</p>
                    )}
                  </div>
                </>
              )}
            </Field>
          </div>
          <div className="form__line">
            <Field name="line1">
              {({ field, meta }) => (
                <>
                  <label className="form-label" htmlFor="line1">
                    <FormattedMessage
                      id="checkoutform.label_line1"
                      defaultMessage="Street and house number"
                    />
                  </label>
                  <div className={getClass("form-control-wrapper", meta)}>
                    <input className="form-control" type="text" {...field} />
                    {meta.touched && meta.error && (
                      <p className="form-control-error">{meta.error}</p>
                    )}
                  </div>
                </>
              )}
            </Field>
          </div>
          <div className="form__line">
            <Field name="line2">
              {({ field, meta }) => (
                <>
                  <label className="form-label" htmlFor="line2">
                    <FormattedMessage
                      id="checkoutform.label_line2"
                      defaultMessage="City"
                    />
                  </label>
                  <div className={getClass("form-control-wrapper", meta)}>
                    <input className="form-control" type="text" {...field} />
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
                    <input className="form-control" type="text" {...field} />
                    {meta.touched && meta.error && (
                      <p className="form-control-error">{meta.error}</p>
                    )}
                  </div>
                </>
              )}
            </Field>
          </div>
          <div className="form__line">
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
                    <input className="form-control" type="text" {...field} />
                    {meta.touched && meta.error && (
                      <p className="form-control-error">{meta.error}</p>
                    )}
                  </div>
                </>
              )}
            </Field>
          </div>
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
                    <select className="form-control" {...field}>
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
          <hr />
          <div>
            <h2>Souhrn</h2>
            <p>
              {values["quantity"]}x Karmen Pill: {pillPrice} EUR bez DPH
            </p>
            <p>Doprava: {shippingPrice} EUR bez DPH</p>
            <p>Celkem: {totalPrice} EUR bez DPH</p>
          </div>
          <div className="form__submit">
            <p>
              <em>
                Po kliknutí na „Koupit“ budete přesměrování k pokladně.
                Fakturační údaje a stanovení výše DPH bude doplněno u pokladny.
              </em>
            </p>
            <button type="submit" className="button" disabled={isSubmitting}>
              <FormattedMessage
                id="checkoutform.cta_buy"
                defaultMessage="Buy"
              />
            </button>
          </div>
        </Form>
      )
    }}
  </Formik>
)

CheckoutForm.props = {
  onBuy: PropTypes.func.isRequired,
}

export default CheckoutForm
