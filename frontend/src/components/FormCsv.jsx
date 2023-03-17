import React, { useState } from "react";
import Papa from "papaparse";

import csvFile from "../assets/csv-file-format-extension.svg";
import filePlus from "../assets/file-plus.svg";
import toastSucces from "../services/toastSuccess";
import expressAPI from "../services/expressAPI";
import toastError from "../services/toastService";

function FormCsv() {
  const [data, setData] = useState([]);
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setFiles(e.target.files);
    setName(e.target.name);
  };

  const handleParse = () => {
    if (!files) return toastError("Enter a valid file");

    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, {
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      });

      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);

      setData(columns);
    };
    return reader.readAsText(files[0]);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("name", name);
    formData.append("data", data);

    expressAPI
      .post(`/text`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(toastSucces("Fichier envoyé avec succès"));
  };

  return (
    <div className="flex flex-row w-2/3 py-12 justify-evenly bg-white rounded-lg">
      <img src={csvFile} alt="importer un csv" />
      <form
        onSubmit={handleForm}
        className="w-2/3 items-start justify-center flex flex-col"
      >
        <label htmlFor="name" className="w-full flex">
          <input
            type="text"
            name="name"
            id="name"
            className="hidden border-2 border-slate-900 w-full"
          />
        </label>
        Ajouter un fichier CSV:
        <label
          htmlFor="csv"
          className="flex flex-row border-2 border-grey2  rounded-lg justify-between p-4 w-full"
        >
          <span />
          <input
            onChange={handleInputChange}
            type="file"
            name="csv"
            accept=".csv"
            id="csv"
            className="hidden"
          />
          <img src={filePlus} alt="ajouter un csv" />
        </label>
        <button
          type="submit"
          onClick={handleParse}
          className="bg-main rounded-full p-3 px-5 w-fit text-white mt-4"
        >
          {" "}
          Envoyer vers la base de donnée
        </button>
      </form>
    </div>
  );
}

export default FormCsv;
