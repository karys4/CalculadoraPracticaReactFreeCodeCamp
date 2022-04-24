import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <button
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()} //trimEnd remueve espacios al final de una cadena de caracteres o de una plantilla
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Boton;
