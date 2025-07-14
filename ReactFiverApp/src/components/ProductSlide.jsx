import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "@remixicon/react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={style}
      onClick={onClick}
    >
      <RiArrowRightCircleLine size={40} color="maroon" className='right' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={style}
      onClick={onClick}
    >
      <RiArrowLeftCircleLine size={40} color="maroon" className='left' />
    </div>
  );
}


const ProductSlide = ({ children }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      },

    ]

  };

  return (
    <div className="container">
      <div className='product-slide d-flex justify-content-center align-items-center'>
        <div className="box">
          <Slider {...settings}>
            {children}
          </Slider>

        </div>
      </div>
    </div>
  )
}

export default ProductSlide
