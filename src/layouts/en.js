import React from "react"

import DefaultLayout from "./default"

import en from "translations/en"

export default (props) => (
  <DefaultLayout {...props} i18nMessages={en} />
)
