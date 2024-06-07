import React, { createContext, useState } from 'react';
import all_product from '../Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  all_product.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
};

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0 }));
  };
  const getTotalCartAmount =() => {
    let TotalAmount=0;
    for (const item in cartItems) {
      if (cartItems[item]>0) {
        let ItemInfo=all_product.find((product)=>product.id===Number(item))
        TotalAmount+=ItemInfo.new_price*cartItems[item]
      }
      
    }
    return TotalAmount;
  }
  const getTotalCartItems =()=> {
    let TotalItem=0;
    for (const item in cartItems) {
      if (cartItems[item]>0) {
        TotalItem+=cartItems[item]
      }
      
    }
    return TotalItem;
   
  }
  const contextValue = { getTotalCartItems, getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ContextProvider;
