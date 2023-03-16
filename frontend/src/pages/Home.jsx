import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

import FormButton from "../components/FormButton";
import deco from "../assets/Images/Deco.png";
import PhoneResult from "../components/PhoneResult";

function Home() {
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [indice, setIndice] = useState("");
  const [ponderation, setPonderation] = useState("");
  const [resultat, setResultat] = useState("");
  const [showQrCode, setShowQrCode] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowQrCode(true);
  };

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  const formattedTime = date
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .replace(":", "h");

  return (
    <div className="m-5">
      <div className="ml-2 font-bold text-3xl font-jost flex items-center gap-4">
        <span>Accueil</span>
        <img src={deco} alt="Descripción de la imagen" />
      </div>
      <div className="pl-2 text-grey2 text-xs mb-8">
        {date.toLocaleDateString()} {formattedTime}
      </div>

      <div>
        <h1 className="mt-10 mb-10">Derniers téléphones ajoutés</h1>
        <PhoneResult />
      </div>
      <div className="flex flex-col w-full pl-8 gap-4">
        <h1 className="text-xl ">Ajouter un téléphone</h1>
        <form className="flex flex-row justify-between ">
          <div className=" flex flex-col justify-between">
            <label>
              <p className="text-lg">Marque du téléphone</p>
              <input
                className="w-full p-2 border-solid border-2 border-grey-input rounded-lg  "
                type="text"
                id="marque"
                value={marque}
                onChange={(event) => setMarque(event.target.value)}
                required
              />
            </label>

            <label>
              <p className="text-lg">Modèle du téléphone</p>
              <input
                className=" w-full p-2 border-solid border-2 border-grey-input rounded-lg "
                type="text"
                id="modèle"
                value={modele}
                onChange={(event) => setModele(event.target.value)}
                required
              />
            </label>
            <label>
              <p className="text-lg">Indice Antutu</p>
              <input
                className=" w-full p-2 border-solid border-2 border-grey-input rounded-lg "
                type="text"
                id="indice"
                value={indice}
                onChange={(event) => setIndice(event.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <FormButton />
          </div>

          <div className="flex flex-col justify-between">
            <label>
              <p className="text-lg">Pondération</p>
              <input
                className="w-full p-2  border-solid border-2 border-grey-input rounded-lg "
                type="text"
                id="ponderation"
                value={ponderation}
                onChange={(event) => setPonderation(event.target.value)}
                required
              />
            </label>
            <label>
              <p className="text-lg">Résultat</p>
              <input
                className="w-full p-2 bg-grey3  border-solid border-2 border-grey-input rounded-lg "
                type="text"
                id="resultat"
                value={resultat}
                onChange={(event) => setResultat(event.target.value)}
                required
              />
            </label>
            <button
              className="bg-yellow rounded-full block w-full p-2 mt-10 text-white"
              type="submit"
              onClick={handleSubmit}
            >
              Afficher le QR code
            </button>
          </div>
        </form>
        {showQrCode && (
          <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="absolute top-0 left-0 h-full w-full bg-gray-900 opacity-50" />
            <div className="bg-white rounded-lg z-10">
              <QRCode value="salut" />
            </div>
            <button
              type="button"
              className="text-red-500 hover:text-red-700 absolute top-0 right-0 p-2"
              onClick={() => setShowQrCode(false)}
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
