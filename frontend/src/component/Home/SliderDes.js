import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import "./SliderDes.css"
import tv1 from "../../images/tv1.jpg"



function Banner() {
    return (
      <div className="relative">
          <div className="sliderDes"/>
          <Carousel
          swipeable
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={5000}
          autoPlay={true}
          
      
          >
            <div className="container">
                <div className="imgSlider"> 
                    <img loading="lazy" src={tv1} alt="" />  
                </div> 
                <div className="textslider">
                    <p className="sliderTitle">Hisense Serie A4 TV inteligente FHD de 40 pulgadas</p>
                    <p className="sliderDesc">Resolución completa de alta definición: junto con su pantalla LCD de alta definición de 1080p, encontrarás una potente retroiluminación LED completa en el trabajo creando una imagen más nítida y colorida.</p>
                    <p className="sliderPrice">$400000</p>  
                    <Link to={`/product/628b22df32e7d825b492dcc2`}>
                        <button className="sliderBtn">Comprar</button>
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="imgSlider"> 
                    <img loading="lazy" src={tv1} alt="" />  
                </div> 
                <div className="textslider">
                    <p className="sliderTitle">Hisense Serie A4 TV inteligente FHD de 40 pulgadas</p>
                    <p className="sliderDesc">Resolución completa de alta definición: junto con su pantalla LCD de alta definición de 1080p, encontrarás una potente retroiluminación LED completa en el trabajo creando una imagen más nítida y colorida.</p>
                    <p className="sliderPrice">$400000</p>  
                    <Link to={`/product/628b22df32e7d825b492dcc2`}>
                        <button className="sliderBtn">Comprar</button>
                    </Link>
                </div>
            </div> 

            <div className="container">
                <div className="imgSlider"> 
                    <img loading="lazy" src={tv1} alt="" />  
                </div> 
                <div className="textslider">
                    <p className="sliderTitle">Hisense Serie A4 TV inteligente FHD de 40 pulgadas</p>
                    <p className="sliderDesc">Resolución completa de alta definición: junto con su pantalla LCD de alta definición de 1080p, encontrarás una potente retroiluminación LED completa en el trabajo creando una imagen más nítida y colorida.</p>
                    <p className="sliderPrice">$400000</p>  
                    <Link to={`/product/628b22df32e7d825b492dcc2`}>
                        <button className="sliderBtn">Comprar</button>
                    </Link>
                </div>
            </div> 

            <div className="container">
                <div className="imgSlider"> 
                    <img loading="lazy" src={tv1} alt="" />  
                </div> 
                <div className="textslider">
                    <p className="sliderTitle">Hisense Serie A4 TV inteligente FHD de 40 pulgadas</p>
                    <p className="sliderDesc">Resolución completa de alta definición: junto con su pantalla LCD de alta definición de 1080p, encontrarás una potente retroiluminación LED completa en el trabajo creando una imagen más nítida y colorida.</p>
                    <p className="sliderPrice">$400000</p>  
                    <Link to={`/product/628b22df32e7d825b492dcc2`}>
                        <button className="sliderBtn">Comprar</button>
                    </Link>
                </div>
            </div>  
  
            
          </Carousel>
      </div>
    )
  }
  
  export default Banner