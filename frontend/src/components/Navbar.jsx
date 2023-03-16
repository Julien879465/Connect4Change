import ButtonsConnexion from "./ButtonsConnexion";
import logo from "../assets/Images/LogoConnect.png";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between shadow-nav">
      <img src={logo} alt="logo connect4change" className="max-w-[12%] p-2" />
      <ButtonsConnexion />
    </div>
  );
}

export default Navbar;
