import React from 'react';
import Merch from './Merch';
import PropTypes from "prop-types";

function MerchList (props) {
  return(
    <React.Fragment>
      {props.merchList.map((merch) =>
        <Merch name={merch.name} 
          description={merch.description}
          quantity={merch.quantity}
          price={merch.price}
          id={merch.id}
          key={merch.id}
          onDeletingMerch={props.onDeletingMerch}
          onEditClick={props.onEditClick}
        />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onDeletingMerch: PropTypes.func,
  onEditClick: PropTypes.func,
}

export default MerchList;