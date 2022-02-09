import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Formik, Form, Field } from "formik"
import { FormattedMessage, defineMessages, useIntl } from "react-intl"

import fbTrack from "./fb-track"

import {
  PILLS,
  PILL_SKUS,
  COUNTRIES,
  OS_TYPE,
  PRINTER_TYPE,
  selectShippingVariant,
  getPillRefSku,
  getItemByProp,
} from "./config"

import PriceSummary from "./price-summary"
import PriceTotal from "./price-total"

const getPurchaseDetails = values => {
  const currentCountry = values["country"]

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

  return {
    pillRef,
    pillSku,
    pillVariant,
    shippingVariant,
    pillPrice,
    shippingPrice,
    totalPrice,
  }
}

export const messages = defineMessages({
  priceNote: {
    id: "checkoutform.price_note",
    defaultMessage: "excl. VAT",
  },
  paymentMethodCard: {
    id: "checkoutform.payment_method_card",
    defaultMessage: "Online by card",
  },
  paymentMethodTransfer: {
    id: "checkoutform.payment_method_transfer",
    defaultMessage: "Bank transfer",
  },
  printerTypeOther: {
    id: "checkoutform.label_printer_type_other",
    defaultMessage: "Other printer type",
  },
})

const CheckoutForm = ({
  contactEmail,
  onBuy,
  initialCountryCode,
  showStateField = true,
}) => {
  const onSubmit = (values, { setSubmitting }) => {
    const retVals = { ...values }
    const purchaseDetails = getPurchaseDetails(values)

    retVals["product"] = {
      name: purchaseDetails.pillRef.name,
      sku: purchaseDetails.pillSku,
    }

    // Drop internal variant reference
    delete retVals["variant"]

    // Append extended purchase details for order summary use
    retVals["purchaseDetails"] = getPurchaseDetails(values);

    const trackValues = {
      currency: retVals["purchaseDetails"]["pillVariant"].currency,
      value: retVals["purchaseDetails"]["pillVariant"].price
    }

    fbTrack('track', 'Purchase', trackValues)
    onBuy(retVals)
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
        vatId: "",
        // buyAsCompany: false,
        street: "",
        city: "",
        postalCode: "",
        state: "",
        paymentMethod: "card",
        country: initialCountryCode,
        printerType: "END",
        printerTypeOther: "",
        osType: "WIN",
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
      {({ isSubmitting, isValid, values, setFieldValue }) => {
        const selectedPaymentMethod = values["paymentMethod"]

        const {
          pillVariant,
          shippingVariant,
          pillPrice,
          shippingPrice,
          totalPrice,
        } = getPurchaseDetails(values)

        const getClass = (base, meta) =>
          base +
          ((meta.touched && meta.error && " form-control-wrapper--errored") ||
            "")

        const incQuantity = evt => {
          evt.preventDefault()
          setFieldValue("quantity", values.quantity + 1)
        }

        const decQuantity = evt => {
          evt.preventDefault()
          setFieldValue("quantity", Math.max(1, values.quantity - 1))
        }

        const submitClass = classNames("button button--red", {
          "button--loading": isSubmitting,
        })

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
                      <div className="checkout-form__quantity-field-row">
                        <button className="minus" onClick={decQuantity}>
                          -
                        </button>
                        <input
                          className="form-control"
                          type="number"
                          min="1"
                          {...field}
                        />
                        <button className="plus" onClick={incQuantity}>
                          +
                        </button>
                      </div>
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
                          defaultMessage="Company name (optional)"
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
                <Field name="vatId">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="vatId">
                        <FormattedMessage
                          id="checkoutform.label_vat_id"
                          defaultMessage="Company Tax Number (optional)"
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
              {/* <div className="form__line">
                <Field name="buyAsCompany">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="company">
                        <FormattedMessage
                          id="checkoutform.label_buy_as_company"
                          defaultMessage="Buy as company (Add company's VAT number)"
                        />
                      </label>
                      <div className={getClass("form-control-wrapper", meta)}>
                        <input
                          className="form-control form-control--bordered"
                          type="checkbox"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div> */}
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
              {showStateField && (
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
              )}
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
              <div className="form__line">
                <Field name="paymentMethod">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="paymentMethod">
                        <FormattedMessage
                          id="checkoutform.label_payment_method"
                          defaultMessage="Payment method"
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
                          <option value="card">
                            {intl.formatMessage(messages.paymentMethodCard)}
                          </option>
                          <option value="transfer">
                            {intl.formatMessage(messages.paymentMethodTransfer)}
                          </option>
                        </select>
                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>

              <div className="form__line">
                <Field name="printerType">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="printerType">
                        <FormattedMessage
                          id="checkoutform.label_printer_type"
                          defaultMessage="Printer type"
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
                          {PRINTER_TYPE.map(printer => (
                            <option key={printer.id} value={printer.id}>
                              {printer.name}
                            </option>
                          ))}
                          <option value="OTHER">
                            {intl.formatMessage(messages.printerTypeOther)}
                          </option>
                        </select>

                        {meta.touched && meta.error && (
                          <p className="form-control-error">{meta.error}</p>
                        )}
                      </div>
                    </>
                  )}
                </Field>
              </div>

              {values["printerType"] === "OTHER" && (
                <div className="form__line">
                  <Field name="printerTypeOther">
                    {({ field, meta }) => (
                      <>
                        <label className="form-label" htmlFor="printerTypeOther">
                          <FormattedMessage
                            id="checkoutform.label_printer_type_other"
                            defaultMessage="Other printer type"
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
              )}

              <div className="form__line">
                <Field name="osType">
                  {({ field, meta }) => (
                    <>
                      <label className="form-label" htmlFor="osType">
                        <FormattedMessage
                          id="checkoutform.label_os_type"
                          defaultMessage="Operating system"
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
                          {OS_TYPE.map(os => (
                            <option key={os.id} value={os.id}>
                              {os.name}
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
              <PriceSummary
                pillQuantity={values["quantity"]}
                pillPrice={pillPrice}
                pillCurrency={pillVariant.currency}
                shippingPrice={shippingPrice}
                shippingCurrency={shippingVariant.currency}
              />
            </div>
            <div className="checkout-form__body checkout-form__body--wdivider">
              <PriceTotal
                totalPrice={totalPrice}
                totalCurrency={pillVariant.currency}
              />
            </div>
            <div className="checkout-form__body checkout-form__body--wdivider">
              {/* <div className="typeset">
                <p className="checkout-form__corona-warning">
                  <FormattedMessage
                    id="checkoutform.corona_warning"
                    defaultMessage="<strong>Important note:</strong> Due to complications related to the coronavirus outbreak, order delivery might be delayed. Please <a>contact us</a> for up-to-date information about current expected delivery time."
                    values={{
                      strong: (...chunks) => <strong>{chunks}</strong>,
                      a: (...chunks) => (
                        <a
                          className="anchor--emphasized"
                          href={`mailto:${contactEmail}`}
                        >
                          {chunks}
                        </a>
                      ),
                    }}
                  />
                </p>
              </div> */}
              <div className="checkout-form__submit">
                <p>
                  <em>
                    {selectedPaymentMethod === "card" && (
                      <FormattedMessage
                        id="checkoutform.cta_note_card"
                        defaultMessage={`You will be redirected to the checkout page after clicking on "Buy". VAT amount as well as billing details will be resolved there.`}
                      />
                    )}
                    {selectedPaymentMethod === "transfer" && (
                      <FormattedMessage
                        id="checkoutform.cta_note_transfer"
                        defaultMessage={`We will send you payment instructions by email.`}
                      />
                    )}
                  </em>
                </p>
                <button
                  type="submit"
                  className={submitClass}
                  disabled={isSubmitting || !isValid}
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
  contactEmail: PropTypes.string.isRequired,
  onBuy: PropTypes.func.isRequired,
  initialCountryCode: PropTypes.string,
  showStateField: PropTypes.bool,
}

CheckoutForm.defaultProps = {
  initialCountryCode: "US",
}

export default CheckoutForm
