import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Footer = () => {
  return (
    <div className="footer">
      <h1>Cat Store </h1>
      <CatchingPokemonIcon style={{ fontSize: 60 }}/>
      <p>Copyrights 2022 &copy; Gato Web Developer.</p>
    </div>
  );
};

export default Footer;
