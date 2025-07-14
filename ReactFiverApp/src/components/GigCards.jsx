import React from 'react'
import {RiStarSFill , RiHeartFill} from '@remixicon/react';
import { Link } from 'react-router-dom';

const GigCards = ({item}) => {

    return (
        <Link to="/gig/123" className='text-decoration-none link'>
        <div className="gig-cards h-100">
            <figure>
                <img src= {item.img} alt={item.img} className='w-100 cover-image' />
            </figure>
            <div className='p-3 pt-0'>
                <div className='d-flex align-items-center gap-2'>
                    <img className='profile' src= {item.pp} alt={item.pp} />
                    <h5 className='text-dark'>{item.username}</h5>
                </div>

                <p className='m-0'>{item.desc} </p>
                <span className='rating d-flex align-items-center' ><RiStarSFill/>{item.star} </span>
            </div >
            <hr className='m-0' />
            <div className="py-1 px-3 d-flex align-items-center justify-content-between">
                <RiHeartFill className='heart'/>
                <p className='text-end m-0'>Starting AT <br /> <span>{item.price} <sup>99</sup></span></p>

            </div>
        </div>
         </Link>
    )
}

export default GigCards
