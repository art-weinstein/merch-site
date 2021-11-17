import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return(
    <>
      <h4>{props.name} - {props.description}</h4>
      <p>{props.quantity} Available - Price: ${props.price}</p>
    </>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
}

export default Merch;