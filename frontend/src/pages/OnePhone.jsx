import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import deco from "../assets/Images/Deco.png";
import DescriptionPhone from "../components/DescriptionPhone";
import expressAPI from "../services/expressAPI";

function OnePhone() {
  const [phones, setPhones] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    expressAPI.get(`/telephones/${id}`).then((res) => {
      setPhones([res.data]);
    });
  }, []);

  const date = new Date().toLocaleDateString("fr-fr", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="m-5">
      <div className="mt-5 font-bold text-4xl font-feli flex items-center gap-4">
        <span>Téléphones</span>
        <img
          src={deco}
          alt="Descripción de la imagen"
          className="w-5 h-6 mb-3"
        />
      </div>
      <p className="ml-3 mb-5 font-normal text-grey1">{date}</p>
      <div>
        {phones.map((phone) => (
          <DescriptionPhone
            key={phone.idphone}
            brand={phone.brand}
            ram={phone.ram}
            storage={phone.storage}
            url={phone.url}
            network={phone.network}
            model={phone.model}
            screen={phone.screen_size}
            indice={phone.antutu_indice}
            system={phone.android_system}
          />
        ))}
      </div>
    </div>
  );
}

export default OnePhone;
