import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TelephonePage from "./pages/TelephonePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/telephonepage" element={<TelephonePage />} />
      </Route>
    </Routes>
  );
}

export default App;
