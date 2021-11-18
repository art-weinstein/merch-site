import React from "react";
import PropTypes from "prop-types"

export default function EditMerch (props) {
  //handler
  const handleSubmit = (event) => {
    event.preventDefault()
    //call a handler from props
    props.onEditingMerch({
      id: props.merch.id,
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      price: parseInt(event.target.price.value),
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder={props.merch.name} />
      <input type="text" name="description" placeholder={props.merch.description} />
      <input type="number" name="quantity" placeholder={props.merch.quantity} />
      <input type="number" name="price" placeholder={props.merch.price} />
      <button>Edit Merch</button>
    </form>
  )
}
EditMerch.propTypes = {
  onEditingMerch: PropTypes.func,
  merch: PropTypes.object,
}