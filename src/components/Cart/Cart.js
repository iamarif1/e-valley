import React from 'react';

const Cart = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.cart}</h3>
        </div>
    );
};

export default Cart;