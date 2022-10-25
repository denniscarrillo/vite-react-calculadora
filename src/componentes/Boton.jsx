
import React from "react";
import '../estilos-css/Boton.css';

function Boton(props) {
  return (
    <div className='button-number'>
      {props.children}
    </div> 
  );
}

export default Boton;