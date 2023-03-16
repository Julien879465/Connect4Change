import { Routes, Route } from "react-router-dom";
import Telechargements from "./pages/Telechargements";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/telechargements" element={<Telechargements />} />
      </Routes>
    </div>
  );
}

export default App;
