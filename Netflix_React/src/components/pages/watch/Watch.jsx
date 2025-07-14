 import "./Watch.css";
 import {RiArrowLeftDownFill} from "@remixicon/react";



const Watch = () => {
  return (
    <div className="watch">
        <div className="back d-flex align-items-center">
            <RiArrowLeftDownFill/>
            Home
        </div>
        <video className="video" autoplay progress controls src="./src/assets/table.mp4"/> 
      
    </div>
  )
}

export default Watch
