import {RiTwitterXLine , RiInstagramLine ,RiFacebookCircleFill ,RiLinkedinBoxFill ,RiPinterestFill} from '@remixicon/react';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
      <hr />
      <div className='py-4 d-flex align-items-center justify-content-around flex-column flex-lg-row gap-2'>

      <div className=" d-flex align-items-center gap-md-4 gap-2 ">
         <h3 className='fw-bold'>fiverr</h3>
         <p>&copy; fiverr International Ltd. 2023</p>
      </div>

      <div className='d-flex gap-sm-3 gap-2'>
        <a href="https://twitter.com/" target="_blank">
          <RiTwitterXLine className='icon'/>
        </a>
        <a href="https://instagram.com/" target="_blank">
          <RiInstagramLine className='icon'/>
        </a>
        <a href="https://facebook.com/" target="_blank">
          <RiFacebookCircleFill className='icon'/>
        </a>
        <a href="https://linkedin.com/" target="_blank">
          <RiLinkedinBoxFill className='icon'/>
        </a>
        <a href="https://pinterest.com/" target="_blank">
          <RiPinterestFill className='icon'/>
        </a>
      </div>
      
    </div>
  </div>
    </footer>


  )
}

export default Footer
