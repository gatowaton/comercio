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
import Destacados from "./destacados/Destacados";
import data from "../../data.json";

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
            <p>Free shipping for purchases over $100</p>
          </div>
          <div className="titulo">
            <h1>Cat Store </h1>
            <CatchingPokemonIcon style={{ fontSize: 60 }}/>

          </div>
          <Slider/>

          <h2 className="homeHeading">Featured Products</h2>

          <Destacados destacados={data.destacados}/>


          <h2 className="homeHeading">Products</h2>

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
