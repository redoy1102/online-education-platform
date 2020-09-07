import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const count = props.count;
    const total = count.reduce((total,course) => total + course.Price ,0);
    return (
        <div className="cart-style" >
            <h1>Order Summery</h1>
            <h3>Total Course Added: {count.length} </h3>
            <p><strong>Total Price: ${total}</strong></p>
        </div>
    );
};

export default Cart;