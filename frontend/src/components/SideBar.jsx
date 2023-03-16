import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/LogoConnect.png";
import arcEnCiel from "../assets/Images/Arc-en-ciel.png";
import home from "../assets/Icons/home.svg";
import phone from "../assets/Icons/phone.svg";
import file from "../assets/Icons/file.svg";
import help from "../assets/Icons/help-circle.svg";

function SideBar() {
  return (
    <div className="flex items-center h-full py-10">
      <div className="flex ml-10 flex-col h-full w-full min-w-[300px] bg-white rounded-xl justify-between drop-shadow-4xl">
        <div className="flex flex-col">
          <img className="w-[60%] m-6 mb-20" src={logo} alt="logo" />
          <div className="flex flex-col gap-6 font-medium">
            <NavLink to="/">
              <div className="flex flex-row ml-8">
                <img className="w-8" src={home} alt="home-logo" />
                <h1 className="text-2xl m-2 w-full">Accueil</h1>
              </div>
            </NavLink>
            <NavLink to="/telephones">
              <div className="flex flex-row ml-8">
                <img className="w-7" src={phone} alt="phone-logo" />
                <h1 className="text-2xl m-2">Téléphones</h1>
              </div>
            </NavLink>
            <NavLink to="/telechargements">
              <div className="flex flex-row ml-8">
                <img className="w-7" src={file} alt="file-logo" />
                <h1 className="text-2xl m-2">Téléchargements</h1>
              </div>
            </NavLink>
            <NavLink to="/faq">
              <div className="flex flex-row ml-8">
                <img className="w-7" src={help} alt="help-logo" />
                <h1 className="text-2xl m-2 ">FAQ</h1>
              </div>
            </NavLink>
          </div>
        </div>

        <img className="w-[70%]" src={arcEnCiel} alt="logo" />
      </div>
    </div>
  );
}

export default SideBar;
