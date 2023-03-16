import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Registration from "./pages/Registration";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
