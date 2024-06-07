import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../../Assets/star_icon.png';
import stardull_icon from '../../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-img">
          <img src={product.image} alt="" className="displaymain-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="prodcutdisplay-star-list">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={stardull_icon} alt="" />
          <p>(105)</p>
        </div>
        <div className="productdisplay-prices">
          <div className="productdisplay-old_price">${product.old_price}</div>
          <div className="productdisplay-new_price">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, knitted pullover shirt close fitting and with a round neckline and shorts sleeve , warn as an under shirt or outer garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>select size</h1>
          <div className="display-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p><span>Category:</span> Women, T-shirt, Crop-top</p>
        <p><span>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
