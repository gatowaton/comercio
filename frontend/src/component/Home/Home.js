import React, { Fragment, useEffect} from "react";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import  Slider from "./Slider";
import  SliderDes from "./SliderDes";
import Destacados from "./Destacados";

const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="anuncio">
            <p>Envio gratis por compras sobre $20.000</p>
          </div>
          <div className="titulo">
            <h1>Cat Store </h1>
            <CatchingPokemonIcon style={{ fontSize: 60 }}/>

          </div>
          <Slider/>

          <h2 className="homeHeading">Productos Destacados</h2>

          <Destacados/>

          <SliderDes/>


          <h2 className="homeHeading">Productos</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
              
          </div>
        
        </Fragment>
        
        
      )}
    </Fragment>
  );
};

export default Home;
