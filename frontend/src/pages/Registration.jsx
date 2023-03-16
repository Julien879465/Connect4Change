import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import toastError from "../services/toastService";
import expressAPI from "../services/expressAPI";

import Navbar from "../components/Navbar";

import illustration from "../assets/Images/undraw_showing_support_re_5f2v 1.png";

function Registration() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if ((email, password, firstname)) {
      expressAPI
        .post("/users", { email, password, firstname })
        .then(() => navigate("/Connexion"))
        .catch((err) => console.error(err));
    } else {
      toastError("Veuillez renseigner votre email et votre statut");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full mt-20">
        <div className="flex flex-row items-center justify-evenly w-full">
          <img src={illustration} alt="illustration" className="w-3/12" />
          <div className="w-1/4">
            <h1 className="text-xl text-left font-semibold mt-6 mb-12 md:text-3xl">
              Bienvenue !
            </h1>
            <div className="flex flex-row text-left">
              <p className="text-grey1 text-s pr-4">J'ai déjà un compte ?</p>
              <Link
                to="/Connexion"
                type="button"
                className="text-main-light font-semibold text-sm underline decoration-2 decoration-main-light"
              >
                Me connecter
              </Link>
            </div>
            <form
              onSubmit={handleForm}
              className="flex flex-col text-left mt-5 mb-6"
            >
              <div className="mb-5 flex flex-col">
                <label
                  htmlFor="firstname"
                  className="text-grey1 font-semibold mb-1"
                >
                  Nom
                </label>
                <input
                  className="border border-grey3 h-10 rounded"
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={handleNameChange}
                />
              </div>
              <div className="mb-5 flex flex-col">
                <label
                  htmlFor="email"
                  className="text-grey1 font-semibold mb-1"
                >
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
                Continuer l'inscription
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
