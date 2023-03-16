import { Routes, Route } from "react-router-dom";
import Telechargements from "./pages/Telechargements";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-background grow flex flex-row w-full">
      <SideBar />
      <Routes>
        <Route path="/telechargements" element={<Telechargements />} />
      </Routes>
    </div>
  );
}

export default App;
