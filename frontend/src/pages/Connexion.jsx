import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import expressAPI from "../services/expressAPI";
import toastError from "../services/toastService";

import illustration from "../assets/Images/undraw_showing_support_re_5f2v 1.png";

function Connexion() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      expressAPI
        .post("/login", { email, password })
        .then((res) => {
          setUser(res.data.user.email);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/Home");
        })
        .catch(() => toastError("Le mot de passe ou l'email est incorrect"));
    } else {
      toastError("Veuillez renseigner un email et un mot de passe");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center justify-evenly w-full">
        <img src={illustration} alt="illustration" className="w-3/12" />
        <div className="w-1/4">
          <h1 className="text-xl text-left font-semibold mt-6 mb-12 md:text-3xl">
            Connectez vous sur votre espace !
          </h1>
          <div className="flex flex-row text-left">
            <p className="text-grey1 text-s pr-4">Je n'ai pas de compte ?</p>
            <Link
              to="/Registration"
              className="text-main-light font-semibold text-sm underline decoration-2 decoration-main-light"
            >
              M'inscrire
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-left mt-5 mb-6"
          >
            <div className="mb-5 flex flex-col">
              <label htmlFor="email" className="text-grey1 font-semibold mb-1">
                Adresse mail
              </label>
              <input
                className="border border-grey3 h-10 rounded"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-grey1 font-semibold mb-1"
              >
                Mot de passe
              </label>
              <input
                className="border border-grey3 h-10 rounded mb-10"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              type="submit"
              className="py-3 w-full rounded-full bg-yellow text-white font-semibold"
            >
              Me connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
