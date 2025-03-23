import React from "react";
import Iconos from "../Iconos/Iconos";
import "../Campo/Campo.css"; 

const CampoPassword = ({ texto,placeholder }) => {
  
	return (
	  <div className="CampoEntrada">
		<label className="text-gray-700 font-medium">{texto}</label>
		<div className="">
		  <input
			type="password"
      		placeholder={placeholder}
			className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
		  />
		  <button
			type="button"
			className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
		  >
			<Iconos.EYE/>
		  </button>
		</div>
	  </div>
	);
}
export default CampoPassword; 
