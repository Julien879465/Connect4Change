import { Link } from "react-router-dom";

import logo from "../assets/Images/LogoConnect.png";
import DeconnexionButton from "./DeconnexionButton";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function Navbar() {
  const { user } = useCurrentUserContext();
  return (
    <div>
      <Link
        to="/Connexion"
        className="flex flex-row items-center justify-between shadow-nav"
        alt="logo_link"
      >
        <img
          src={logo}
          alt="logo connect4change"
          className="w-52 max-w-[12%] p-2"
        />
      </Link>
      {user && <DeconnexionButton />}
    </div>
  );
}

export default Navbar;
