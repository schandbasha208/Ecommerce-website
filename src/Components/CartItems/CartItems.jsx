import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format">
                <img src={product.image} className="carticon-product-icon" alt={product.name} />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cartitems-quantity">{cartItems[product.id]}</button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img className='carticon-remove-icon' src={remove_icon} alt="" onClick={() => removeFromCart(product.id)} />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>cart total</h1>
          <div>
            <div className="cartItems-total-item">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cartItems-promocode">
          <p>If you have a promocode ,please enter here</p>
          <div className="cartItems-promobox">
            <input type="text" placeholder='enter promocode'/> 
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
