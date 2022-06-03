import React from 'react';
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
    const { product, handleRemoveItem } = props;
    const { name, img, price, shipping } = product;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='details-container'>
                <div className="details-item" target={name}>
                    <p className='product-name'>{name.length > 20 ? name.slice(0, 20) + "..." : name}</p>
                    <p>Price:<span className='color'> ${price}</span></p>
                    <p>Shipping charge:<span className='color'>
                        ${shipping}</span></p>
                </div>
                <div className="delete-button">
                    <FontAwesomeIcon onClick={() => handleRemoveItem(product)} className=" delete-icon" icon={faTrashAlt}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;