import React from "react";
import "./Campo.css"

const Campo = ({ tipo, texto, placeholder }) => {
  return (
    <div className="CampoEntrada">
      <label className="">{texto}</label>
      <input 
        type={tipo}
        placeholder={placeholder}
        className=""        
      />
    </div>  
  );
};

export default Campo;
