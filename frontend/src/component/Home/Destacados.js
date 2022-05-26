import React from 'react'
import { Link } from 'react-router-dom';
import sp2 from "../../images/sp2.jpg"
import tv1 from "../../images/tv1.jpg"
import tv2 from "../../images/tv2.jpg"
import tv3 from "../../images/tv3.jpg"
import "./Destacados.css";

function Destacados() {
  return (
    <div className="container">
    <Link className="destacado" to={`/product/628b22df32e7d825b492dcc2`}>
      <img src={sp2} alt="" />
      <p>OnePlus 8 Glacial Green,​ 5G Desbloqueado Android Smartphone Versión EE.UU., 8 GB de RAM + 128 GB</p>
      <span className='productPrice'>$200000</span>
    </Link>
    <Link className="destacado" to={`/product/628b04f244d6be12f0aa6661`}>
      <img src={tv1} alt="" />
      <p>OnePlus 8 Glacial Green,​ 5G Desbloqueado Android Smartphone Versión EE.UU., 8 GB de RAM + 128 GB</p>
      <span className='productPrice'>$200000</span>
    </Link>
    <Link className="destacado" to={`/product/628b1b5632e7d825b492dbf7`}>
      <img src={tv2} alt="" />
      <p>OnePlus 8 Glacial Green,​ 5G Desbloqueado Android Smartphone Versión EE.UU., 8 GB de RAM + 128 GB</p>
      <span className='productPrice'>$200000</span>
    </Link>
    <Link className="destacado" to={`/product/628b1d0432e7d825b492dc74`}>
      <img src={tv3} alt="" />
      <p>OnePlus 8 Glacial Green,​ 5G Desbloqueado Android Smartphone Versión EE.UU., 8 GB de RAM + 128 GB</p>
      <span className='productPrice'>$200000</span>
    </Link>
       

  </div>
  )
}

export default Destacados