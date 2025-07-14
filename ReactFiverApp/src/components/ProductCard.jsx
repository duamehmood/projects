import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({item}) => {
     console.log(item); 
  return (
    <Link to="/" className='text-decoration-none '>
    <div className='product-card mx-auto'>
        <img src={item.img} alt={item.img} />
        <div className="user-info d-flex align-items-center gap-3 p-3">
            <img className='pp' src={item.pp} alt="user-profile" />
        <div className="user-details">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
        </div>
        </div>
         
      
    </div>
    </Link>
  )
}

export default ProductCard
