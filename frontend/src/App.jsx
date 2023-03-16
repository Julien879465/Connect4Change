import { Routes, Route } from "react-router-dom";
import Telechargements from "./pages/Telechargements";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-grey grow">
      <SideBar />
      <Routes>
        <Route path="/telechargements" element={<Telechargements />} />
      </Routes>
    </div>
  );
}

export default App;
