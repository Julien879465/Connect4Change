import logo from "../assets/Images/LogoConnect.png";
import DeconnexionButton from "./DeconnexionButton";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function Navbar() {
  const { user } = useCurrentUserContext();
  return (
    <div className="flex flex-row items-center justify-between shadow-nav">
      <img src={logo} alt="logo connect4change" className="max-w-[12%] p-2" />
      {user && <DeconnexionButton />}
    </div>
  );
}

export default Navbar;
