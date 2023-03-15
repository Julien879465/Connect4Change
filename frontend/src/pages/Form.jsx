import { useState } from "react";

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
  const [selected, setSelected] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = (event) => {
    event.preventDefault();
    setSelected(!selected);
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
        <div>
          <h1 className="ml-24 decoration-4">Ajouter un téléphone</h1>
        </div>
        <form className="flex flex-row justify-evenly pt-24 ">
          <div>
            <label>
              <p>Marque du téléphone</p>
              <input
                className=" border-solid border-2 border-grey-input rounded-lg "
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
          <div className="flex flex-col">
            <p>RAM</p>
            <button
              type="button"
              onClick={handleClick}
              className={`h-12 w-12 border-solid border-2 border-main rounded-lg ${
                selected ? "bg-main text-white" : "active:none"
              }`}
            >
              1 Go
            </button>
            <label>
              <input type="radio" id="ram" name="ram" value="2" />
              <p>2 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="3" />
              <p>3 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="4" />
              <p>4 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="6" />
              <p>6 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="8" />
              <p>8 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="12" />
              <p>12 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="16" />
              <p>16 Go</p>
            </label>

            <p>Stockage</p>
            <label>
              <input type="radio" id="ram" name="ram" value="32" />
              <p>32 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="64" />
              <p>64 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="128" />
              <p>128 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="256" />
              <p>256 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="512" />
              <p>512 Go</p>
            </label>
            <label>
              <input type="radio" id="ram" name="ram" value="1024" />
              <p>1024 Go</p>
            </label>
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
