import React from "react";

const Campo = ({ tipo, texto }) => {
  return (
    <input
      type={tipo}
      placeholder={texto}
      className="border p-2 rounded w-full"
    />
  );
};

export default Campo;
