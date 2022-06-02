import React from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    let total = 0;
    let Shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        Shipping = Shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + Shipping + tax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Item:{quantity}</p>
            <p>Total price : ${total}</p>
            <p>Total Shipping :${Shipping}</p>
            <p>Tax :{tax}</p>
            <h5>Grand Total :{grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;