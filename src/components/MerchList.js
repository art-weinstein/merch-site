import React from 'react';
import Merch from './Merch';
import PropTypes from "prop-types";

function MerchList (props) {
  return(
    <React.Fragment>
      {props.merchList.map((merch) =>
        <Merch name={merch.name} 
          descripton={merch.descriptions}
          quantity={merch.quantity}
          price={merch.price}
        />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
}

export default MerchList;