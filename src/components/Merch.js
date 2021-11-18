import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  const handleDeletingMerch = (event) => {
    props.onDeletingMerch(event.target.value)
  }
  const handleEditClick = (event) => {
    props.onEditClick(event.target.value)
  }
  return(
    <>
      <h4>{props.name} - {props.description}</h4>
      <p>{props.quantity} Available - Price: ${props.price}</p>
      <button value={props.id} onClick={handleDeletingMerch}>Delete Item</button>
      <button value={props.id} onClick={handleEditClick}>Edit Item</button>
      <hr/>
    </>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onEditClick: PropTypes.func,
  onDeletingMerch: PropTypes.func
}

export default Merch;