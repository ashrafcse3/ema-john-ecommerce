import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const { handleAddToCart, product: { img, name, price, seller, ratings } } = props;

    return (
        <div className='product'>
            <img src={img ? img : 'data:,'} alt="" />
            <div className='product-info'>
                <h1 className='product-name'>{name}</h1>
                <h2 className='product-price'>Price: ${price}</h2>
                <div className='product-bottom-info'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} star</p>
                </div>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;