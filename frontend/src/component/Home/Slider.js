import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../images/slider1.png"
import slider2 from "../../images/slider2.png"
import slider3 from "../../images/slider3.png"
import React from 'react'
import { Link } from "react-router-dom";
import "./Slider.css"

function Banner() {
  return (
    <div className="relative">
        <div className="slider"/>
        <Carousel
        swipeable
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        autoPlay={true}
        
    
        >
           <div>
           <img loading="lazy" src={slider3}alt="" />
              
           </div> 

           <Link to={`/product/628b22df32e7d825b492dcc2`}>
           <div> 
             <a href="/product/628b22df32e7d825b492dcc2">
             <img loading="lazy" src={slider2} alt="" />
               </a>   
           </div> 
           </Link>

           <div>
           <img loading="lazy" src={slider1} alt="" />
           </div> 

        </Carousel>
    </div>
  )
}

export default Banner