import React from "react";
import Iconos from "../Iconos/Iconos";
import "./CampoPassword.css"

const CampoPassword = ({ texto,placeholder }) => {
  
	return (
		<div className="ContenedorPassword">
			<label className="TituloCampo">{texto}</label>
			<input		
				type="password"
				placeholder={placeholder}
				className="EntradaPassword"
			/>
			<button
				type="button"
				className="BotonOjo"
			>
				<Iconos.EYE className="Icono"/>
			</button>		
	 </div>
	);
}
export default CampoPassword; 
