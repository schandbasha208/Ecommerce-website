import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className="shop-category"> 
     <img className="shop-category-banner" src={props.banner} alt="" />
     <div className="shop-category-indexsort">
      <p><span>showing 1-12</span> out of 20 products</p>
      <div className="shop-category-sort">
        sort by <img src={dropdown_icon} alt="" />
      </div>
     </div>
    <div className="shopcategory-products">
      {
        all_product.map((item,i)=> {
          if (props.category===item.category) {
          return (<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)
          }
          else {
            return null;
          }
          
        })
      }
    </div>
    <div className="shopcategory-loadmore">
      Explore More
    </div>
    </div>
  )
}

export default ShopCategory