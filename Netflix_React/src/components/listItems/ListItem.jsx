import "./ListItem.css";
import { RiPlayLargeFill } from "@remixicon/react";
import { RiAddFill } from "@remixicon/react";
import { RiThumbUpFill } from "@remixicon/react";
import { RiThumbDownFill } from "@remixicon/react";
import { useState } from "react";

const ListItem = (index) => {
  const [isHovered, setIsHovered] = useState(true);

  // const trailer = "https://www.youtube.com/watch?v=uCYSV3iSjYo"

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 255 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(true)}
    >
      <img src="./src/assets/listitem.jpg" alt="GranTorino image" />
      {isHovered && (
        <div className="itemdetail">
          {/* <video src={trailer} autoplay={true} loop/> */}

          <div className="itemInfo d-flex flex-column p-3">
            <div className="icons d-flex gap-1 mb-2">
              <RiPlayLargeFill className="icon" />
              <RiAddFill className="icon" />
              <RiThumbUpFill className="icon" />
              <RiThumbDownFill className="icon" />
            </div>
            <div className="item-info-top d-flex align-items-center mb-1">
              <span>1 hour 15 mins</span>
              <span className="limit my-2">16+</span>
              <span>1999</span>
            </div>
            <div className="desc mb-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              maxime distinctio impedit nesciunt commodi neque similique
              officiis quis tempora labore molestiae, porro repudiandae ea
              saepe? Ducimus quia veniam beatae amet.
            </div>
            <div className="genre">Action</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
