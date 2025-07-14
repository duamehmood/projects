import './Navbar.css';
import { RiSearchLine } from '@remixicon/react';  
import { RiNotification2Line } from '@remixicon/react';
import { RiArrowDownSFill } from '@remixicon/react';
import { useState } from 'react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="src/assets/logo.svg" alt="Netflix-logo" />
          <span className='ms-5'>Home page</span>
          <span className='ms-3'>Series</span>
          <span className='ms-3'>Movies</span>
          <span className='ms-3'>New and Popular</span>
          <span className='ms-3'>My List</span>
        </div>
        <div className="right d-flex align-items-center">
        <div>
        <RiSearchLine size={24} className='mx-3'/>
        <span>KID</span>
        <RiNotification2Line className='mx-3'/>
        <img src="./src/assets/panda.jpg" alt="Panda image"/>
        </div>
        <div className="profile">
        <RiArrowDownSFill className='mx-3'/>
        <div className="options p-3">
          <span className='pb-2'>Settings</span>
          <span>Logout</span>
           
        </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
