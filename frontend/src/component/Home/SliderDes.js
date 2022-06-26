import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import "./SliderDes.css"
import tv1 from "../../images/tv1.jpg"



function SliderDes({slider}) {
    return (
      <div className="desc_slider">
          <Carousel
          swipeable
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={5000}
          autoPlay={true}
          
      
          >
            
            {Object.entries(slider).map(([ida,{anuncio,image}])=>(
                <div key={ida} className="card_slider">
                    <img className="img_card_slider" loading="lazy" src={image} alt={anuncio} width={100} />
                    <div className="card_slider_info">
                        <p>{anuncio}</p>
                    </div>
                </div>
            ))} 
  
            
          </Carousel>
      </div>
    )
  }
  
  export default SliderDes