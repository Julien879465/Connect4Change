import { useState } from "react";

import FormButton from "../components/FormButton";
import deco from "../assets/Images/deco.png";
import tel1 from "../assets/Images/tel1.png";
import tel2 from "../assets/Images/tel2.png";
import tel3 from "../assets/Images/tel3.png";

function form() {
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [indice, setIndice] = useState("");
  const [ponderation, setPonderation] = useState("");
  const [resultat, setResultat] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <p className="text-xl font-medium">Accueil</p>
        <img src={deco} alt="logo" className="w-5" />

        <div className="ml-24">
          <h1>Derniers téléphones ajoutés</h1>
          <div className="flex flex-row justify-evenly">
            <img src={tel1} alt="tel1" className="w-[15%]" />
            <img src={tel2} alt="tel1" className="w-[15%]" />
            <img src={tel3} alt="tel1" className="w-[15%]" />
          </div>
        </div>

        <form className="flex flex-row justify-evenly pt-24 ">
          <div>
            <h1 className="ml-24 decoration-4">Ajouter un téléphone</h1>
            <label>
              <p className="ml-24">Marque du téléphone</p>
              <input
                className=" border-solid border-2 border-grey-input rounded-lg ml-24 "
                type="text"
                id="marque"
                value={marque}
                onChange={(event) => setMarque(event.target.value)}
                required
              ></input>
            </label>

            <label>
              <p>Modèle du téléphone</p>
              <input
                className=" border-solid border-2 border-grey-input rounded-lg "
                type="text"
                id="modèle"
                value={modele}
                onChange={(event) => setModele(event.target.value)}
                required
              ></input>
            </label>
            <label>
              <p>Indice Antutu</p>
              <input
                className=" border-solid border-2 border-grey-input rounded-lg "
                type="text"
                id="indice"
                value={indice}
                onChange={(event) => setIndice(event.target.value)}
                required
              ></input>
            </label>
          </div>
          <div>
            <FormButton />
          </div>

          <div>
            <label>
              <p>Pondération</p>
              <input
                className=" border-solid border-2 border-grey-input rounded-lg "
                type="text"
                id="ponderation"
                value={ponderation}
                onChange={(event) => setPonderation(event.target.value)}
                required
              ></input>
            </label>
            <label>
              <p>Résultat</p>
              <input
                className=" border-solid border-2 border-grey-input rounded-lg "
                type="text"
                id="resultat"
                value={resultat}
                onChange={(event) => setResultat(event.target.value)}
                required
              ></input>
            </label>
            <button
              className="bg-yellow rounded-xl block w-40 mt-10"
              type="submit"
              onClick={handleSubmit}
            >
              Afficher le QR code
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default form;
