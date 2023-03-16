import { Link } from "react-router-dom";

function Logout() {
  return (
    <div>
      <h1 className="text-xl text-left font-semibold mt-6 mb-12 md:text-3xl">
        Vous êtes bien déconnecté !
      </h1>
      <Link
        to="/"
        className="text-main-light font-semibold text-sm underline decoration-2 decoration-main-light"
      >
        Revenir à l'accueil
      </Link>
    </div>
  );
}

export default Logout;
