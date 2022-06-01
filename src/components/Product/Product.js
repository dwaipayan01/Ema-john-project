import React from 'react';
import "./Product.css";
import { FaShoppingCart } from 'react-icons/fa';

const Product = (props) => {
    const { product, handleAddToCart } = props
    const { name, img, seller, ratings, price } = product;
    return (
        <div className='image'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='text-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller :{seller}</small></p>
                <p><small>Ratings : {ratings} star</small></p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => handleAddToCart(product)}>Add to cart <FaShoppingCart /></p>
            </button>

        </div>
    );
};

export default Product;