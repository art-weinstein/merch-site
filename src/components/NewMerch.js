import {v4} from 'uuid'
import PropTypes from 'prop-types'
import React from 'react'

export default function NewMerch (props) {
  //handler
  const handleSubmit = (event) => {
    event.preventDefault()
    //call a handler from props
    props.onNewMerchCreation({
      id: v4(),
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      price: parseInt(event.target.price.value),
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="description" placeholder="Description" />
      <input type="number" name="quantity" placeholder="Quantity" />
      <input type="number" name="price" placeholder="Price" />
      <button>Add</button>
    </form>
  )
}
NewMerch.propTypes = {
  onNewMerchCreation: PropTypes.func
}

//name
//description
//quantity
//price