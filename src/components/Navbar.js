import React from 'react';
import {useGlobalContext} from '../context';
import Bag from '../media/icons/bag.svg';

function Navbar() {
  const {amount} = useGlobalContext();
  return (
    <nav>
      <div className='nav-center'>
        <h3>HotDeals</h3>
        <div className='nav-container'>
          <img src={Bag} alt='bag' />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
