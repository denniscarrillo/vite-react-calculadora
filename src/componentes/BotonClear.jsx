import React from "react";
import '../estilos-css/Boton.css';

function BotonClear(props) {
  return (
    <div className='button-clear'>
      {props.children}
    </div> 
  );
}

export default BotonClear;