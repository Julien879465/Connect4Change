import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OnePhone from "./pages/OnePhone";
import PhonePage from "./pages/PhonePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Phonepage" element={<PhonePage />} />
      <Route path="/onephone" element={<OnePhone />} />
    </Routes>
  );
}

export default App;
