import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;

    for(const product of cart){
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        tax = +(total * .1).toFixed(2);
        grandTotal = total + shipping + tax;
        quantity = quantity + product.quantity;
        
    }
    
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax} </p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;