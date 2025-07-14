import React from 'react'

const Trusted = () => {
  return (
    <div className='trusted'>
        <div className="container">
            <div className="trust d-flex flex-wrap gap-sm-4 gap-3 justify-content-center align-items-center">
                <span>Trusted by:</span>
                <img className='fb' src="./src/assets/facebook-icon.png" alt="Facebook-image" />
                <img src="./src/assets/google-icon.png" alt="Google-image" />
                <img src="./src/assets/netflix-icon.png" alt="Netflix-image" />
                <img className='pg' src="./src/assets/p&g-icon.png" alt="P&G-image" />
                <img src="./src/assets/paypal-icon.png" alt="PayPal-image" />
            </div>
        </div>
      
    </div>
  )
}

export default Trusted
