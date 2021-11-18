import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props){
  const {merch} = props;
  const handleDeletingMerch = (event) => {
    props.onDeletingMerch(event.target.value)
  }
  const handleEditClick = (event) => {
    props.onEditClick(event.target.value)
  }
  return (
    <>
      <h1>Merch Details</h1>
      <h3>{merch.name} - {merch.description} - {merch.quantity} - {merch.price}</h3>
      <hr/>
      <button value={merch.id} onClick={handleDeletingMerch}>Delete Item</button>
      <button value={merch.id} onClick={handleEditClick}>Edit Item</button>
    </>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onDeletingMerch: PropTypes.func,
  onEditClick: PropTypes.func,
};

export default MerchDetail;

