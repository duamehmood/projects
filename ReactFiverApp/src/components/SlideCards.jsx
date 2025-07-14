import React from 'react'
import { Link } from 'react-router-dom'


const SlideCards = ({item}) => {
  return (
    <Link to="/gigs/?cat=design">
    <div className='slide-cards mx-auto'>
        <img src={item.img} alt="{}item.img" />
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
      
    </div>
    </Link>
  )
}

export default SlideCards
