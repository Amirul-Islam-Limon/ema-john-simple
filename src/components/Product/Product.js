import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCartPlus} from '@fortawesome/free-solid-svg-icons';

const Product = ({handleAddToCart, product}) => {
    const {img, name, seller, price, ratings}= product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p>Price : ${price}</p>
            <div className='product-info'>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='cart-button'>
                <p onClick={()=>handleAddToCart(product)}>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;