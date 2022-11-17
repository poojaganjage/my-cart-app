import React from 'react';
import {useGlobalContext} from '../context';
import CartItem from './CartItem';

function CartContainer() {
  const {cart, total, clearCart} = useGlobalContext();
  console.log(cart);
  if(cart.length === 0) {
    return (
        <section className='cart'>
            <header>
                <h2>Your wishlist</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>
    );
  }
  return (
    <section className='cart'>
        <header>
            <h2>Your wishlist</h2>
        </header>
        <div>
            {cart.map((item) => {
                return <CartItem key={item.id} {...item} />
            })}
        </div>
        <footer>
            <hr />
            <div className='cart-total'>
                <h4>Total<span>₹ {total * 75}</span></h4>
            </div>
            <button className='btn clear-btn' onClick={() => clearCart()}>Clear Cart</button>
        </footer>
    </section>
  );
}
export default CartContainer;
