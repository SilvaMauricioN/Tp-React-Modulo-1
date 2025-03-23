import React from "react";
import Campo from "./Campo";
import Boton from "./Boton";
import CampoPassword from "./CampoPassword";


const Formulario = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center">Crea una cuenta</h2>
        <p className="text-gray-500 text-center mb-4">Ingresa tus datos para registrarte</p>
        
        <form>
          <div className="grid grid-cols-2 gap-2">
            <Campo tipo="text" texto="Primer Nombre" />
            <Campo tipo="text" texto="Apellido" />
          </div>

          <Campo tipo="email" texto="Email" className="mt-2" />
          <Campo tipo="tel" texto="Telefono" className="mt-2" />

          <CampoPassword placeholder="Password" className="mt-2" />
          <CampoPassword placeholder="Confirmar Password" className="mt-2" />

          <Boton texto="Registrar" />

       
        </form>
      </div>
    </div>
  );
};

export default Formulario;
