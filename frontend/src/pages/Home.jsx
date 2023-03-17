import { useState } from "react";
import QRCode from "react-qr-code";

import FormButton from "../components/FormButton";
import deco from "../assets/Images/deco.png";
import PhoneResult from "../components/PhoneResult";

import expressAPI from "../services/expressAPI";
import {
  antutuVal,
  ramVal,
  storageVal,
  totalWeighted,
  category,
} from "../services/algo";

function Home() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [network, setNetwork] = useState("");
  const [antutuIndice, setAntutuIndice] = useState(0);
  const [weighting, setWeighting] = useState("");
  const [resultat, setResultat] = useState("");
  const [name, setName] = useState("");
  // const [url, setUrl] = useState([]);

  const [showQrCode, setShowQrCode] = useState(false);
  const [qrData, setQrData] = useState([]);
  const [date, setDate] = useState(new Date());

  const [ram, setRam] = useState([]);
  const [storage, setStorage] = useState([]);
  const [idphone, setIdphone] = useState("");

  // useEffect(() => {
  //   // eslint-disable-next-line no-use-before-define
  //   const timerID = setInterval(() => tick(), 1000);

  //   return function cleanup() {
  //     clearInterval(timerID);
  //   };
  // });

  function tick() {
    setDate(new Date());
  }

  const formattedTime = date
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .replace(":", "h");

  // const formData = new FormData();
  // formData.append("file", files[0]);

  const url = "";
  const androidSystem = null;

  console.log(ram);
  // console.log(ram[0]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    expressAPI
      .post("/telephones", {
        brand,
        model,
        screenSize,
        network,
        androidSystem,
        antutuIndice,
        ram,
        storage,
        url,
      })
      .then((res) => {
        return setIdphone(res.data.idphone);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(idphone);

    const antutuValue = antutuVal(antutuIndice);
    const ramValue = ramVal(ram).val;
    const storageValue = storageVal(storage).val;
    const totalValue = antutuValue + ramValue + storageValue;
    const totalWeightedValue = totalWeighted(totalValue, weighting);
    const categoryName = category(totalWeightedValue).val;

    // console.log(antutuValue);
    // console.log(ramValue);
    // console.log(storageValue);
    // console.log(totalValue);
    // console.log(totalWeightedValue);
    // console.log(categoryValue);

    const phoneIdphone = idphone;
    console.log(categoryName);
    console.log(phoneIdphone);
    await expressAPI
      .post("/etats", { name, weighting, phoneIdphone: idphone })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    await expressAPI
      .post("/totals", {
        phoneIdphone,
        ramValue,
        storageValue,
        antutuValue,
        totalValue,
        totalWeightedValue,
        categoryName,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitQrCode = (event) => {
    event.preventDefault();
    console.log(idphone);

    expressAPI.get(`/calcs/`).then((res) => {
      console.log(res.data[res.data?.length - 1]);
      setQrData(res.data[res.data?.length - 1]);
    });
    setShowQrCode(true);
  };

  return (
    <>
      <div className="m-5">
        <div className="ml-2 font-bold text-3xl font-jost flex items-center gap-4 py-10">
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
              <label htmlFor="brand">
                <p className="text-lg">Marque du téléphone</p>
                <input
                  className="w-full p-2 border-solid border-2 border-grey-input rounded-lg  "
                  type="text"
                  id="brand"
                  name="brand"
                  value={brand}
                  onChange={(event) => setBrand(event.target.value)}
                  required
                ></input>
              </label>

              <label htmlFor="model">
                <p className="text-lg">Modèle du téléphone</p>
                <input
                  className=" w-full p-2 border-solid border-2 border-grey-input rounded-lg "
                  type="text"
                  id="model"
                  name="model"
                  value={model}
                  onChange={(event) => setModel(event.target.value)}
                  required
                ></input>
              </label>
              <label htmlFor="screenSize">
                <p className="text-lg">Taille de l'écran</p>
                <input
                  className="w-full p-2  border-solid border-2 border-grey-input rounded-lg "
                  type="text"
                  id="screenSize"
                  name="screenSize"
                  value={screenSize}
                  onChange={(event) => setScreenSize(event.target.value)}
                  required
                ></input>
              </label>
              <select
                onChange={(event) => setNetwork(event.target.value)}
                value={network}
              >
                Réseau
                <option value="2G">2G</option>
                <option value="3G">3G</option>
                <option value="4G">4G</option>
                <option value="5G">5G</option>
              </select>
              <label htmlFor="antutuIndice">
                <p className="text-lg">Indice Antutu</p>
                <input
                  className=" w-full p-2 border-solid border-2 border-grey-input rounded-lg "
                  type="text"
                  id="antutuIndice"
                  name="antutuIndice"
                  value={antutuIndice}
                  onChange={(event) => setAntutuIndice(event.target.value)}
                  required
                ></input>
              </label>
              {/* <label
                htmlFor="url"
                className="flex flex-row border-2 border-grey2  rounded-lg justify-between p-4 w-full"
              >
                Image :
                <span />
                <input
                  onChange={(e) => setUrl(e.target.files)}
                  type="file"
                  name="url"
                  id="url"
                  className="hidden"
                />
                <img src={filePlus} alt="ajouter une image" />
              </label> */}
            </div>
            <div>
              <FormButton setRam={setRam} setStorage={setStorage} />
            </div>

            <div className="flex flex-col justify-between">
              <select
                onChange={(event) => setName(event.target.value)}
                value={name}
              >
                État
                <option value="DEEE">DEEE</option>
                <option value="REPARABLE">REPARABLE</option>
                <option value="BLOQUE">BLOQUE</option>
                <option value="RECONDITIONNABLE">RECONDITIONNABLE</option>
                <option value="RECONDITIONNE">RECONDITIONNE</option>
              </select>
              <select
                onChange={(event) => setWeighting(event.target.value)}
                value={weighting}
              >
                Pondération
                <option value="-100%">-100%</option>
                <option value="-50%">-50%</option>
                <option value="-10%">-10%</option>
                <option value="-5%">-5%</option>
                <option value="0%">0%</option>
                <option value="5%">5%</option>
                <option value="10%">10%</option>
              </select>
              <label>
                <p className="text-lg">Résultat</p>
                <input
                  className="w-full p-2 bg-grey3  border-solid border-2 border-grey-input rounded-lg "
                  type="text"
                  id="resultat"
                  value={resultat}
                  onChange={(event) => setResultat(event.target.value)}
                  required
                ></input>
              </label>

              <button
                className="bg-yellow rounded-full block w-full p-2 mt-10 text-white"
                type="submit"
                onClick={handleSubmit}
              >
                VALIDER
              </button>
              <button
                className="bg-yellow rounded-full block w-full p-2 mt-10 text-white"
                type="submit"
                onClick={handleSubmitQrCode}
              >
                Afficher le QR code
              </button>
            </div>
          </form>
          {showQrCode && (
            <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center">
              <div className="absolute top-0 left-0 h-full w-full bg-gray-900 opacity-50"></div>
              <div className="bg-white rounded-lg z-10">
                <QRCode value={JSON.stringify(qrData)} />
                <button
                  className="text-red-500 hover:text-red-700 absolute top-0 right-0 p-2"
                  onClick={() => setShowQrCode(false)}
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
