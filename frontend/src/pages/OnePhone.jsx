import { useState, useEffect } from "react";

import deco from "../assets/Images/Deco.png";
import DescriptionPhone from "../components/DescriptionPhone";
import expressAPI from "../services/expressAPI";

function OnePhone() {
  const [date, setDate] = useState(new Date());
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    expressAPI.get(`/telephones`).then((res) => {
      setPhones(res.data);
    });
  }, []);

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
      <div className="mt-5 font-bold text-4xl font-feli flex items-center gap-4">
        <span>Téléphones</span>
        <img
          src={deco}
          alt="Descripción de la imagen"
          className="w-5 h-6 mb-3"
        />
      </div>
      <div className="pl-2 text-grey2 text-xs mb-8">
        {date.toLocaleDateString()} {formattedTime}
      </div>
      <div>
        {phones.map((phone) => (
          <DescriptionPhone
            key={phone.id}
            brand={phone.brand}
            ram={phone.ram}
            storage={phone.storage}
            url={phone.url}
            network={phone.network}
            model={phone.id}
            screen={phone.screen_size}
            indice={phone.antutu_indice}
          />
        ))}
      </div>
    </div>
  );
}

export default OnePhone;
