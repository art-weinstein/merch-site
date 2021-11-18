import React from 'react';
import CartItem from './CartItem';
import PropTypes from "prop-types";

function Cart (props) {
  return(
    <React.Fragment>
      <hr/>
      <h2>Shopping Cart</h2>
      {props.cart.map((merch) =>
        <CartItem name={merch.name} 
          description={merch.description}
          cartQuantity={merch.cartQuantity}
          price={merch.price}
          id={merch.id}
          key={merch.id}
          onSelectingMerch={props.onSelectingMerch}
        />
      )}
    </React.Fragment>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  onSelectingMerch: PropTypes.func,
}

export default Cart;