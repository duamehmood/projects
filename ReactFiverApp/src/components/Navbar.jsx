
import { useState, useEffect } from 'react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive] = useState(true)
  const [open, setOpen] = useState(false)

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);

    }
  }, [])

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true
  }

  return (

    <nav
      className={`navbar d-flex flex-column align-items-center${active || pathname !== "/" ? " active" : ""}`}>

      <div className="container">


        <div className="box d-flex align-items-center justify-content-sm-between justify-content-around">

          {/* ---Logo--- */}
          <div className="logo fw-bold">
            <Link to='/' className=' link text-decoration-none'>
              <span className="text">fiverr</span>
            </Link>
            <span className='dot'>.</span>
          </div>

          {/* ---Links--- */}
          <div className="links d-flex align items-center fw-bold gap-4">
            <div className='d-none d-lg-flex align-items-center gap-4'>
              <span>Fiverr Bussiness</span>
              <span>Explore</span>
              <span>English</span>
              <span>Sign in</span>
              {!currentUser?.isSeller && <span>Become a Seller</span>}
              {!currentUser && <button>Join</button>}
            </div>

            {/* ---User section--- */}
            {currentUser &&
              <div className="user d-flex align-items-center gap-3" onClick={() => setOpen(!open)}>
                <img src="./src/assets/nav-image.webp" alt="user-nav-Image" />
                <span>{currentUser?.username}</span>
                {open &&
                  <div className="options d-flex flex-column gap-2">
                    {
                      currentUser?.isSeller && (
                        <>
                          <Link to="/mygigs" className='link text-decoration-none'><span>Gigs</span></Link>
                          <Link to="/add" className='link text-decoration-none'><span> Add New Gig</span></Link>
                        </>
                      )
                    }
                    <Link to="/orders" className='link text-decoration-none'><span>Orders</span></Link>
                    <Link to="/messages" className='link text-decoration-none'><span>Messages</span></Link>
                    <Link to="/" className='link text-decoration-none'><span>Logout</span></Link>
                  </div>}
              </div>
            }
          </div>
        </div>

        {(active || pathname !== "/") && (
          <>
            <hr />
            <div className="menu d-flex align-items-center justify-content-center flex-wrap gap-3">
              <span>Graphics & Design</span>
              <span>Video & Animation</span>
              <span>Writing & Translation</span>
              <span>AI Services </span>
              <span>Digital Marketing</span>
              <span>Music & Audio</span>
              <span>Programming & Tech </span>
              <span>Consulting </span>
              <span>Photgraphy</span>
              <span>Bussiness</span>
              <span>Life Style</span>

            </div>
          </>)
        }

    </div>
    </nav >
  )
}

export default Navbar
