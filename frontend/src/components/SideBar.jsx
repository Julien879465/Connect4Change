import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/LogoConnect.png";
import arcEnCiel from "../assets/Images/Arc-en-ciel.png";
import home from "../assets/Icons-sidebar/home.png";
import homeWhite from "../assets/Icons-sidebar/home-white.png";
import phone from "../assets/Icons-sidebar/phone.png";
import phoneWhite from "../assets/Icons-sidebar/phone-white.png";
import file from "../assets/Icons-sidebar/file.png";
import fileWhite from "../assets/Icons-sidebar/file-white.png";
import help from "../assets/Icons-sidebar/help-circle.png";
import helpWhite from "../assets/Icons-sidebar/help-circle-white.png";

function SideBar() {
  const [focusHome, setFocusHome] = useState(false);
  const [focusPhone, setFocusPhone] = useState(false);
  const [focusFile, setFocusFile] = useState(false);
  const [focusHelp, setFocusHelp] = useState(false);

  const handleFocusHome = () => {
    setFocusHome(true);
  };

  const handleBlurHome = () => {
    setFocusHome(false);
  };
  const handleFocusPhone = () => {
    setFocusPhone(true);
  };

  const handleBlurPhone = () => {
    setFocusPhone(false);
  };
  const handleFocusFile = () => {
    setFocusFile(true);
  };

  const handleBlurFile = () => {
    setFocusFile(false);
  };
  const handleFocusHelp = () => {
    setFocusHelp(true);
  };

  const handleBlurHelp = () => {
    setFocusHelp(false);
  };

  return (
    <div className="flex items-center h-full py-10">
      <div className="flex ml-10 flex-col h-full  w-[300px] bg-white rounded-xl justify-between drop-shadow-4xl">
        <div className="flex flex-col">
          <img className="w-[60%] m-6 mb-20" src={logo} alt="logo" />
          <div className="flex flex-col gap-6 font-medium">
            <NavLink to="/" onFocus={handleFocusHome} onBlur={handleBlurHome}>
              <div className="flex items-center flex-row ml-8">
                <img
                  className="flex self-center w-[24px] h-[24px]
                "
                  src={focusHome ? homeWhite : home}
                  alt="help-logo"
                />
                <h1 className="text-2xl m-2 w-full">Accueil</h1>
              </div>
            </NavLink>
            <NavLink
              to="/telephones"
              onFocus={handleFocusPhone}
              onBlur={handleBlurPhone}
            >
              <div className="flex flex-row ml-8">
                <img
                  className="flex self-center w-[24px] h-[24px]
                "
                  src={focusPhone ? phoneWhite : phone}
                  alt="help-logo"
                />
                <h1 className="text-2xl m-2">Téléphones</h1>
              </div>
            </NavLink>
            <NavLink
              to="/telechargements"
              onFocus={handleFocusFile}
              onBlur={handleBlurFile}
            >
              <div className="flex flex-row ml-8">
                <img
                  className="flex self-center w-[24px] h-[24px]
                "
                  src={focusFile ? fileWhite : file}
                  alt="help-logo"
                />
                <h1 className="text-2xl m-2">Téléchargements</h1>
              </div>
            </NavLink>
            <NavLink
              to="/faq"
              onFocus={handleFocusHelp}
              onBlur={handleBlurHelp}
            >
              <div className="flex flex-row ml-8">
                <img
                  className="flex self-center w-[24px] h-[24px]
                "
                  src={focusHelp ? helpWhite : help}
                  alt="help-logo"
                />
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
