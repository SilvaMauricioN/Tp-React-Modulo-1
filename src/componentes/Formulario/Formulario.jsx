import React from "react";
import Campo from "../Campo/Campo";
import Boton from "../Boton";
import CampoPassword from "../CampoPassword";
import "./Formulario.css"


const Formulario = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center">Crea una cuenta</h2>
        <p className="text-gray-500 text-center mb-4">Ingresa tus datos para registrarte</p>
        
        <form>
          <div className="GrupoEntrada">
            <Campo tipo="text" texto="Primer Nombre" placeholder="john" />
            <Campo tipo="text" texto="Apellido" placeholder="doe" />
          </div>

          <Campo tipo="email" texto="Email" placeholder="john.doe@example.com" className="mt-2" />
          <Campo tipo="tel" texto="Telefono" placeholder="+1 (555) 000-000" className="mt-2" />

          <CampoPassword texto="Contraseña" placeholder="Password" className="mt-2" />
          <CampoPassword texto="Confirmar Contraseña" placeholder="Confirmar Password" className="mt-2" />

          <Boton texto="Registrar" />

       
        </form>
      </div>
    </div>
  );
};

export default Formulario;
