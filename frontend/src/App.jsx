import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// PAGES
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Registration from "./pages/Registration";
import Logout from "./pages/Logout";
import PhonePage from "./pages/PhonePage";
import OnePhone from "./pages/OnePhone";
import Telechargements from "./pages/Telechargements";
import FAQ from "./pages/FAQ";

// COMPONENTS
import SideBar from "./components/SideBar";

// CSS
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="bg-background grow flex flex-row w-full">
      <SideBar />
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/telephones" element={<PhonePage />} />
        <Route path="/telephones/:id" element={<OnePhone />} />
        <Route path="/telechargements" element={<Telechargements />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
