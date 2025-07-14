
import React from 'react'
import { RiStarSFill, RiHeartFill } from '@remixicon/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine, RiThumbUpLine, RiThumbDownLine, RiTimeLine } from "@remixicon/react";


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


const Gig = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: []

  };

  return (
    <div className='gig'>
      <div className="container">
        <div className="row py-5 position-relative">
          <div className="col-lg-8 ">
            <span className='top pt-3'>fiverr &gt; Graphics &amp; Design &gt;</span>
            <h1 className='py-3'>I will create ai generated art for you</h1>

            <div className='d-flex align-items-center gap-2 pb-4'>
              <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile-image" className='profile' />
              <h5 className='mb-0'>Anna Bell</h5>
              <span className='rating d-flex align-items-center gap-1' ><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> 5 </span>
            </div>


            <Slider {...settings}>
              <figure className=' d-flex align-items-center justify-content-center'>
                <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="slider-image" className='image' />
              </figure>
              <figure className='d-flex justify-content-center align-items-center'>
                <img src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="slider-image" className='image' />
              </figure>
              <figure className='d-flex justify-content-center align-items-center'>
                <img src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="slider-image" className='image' />
              </figure>


            </Slider>

            <h2 className='pt-2 pb-3'>About This Gig</h2>
            <p>I use an AI program to create images based on text prompts. This means I can help you to create a vision you have through a textual description of your scene without requiring any reference images. Some things I've found it often excels at are: Character portraits (E.g. a picture to go with your DnD character) Landscapes (E.g. wallpapers, illustrations to compliment a story) Logos (E.g. Esports team, business, profile picture) You can be as vague or as descriptive as you want. Being more vague will allow the AI to be more creative which can sometimes result in some amazing images. You can also be incredibly precise if you have a clear image of what you want in mind. All of the images I create are original and will be found nowhere else. If you have any questions you're more than welcome to send me a message.</p>

            <h2 className='pt-5 pb-3'>About The Seller</h2>
            <div className="seller d-flex align-items-center gap-4 pb-5">
              <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pp-image" />
              <div >
                <h5 className='mb-0'>Anna Bell</h5>
                <span className='rating d-flex align-items-center gap-1 my-1' ><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> 5 </span>
                <button >Contact Me</button>
              </div>
            </div>

            <div className="box">
              <div className="m-0 d-flex justify-content-between">
                <div>
                  <span >From</span>
                  <h5 className='pb-3 pt-2'>USA</h5>
                  <span>Avg. response time</span>
                  <h5 className='pb-3 pt-2'>4 hour</h5>
                  <span>Languages</span>
                  <h5 className='pb-3 pt-2'>English</h5>
                </div>
                <div>
                  <span>Member since</span>
                  <h5 className='pb-3 pt-2'>August 2022</h5>
                  <span>Last delivery</span>
                  <h5 className='pt-2'>1 day</h5>
                </div>

              </div>

              <hr />
              <p>My name is Anna, I enjoy creating AI generated art in my spare time. I have a lot of experience using the AI program and that means I know what to prompt the AI with to get a great and incredibly detailed result.</p>
            </div>

            <div className="reviews pt-5">
              <h2>Reviews</h2>
              <div>
                <div className='d-flex align-items-center gap-3 pt-3'>
                  <img src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pp-image" className='reviews-pp' />
                  <div>
                    <h6 className='mb-0'>Garner David</h6>
                    <div className='d-flex align-items-center gap-2'>
                      <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="flag-image" className='flag' />
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                <span className='rating d-flex align-items-center gap-1 py-3' ><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> 5 </span>

                <p>I just want to say that art_with_ai was the first, and after this, the only artist Ill be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that Ill be using it again very very soon</p>

                <div className='d-flex align-items-center gap-2 py-3'>
                  <h5>Helpful?</h5>
                  <span><RiThumbUpLine size="32" className='px-2' />Yes</span>
                  <span><RiThumbDownLine size="32" className='px-2' />No</span>
                </div>

              </div>
              <hr />

              <div>
                <div className='d-flex align-items-center gap-3 pt-5'>
                  <img src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pp-image" className='reviews-pp' />
                  <div>
                    <h6 className='mb-0'>Sidney Owen</h6>
                    <div className='d-flex align-items-center gap-2'>
                      <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png" alt="flag-image" className='flag' />
                      <p>Germany</p>
                    </div>
                  </div>
                </div>
                <span className='rating d-flex align-items-center gap-1 py-3' ><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> 5 </span>

                <p>The designer took my photo for my book cover to the next level! Professionalism and ease of working with designer along with punctuality is above industry standards!! Whatever your project is, you need this designer!</p>

                <div className='d-flex align-items-center gap-2 py-3'>
                  <h5>Helpful?</h5>
                  <span><RiThumbUpLine size="32" className='px-2' />Yes</span>
                  <span><RiThumbDownLine size="32" className='px-2' />No</span>
                </div>

              </div>
              <hr />

              <div>
                <div className='d-flex align-items-center gap-3 pt-5'>
                  <img src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pp-image" className='reviews-pp' />
                  <div>
                    <h6 className='mb-0'>Lyle Giles</h6>
                    <div className='d-flex align-items-center gap-2'>
                      <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="flag-image" className='flag' />
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                <span className='rating d-flex align-items-center gap-1 py-3' ><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> 5 </span>

                <p>Amazing work! Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that Ill be using it again very very soon</p>

                <div className='d-flex align-items-center gap-2 py-3'>
                  <h5>Helpful?</h5>
                  <span><RiThumbUpLine size="32" className='px-2' />Yes</span>
                  <span><RiThumbDownLine size="32" className='px-2' />No</span>
                </div>

              </div>
            </div>

          </div>

          <div className="col-lg-4">
            <div className="right-side position-sticky">

              <div className="d-flex align-items-center justify-content-between pb-4">
                <h3>1 AI generated image</h3>
                <span>$ 59.99</span>
              </div>
              <p>I will create a unique high quality AI generated image based on a description that you give me</p>

              <div className='d-flex align-items-center justify-content-between pt-4'>

                <div className="d-flex align-items-center gap-2">
                  <RiTimeLine />
                  <span>2 Days Delivery</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <img src="/src/assets/cycle.png" alt="cycle-image" width="20px" />
                  <span>3 Revisions</span>
                </div>
              </div>

              <div className='d-flex align-items-center gap-3 pt-3 pb-1'>
                <img src="/src/assets/tick.png" alt="green-tick-image" className='g-tick' />
                <p>Prompt writing</p>
              </div>
              <div className='d-flex align-items-center gap-3 pb-1'>
                <img src="/src/assets/tick.png" alt="green-tick-image" className='g-tick' />
                <p>Artwork delivery</p>
              </div>
              <div className='d-flex align-items-center gap-3 pb-1'>
                <img src="/src/assets/tick.png" alt="green-tick-image" className='g-tick' />
                <p>Image upscaling</p>
              </div>
              <div className='d-flex align-items-center gap-3 pb-4'>
                <img src="/src/assets/tick.png" alt="green-tick-image" className='g-tick' />
                <p>Additional design</p>
              </div>

              <button>Continue</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Gig
