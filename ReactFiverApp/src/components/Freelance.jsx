import React from 'react'

const Freelance = () => {
    return (
        <div className='freelance'>
            <div className="container">
                <div className="row gy-lg-0 gy-5">
                    <div className="col-xl-5 col-lg-6 left ">
                        <h2>A whole world of freelance talent at your fingertips</h2>
                        <div className="mb-3 mt-4">
                        <div className='d-flex align-items-center gap-3 pb-2'>
                            <img src="./src/assets/check.png" alt="checkbox-imge" />
                            <h4>The best for every budget</h4>
                        </div>
                        <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                        </div>
                        
                        <div className='d-flex align-items-center gap-3 pb-2'>
                            <img src="./src/assets/check.png" alt="checkbox-imge" />
                            <h4>Quality work done quickly</h4>
                        </div>
                        <p>Find the right freelancer to begin working on your project within minutes.</p>

                        <div className="my-3">
                        <div className='d-flex align-items-center gap-3 pb-2'>
                            <img src="./src/assets/check.png" alt="checkbox-imge" />
                            <h4>Protected payments, every timet</h4>
                        </div>
                        <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                        </div>

                        <div className='d-flex align-items-center gap-3 pb-2'>
                            <img src="./src/assets/check.png" alt="checkbox-imge" />
                            <h4>24/7 support
                            </h4>
                        </div>
                        <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>

                    </div>
                    <div className="col-xl-7 col-lg-6 d-flex align-items-xl-center p-xl-4">
                        <video src="./src/assets/table.mp4" width="100%" controls className=''></video>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Freelance
