import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Registration from "./pages/Registration";
import Logout from "./pages/Logout";
import PhonePage from "./pages/PhonePage";
import OnePhone from "./pages/OnePhone";
import Telechargements from "./pages/Telechargements";
import FAQ from "./pages/FAQ";

import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-background grow flex flex-row w-full">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Phonepage" element={<PhonePage />} />
        <Route path="/onephone" element={<OnePhone />} />
        <Route path="/telechargements" element={<Telechargements />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
