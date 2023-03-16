import { Link, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import logout from "../assets/Icons/log-out_white.svg";

import expressAPI from "../services/expressAPI";

function ButtonsConnexion() {
  const { user, setUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const handleDisconnection = () => {
    expressAPI
      .get("/logout")
      .then(() => {
        localStorage.removeItem("user");
        setUser("");
        navigate("/Logout");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex mr-5">
      {user ? (
        <div className=" bg-main rounded-full">
          <button
            type="button"
            onClick={handleDisconnection}
            className="p-3 w-fit rounded-full"
          >
            <img src={logout} alt="log-out" className="w-6" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="mr- py-3 px-6 w-full rounded-full bg-main text-white font-semibold"
        >
          <Link to="/Connexion">Me connecter</Link>
        </button>
      )}
    </div>
  );
}

export default ButtonsConnexion;
