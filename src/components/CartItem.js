import React from "react";
import PropTypes from "prop-types";

function CartItem(props) {
  return(
    <>
      <div onClick = {() => props.onSelectingMerch(props.id)}>
        <h4>{props.name} - {props.description}</h4>
        <p>{props.cartQuantity} Available - Price: ${props.price}</p>
        <hr/>
      </div>
    </>
  );
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cartQuantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onSelectingMerch: PropTypes.func,
}

export default CartItem;