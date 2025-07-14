import "./List.css";
import {RiArrowDropLeftFill} from "@remixicon/react";
import {RiArrowDropRightFill} from "@remixicon/react";
import ListItem from "../listItems/ListItem";
import { useRef } from "react";
import { useState } from "react";

const List = () => {

    const [isMoved, setIsMoved] = useState(false)

    const [sliderNumber, setSliderNumber] = useState(0)

     const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
       if(direction === "left" && sliderNumber > 0){
            setSliderNumber(sliderNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
       if(direction === "right" && sliderNumber < 5){
            setSliderNumber(sliderNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
  return (
    <div className="list w-100 mt-2">
        <div className="list-title">
            Continue to Watch
        </div>
        <div className="wrapper">
            <RiArrowDropLeftFill className="sliderArrow left" onClick={()=>handleClick("left")} style={{display:!isMoved &&"none"}}/>
            <div className="containers d-flex gap-1 ms-5 mt-2" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
                
            </div>
            <RiArrowDropRightFill className="sliderArrow right" onClick={()=>handleClick("right")}/>


        </div>
      
    </div>
  )
}

export default List
