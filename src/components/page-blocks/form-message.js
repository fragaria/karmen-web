import React from "react"

const FormMessage = props => {

  if (props.show) {
    if (props.success) {
      return (
        <div className="form-message success">
          Vaše zpráva byla úspěšně odeslána
        </div>
      )
    }
    return (
      <div className="form-message error">
        Omlouváme se. Vaši zprávu se nepodařilo odeslat.
      </div>
    )
  }
  return (
    <div></div>
  )
}
export default FormMessage
