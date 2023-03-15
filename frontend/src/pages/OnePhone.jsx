import React from "react";
import deco from "../assets/Images/Deco.png";
import DescriptionTelephone from "../components/DescriptionTelephone";

function OnePhone() {
  return (
    <div className="m-5">
      <div className=" font-bold text-2xl font-jost flex items-center gap-4">
        <span>Téléphones</span>
        <img
          src={deco}
          alt="Descripción de la imagen"
          className="w-3 h-4 mb-3"
        />
      </div>
      <div className="text-grey2 text-xs mb-8">Jeudi 16 mars 2023</div>
      <DescriptionTelephone />
    </div>
  );
}

export default OnePhone;
