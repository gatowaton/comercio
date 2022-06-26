import React from 'react'
import { Link } from 'react-router-dom';
import "./Destacados.css";

function Destacados({destacados}) {

  return (
    <div className="destacados">

    {Object.entries(destacados).map(([id,{title,description,image,price,route}])=>(
        <Link to={`/product/${route}`} key={id} className="destacado_card">
          <img loading='lazy' src={image} alt={title} />
          <div className='destacado_info'>
            <h2>{title}</h2>
            <h3>{description}</h3>  
            <h4>${price}</h4>
          </div>
        </Link>
    ))}       
  </div>
  )
}

export default Destacados