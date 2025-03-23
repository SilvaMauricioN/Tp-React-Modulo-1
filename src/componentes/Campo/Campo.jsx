import React from "react";
import "./Campo.css"

const Campo = ({ tipo, texto, placeholder }) => {
  return (
    <div className="CampoEntrada">
      <label className="text-gray-700 font-medium">{texto}</label>
      <input 
        type={tipo}
        placeholder={placeholder}
        className="border p-2 rounded w-full">        
      </input>
    </div>  
  );
};

export default Campo;
