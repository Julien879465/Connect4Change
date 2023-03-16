import React from "react";
import FormCsv from "../components/FormCsv";
import Header from "../components/Header";

function Telechargements() {
  // const [fileDisplay, setFileDisplay] = useState([]);
  return (
    <div className="w-full h-2/3 flex flex-col justify-evenly ml-14 py-10">
      <Header />
      <h2 className="font-fira font-medium text-2xl">
        <span className="underline decoration-main-light decoration-4 underline-offset-8">
          Télécha
        </span>
        rgements
      </h2>
      <FormCsv />
    </div>
  );
}

export default Telechargements;
