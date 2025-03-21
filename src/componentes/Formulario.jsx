import React from "react";
import Campo from "./Campo";
// import PasswordField from "./PasswordField";
// import Button from "./Button";

const Formulario = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center">Create an account</h2>
        <p className="text-gray-500 text-center mb-4">Enter your information to register</p>
        
        <form>
          <div className="grid grid-cols-2 gap-2">
            <Campo tipo="text" texto="First name" />
            <Campo tipo="text" texto="Last name" />
          </div>

          <Campo tipo="email" texto="Email" className="mt-2" />
          <Campo tipo="tel" texto="Phone" className="mt-2" />
       
        </form>
      </div>
    </div>
  );
};

export default Formulario;
