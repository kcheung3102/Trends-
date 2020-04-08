import React from 'react';
import { connect } from 'react-redux';

 function Cart({cartProps}) {
     console.log(cartProps);
    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}

const mapStatesToProps = state => ({
    cartProps: state.cartState
  });

export default connect (mapStatesToProps)(Cart);
