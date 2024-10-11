import React from 'react'
import CartIcon from '../assets/Icons/CartIcon.svg'
import styles from './shoppingcart.module.scss'


const ShippingCart = () => {
  return (
    <div className={styles.cart_icon}>
      <img src={CartIcon} alt="Cart Icon" />
    </div>
  )
}

export default ShippingCart