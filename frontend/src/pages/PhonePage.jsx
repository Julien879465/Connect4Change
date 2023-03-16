import React from "react";
import SearchBar from "../components/SearchBar";
import deco from "../assets/Images/Deco.png";
import PhoneCards from "../components/PhoneCards";

function PhonePage() {
  return (
    <div className="m-5">
      <div className=" font-bold text-2xl flex items-center justify-between gap-4">
        <div className="flex">
          <span>Téléphones</span>
          <img
            src={deco}
            alt="Descripción de la imagen"
            className="w-3 h-4 mb-3"
          />
        </div>
        <div className="flex mr-10">
          <SearchBar />
        </div>
      </div>

      <div className="text-grey2 text-xs mb-8">Jeudi 16 mars 2023</div>
      <PhoneCards />
      <PhoneCards />
    </div>
  );
}

export default PhonePage;
