import React from "react";
import Iconos from "./Iconos/Iconos";

const CampoPassword = ({ texto,placeholder }) => {
  
	return (
	  <div className="flex flex-col space-y-1">
		<label className="text-gray-700 font-medium">{texto}</label>
		<div className="relative">
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
