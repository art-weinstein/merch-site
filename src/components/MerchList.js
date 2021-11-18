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
          onSelectingMerch={props.onSelectingMerch}
        />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onSelectingMerch: PropTypes.func,
}

export default MerchList;