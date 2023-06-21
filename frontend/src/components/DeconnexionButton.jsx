import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import logout from "../assets/Icons/log-out_white.svg";

import expressAPI from "../services/expressAPI";

function DeconnexionButton() {
  const { setUser } = useCurrentUserContext();
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
    <div className=" bg-main rounded-full">
      <button
        type="button"
        onClick={handleDisconnection}
        className="p-3 w-fit rounded-full"
      >
        <img src={logout} alt="log-out" className="w-6" />
      </button>
    </div>
  );
}

export default DeconnexionButton;
