import React from 'react';
import {useGlobalContext} from '../context';

function CartItem({id, title, price, img, amount}) {
  const {remove, toggleAmount} = useGlobalContext();
  return (
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>₹ {price * 75}</h4>
            <button className='remove-btn' onClick={() => remove(id)}>Remove</button>
        </div>
        <div style={{display: 'flex'}}>
            <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
                <p style={{fontSize: '20px'}}>-</p>
            </button>
            <p className='amount'>{amount}</p>
            <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
                <p style={{fontSize: '20px'}}>+</p>
            </button>
        </div>
    </article>
  );
}
export default CartItem;
