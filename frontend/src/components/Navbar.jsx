import ButtonsConnexion from "./ButtonsConnexion";
import logo from "../assets/Images/LogoConnect.png";

function Navbar() {
  return (
    <div>
      <img src={logo} alt="logo connect4change" />
      <ButtonsConnexion />
    </div>
  );
}

export default Navbar;
