import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faRightLong } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (total * 10 / 100).toFixed(2);
    const grandTotal = total + totalShipping + parseFloat(tax);

    return (
        <div className='cart'>
            <h4 className='cart-summary'>Order summary</h4>
            <div className='cart-all-info'>
                <div className='cart-info'>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping Charge: ${totalShipping}</p>
                    <p>Tax: ${tax}</p>
                </div>
                <p className='grand-total'>Grand Total: ${grandTotal}</p>
            </div>
            <div className='cart-buttons'>
                <button className='clear-cart-button'>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <br></br>
                <button className='review-order-button'>
                    <p>Review Order</p>
                    <FontAwesomeIcon icon={faRightLong} />
                </button>
            </div>

        </div>
    );
};

export default Cart;