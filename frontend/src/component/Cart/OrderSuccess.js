import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Tu Orden se a enviado exitosamente</Typography>
      <Link to="/orders">Ver Ordenes</Link>
    </div>
  );
};

export default OrderSuccess;
