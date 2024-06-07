import React from 'react'
import './Breadcrums.css'
import breadcrum_arrow from '../../Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
  const {product} = props
  return (
    <div className="breadcrum">
      Home <img src={breadcrum_arrow} alt="" /> Shop <img src={breadcrum_arrow} alt="" /> {product.category} <img src={breadcrum_arrow} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums