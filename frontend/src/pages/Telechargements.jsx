import React from "react";
import FormCsv from "../components/FormCsv";
import Header from "../components/Header";

function Telechargements() {
  // const [fileDisplay, setFileDisplay] = useState([]);
  return (
    <div className="bg-grey3 w-full h-screen flex-col">
      <Header />
      <FormCsv />
    </div>
  );
}

export default Telechargements;
