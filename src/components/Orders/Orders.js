import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import "./Orders.css";

const Orders = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const handleRemoveItem = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className='Item-container'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
            </div>
            <div className='order-container'>
                <Cart cart={cart}><Link to="/checkout"><button className='clear-button' style={{ background: "#FF9900" }}>Proceed checkout <BsReverseLayoutTextSidebarReverse /></button> </Link></Cart>

            </div>
        </div>
    );
};

export default Orders;