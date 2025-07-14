import "./Feature.css";
import { RiPlayFill } from "@remixicon/react";
import  {RiInformation2Line} from "@remixicon/react";

const Feature = ({type}) => {
  return (
    <div class name="featured"> 
         {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fanatsy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentry">Documentry</option>
            </select>
             
          </div>
         ) }
        <img width="100%" src="./src/assets/cinematicbg.jpg" alt="cinematicbg image" />

        <div className="info d-flex flex-column  mx-3">
        <img src="./src/assets/matrixHero.png" alt="matrixHero image" />
        <span className="decs my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet quae ipsa dolor consectetur laborum quidem perspiciatis sit id et! Magnam sed exercitationem ipsum veniam velit culpa ad error modi!
        </span>
        <div className="buttons py-3 d-flex gap-3"> "
           <button className="play">
            <RiPlayFill/>
            <span>Play</span>
           </button>
           <button className="more">
            <RiInformation2Line/>
            <span>info</span>
           </button>
        </div>
      </div>
         
    
      
    </div>
  )
}

export default Feature
