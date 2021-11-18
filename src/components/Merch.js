import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return(
    <>
      <div onClick = {() => props.onSelectingMerch(props.id)}>
        <h4>{props.name} - {props.description}</h4>
        <p>{props.quantity} Available - Price: ${props.price}</p>
        <hr/>
      </div>
    </>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onSelectingMerch: PropTypes.func,
}

export default Merch;