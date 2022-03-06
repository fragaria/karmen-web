import React, { useState } from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"
import { connect, getIn } from 'formik';

const PacketaPicker = ({props}) => {
  const Packeta  = window.Packeta;
  const packetaApiKey = '38d0ff9856b09ef3';
  const [pickupChosen, setPickupChosen] = useState(false)

  const showSelectedPickupPoint = (point) => {
    var spanElement = document.getElementById('packeta-point-info');
    var inputElement = document.getElementsByName('packetaPoint')[0];

    if (point) {
      console.log("point", point)
      spanElement.innerText = point.place + "\n" +
        point.street + "\n" +
        point.zip + " " + point.city + "\n";

      setPickupChosen(true);
      inputElement.value = point.id;
      const packetaPoint = getIn(props.formik.packetaPoint, point.id);
      console.log("point set to ", point)
      return packetaPoint;
    } else {
        inputElement.value = "";
        console.log("point NONE")
    }
  };

  return (
    <>
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

PacketaPicker.props = {
  field: PropTypes.object.isRequired,
}


export default connect(PacketaPicker);
