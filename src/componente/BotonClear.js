import React from "react";
import "../hojas-de-estilo/BotonClear.css";

const BotonClear = (props) => (
  <botton className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </botton>
);

export default BotonClear;
