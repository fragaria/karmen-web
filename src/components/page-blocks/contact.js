import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { defineMessages, FormattedMessage, useIntl } from "react-intl"

import { Formik, Form, Field } from "formik"

import Social from "../social"

const messages = defineMessages({
  formName: {
    id: "contact-block.form_name",
    defaultMessage: "Your name",
  },
  formEmail: {
    id: "contact-block.form_email",
    defaultMessage: "Your e-mail",
  },
  formMessage: {
    id: "contact-block.form_message",
    defaultMessage: "Content of the message",
  },
})

const ContactBlock = props => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          company {
            phone
            contactEmail
          }
          functions {
            rootUrl
          }
        }
      }
    }
  `)

  const intl = useIntl()

  const sendMessage = async (functionRoot, context) => {
    await fetch(`${functionRoot}.netlify/functions/send-contact-form-message`, {
      method: "POST",
      body: JSON.stringify(context),
    })
  }

  const onSubmit = async values => {
    await sendMessage(data.site.siteMetadata.functions.rootUrl, {...values, lang: intl.locale});
  }

  const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = <FormattedMessage id="checkoutform.error_missing_name" />
    }

    if (!values.email) {
      errors.email = <FormattedMessage id="checkoutform.error_missing_email" />
    }
    if (
      values.email &&
      !values.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      errors.email = <FormattedMessage id="checkoutform.error_invalid_email" />
    }

    if (!values.message) {
      errors.message = (
        <FormattedMessage
          id="contact-block.form_error_message"
          defaultMessage="Please fill out the message."
        />
      )
    }

    return errors
  }

  return (
    <div className="contact-page content-block">
      <section {...props}>
        <h1 className="contact__headline">
          <FormattedMessage
            id="contact-block.title"
            defaultMessage="Contact form"
          />
        </h1>
        <div className="contact">
          <div className="contact__column">
            <div className="contact__form">
              <Formik
                validate={validate}
                initialValues={{
                  email: "",
                  name: "",
                  message: "",
                }}
                onSubmit={onSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <div className="form__field">
                      <Field
                        className="form-control form-control--small form-control--grey"
                        placeholder={intl.formatMessage(messages.formName)}
                        type="text"
                        id="name"
                        name="name"
                      />
                      <div className="form__field-error">
                        {touched.name && errors.name && (
                          <div>{errors.name}</div>
                        )}
                      </div>
                    </div>
                    <div className="form__field">
                      <Field
                        className="form-control form-control--small form-control--grey"
                        placeholder={intl.formatMessage(messages.formEmail)}
                        type="email"
                        id="email"
                        name="email"
                      />
                      <div className="form__field-error">
                        {touched.email && errors.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="form__field">
                      <Field
                        as="textarea"
                        className="form-control form-control--small form-control--grey"
                        placeholder={intl.formatMessage(messages.formMessage)}
                        type="message"
                        id="message"
                        name="message"
                      />
                      <div className="form__field-error">
                        {touched.message && errors.message && (
                          <div>{errors.message}</div>
                        )}
                      </div>
                    </div>
                    <div className="form__field"></div>
                    <button
                      className="button button--red"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <FormattedMessage
                        id="contact-block.send_button"
                        defaultMessage="Send"
                      />
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="contact__column contact-box-wrap">
            <div className="contact-box">
              <h2>
                <FormattedMessage
                  id="contact-block.contact_us"
                  defaultMessage="Nebo nás kontaktujte přímo"
                />
              </h2>
              <ul className="list list--unstyled list--adress">
                <li>
                  <a
                    className="anchor anchor--emphasized"
                    href={`mailto:${data.site.siteMetadata.company.contactEmail}`}
                  >
                    {data.site.siteMetadata.company.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    className="anchor anchor--emphasized"
                    href={`tel:${data.site.siteMetadata.company.phone}`}
                  >
                    {data.site.siteMetadata.company.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-box">
              <h2>
                <FormattedMessage
                  id="contact-block.karmen_adress_headline"
                  defaultMessage="Adresa společnosti"
                />
              </h2>
              <ul className="list list--unstyled list--adress">
                <li>Fragaria s.r.o.</li>
                <li>Ječná 507/6</li>
                <li>120 00 Praha 2</li>
                <li>
                  <FormattedMessage
                    id="contact-block.karmen_adress_cz"
                    defaultMessage="Česká republika"
                  />
                </li>
              </ul>
            </div>
            <div className="contact-box">
              <h2>
                <FormattedMessage
                  id="contact-block.karmen_watch_us"
                  defaultMessage="Sledujte nás"
                />
              </h2>
              <Social class="social--red" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactBlock
