import React, { useState } from "react";
import axios from "axios";

import csv from "../assets/csv-file-format-extension.svg";
import filePlus from "../assets/file-plus.svg";

function FormCsv() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("name", name);

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/text`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  // console.log(name);
  // console.log(files);

  return (
    <div className="flex flex-row w-2/3 py-12 justify-evenly bg-white rounded-lg">
      <img src={csv} alt="importer un csv" />
      <form
        onSubmit={handleForm}
        className="w-2/3 items-start justify-center flex flex-col"
      >
        <label htmlFor="name" className="w-full flex">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            className="border-2 border-slate-900 w-full"
          />
        </label>
        Ajouter un fichier CSV:
        <label
          htmlFor="csv"
          className="flex flex-row border-2 border-grey2  rounded-lg justify-between p-4 w-full"
        >
          <span />
          <input
            onChange={(e) => setFiles(e.target.files)}
            type="file"
            name="csv"
            id="csv"
            className="hidden"
          />
          <img src={filePlus} alt="ajouter un csv" />
        </label>
        {/* <button type="submit"> Enregistrer</button> */}
      </form>
    </div>
  );
}

export default FormCsv;
