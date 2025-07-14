
import {RiSearchLine} from '@remixicon/react';

const Features = () => {
  return (
    <div className='features'>
        <div className="box">
            <div className="container">
                <div className="row">
                <div className="col-lg-8 col-md-7 d-flex left justify-content-center flex-column px-3">
                    <h1>Find the perfect <span>freelance </span> services for your business</h1>
                    <div className="search d-sm-flex">

                        <div className="input">
                            <RiSearchLine className='search-icon'/>
                            <input type="text" placeholder='Try "building mobil app"' />
                        </div>
                        <button className='btn'>Search</button>
                    </div>
                    <div className="popular d-flex gap-3">
                        <span>Popular:</span>
                        <div className='d-flex gap-3 flex-wrap'>
                        <button className=' rounded-pill'>Web Design</button>
                        <button className=' rounded-pill'>WordPress</button>
                        <button className=' rounded-pill'>Logo Design</button>
                        <button className=' rounded-pill'>AI Services</button>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-lg-end align-items-center">
                    <figure className='w-100 m-0'>
                    <img src="./src/assets/fiver-hero.png" alt="hero-image" />
                    </figure>


                </div>
            </div>
            </div>

        </div>
      
    </div>
  )
}

export default Features
