import React, { useState } from "react"
import { FormattedMessage } from "react-intl"

const PacketaPicker = () => {
  const Packeta  = window.Packeta;
  const packetaApiKey = '38d0ff9856b09ef3';
  const [pickupChosen, setPickupChosen] = useState(false)

  const showSelectedPickupPoint = (point) => {
    var spanElement = document.getElementById('packeta-point-info');
    var idElement = document.getElementById('packeta-point-id');

    if (point) {
      spanElement.innerText = point.place + "\n" +
        point.street + "\n" +
        point.zip + " " + point.city + "\n";

      setPickupChosen(true);
      idElement.value = point.id;
      } else {
        idElement.value = "";
      }
    };

  return (
    <>
      <input type="hidden" id="packeta-point-id" />
      <p>Karmen Pill doručujeme přes Zásilkovnu.</p>

      {pickupChosen ?
        <p>Vybrali jste si tohle místo k vyzvednutí zásilky:<br/><br/></p>
        :
        <p>Vyberte prosím místo pro vyzvednutí zásilky.</p>
      }
      <p id="packeta-point-info"></p>

      <button
        type="button"
        className="button button--sm button-mt"
        onClick={() => Packeta.Widget.pick(packetaApiKey, showSelectedPickupPoint)}
      >
        {pickupChosen ?
          <FormattedMessage
            id="checkoutform.cta_pickup_point_change"
            defaultMessage="Change pickup point"
          />
          :
          <FormattedMessage
            id="checkoutform.cta_pickup_point"
            defaultMessage="Select pickup point"
          />
        }
      </button>
    </>
  )
}

export default PacketaPicker;
