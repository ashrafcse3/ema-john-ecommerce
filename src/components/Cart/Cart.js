import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faRightLong } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div className='cart'>
            <h4 className='cart-summary'>Order summary</h4>
            <div className='cart-all-info'>
                <div className='cart-info'>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: $1140</p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax: $114</p>
                </div>
                <p className='grand-total'>Grand Total: $1559</p>
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