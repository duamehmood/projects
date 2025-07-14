import React from 'react'

const Bussiness = () => {
    return (
        <div className='bussiness'>
            <div className="container">
                <div className="row gy-lg-0 gy-5">
                    <div className="col-xl-5 col-lg-6 left ">
                        <h3>fiverr <span>business</span></h3>
                        <h2 className='py-3'>A business solution designed for <span>teams</span>
                        </h2>
                        <h5>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</h5>

                        <div className='py-4'>

                        <div className='d-flex align-items-center gap-3'>
                            <img src="./src/assets/check.png" alt="chechbox-image" />
                            <p>Connect to freelancers with proven business experience</p>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <img src="./src/assets/check.png" alt="chechbox-image" />
                            <p>Get matched with the perfect talent by a customer success manager
                            </p>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <img src="./src/assets/check.png" alt="chechbox-image" />
                            <p>Manage teamwork and boost productivity with one powerful workspace
                            </p>
                        </div>
                        </div>
                        <button className='px-lg-4 px-3 py-2 rounded'>Explore Fiverr Business</button>


                    </div>
                    <div className="col-xl-7 col-lg-6 d-flex align-items-center right">
                        <figure className='w-100'>
                            <img src="./src/assets/bussiness.webp" alt="Bussiness-image" />
                        </figure>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bussiness
