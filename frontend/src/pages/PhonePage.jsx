import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneCards from "../components/PhoneCards";
import expressAPI from "../services/expressAPI";
import deco from "../assets/Images/Deco.png";
import SearchBar from "../components/SearchBar";

function PhonePage() {
  const [phones, setPhones] = useState([]);
  const [date, setDate] = useState(new Date());

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

  useEffect(() => {
    expressAPI.get(`/telephones`).then((res) => {
      setPhones(res.data);
    });
  }, []);

  return (
    <div className="m-5">
      <div className=" font-bold text-2xl flex items-center justify-between gap-4">
        <div className="flex">
          <span>Téléphones</span>
          <img
            src={deco}
            alt="Descripción de la imagen"
            className="w-3 h-4 mb-3"
          />
        </div>
        <div className="flex mr-10">
          <SearchBar />
        </div>
      </div>
      <div className="pl-2 text-grey2 text-xs mb-8">
        {date.toLocaleDateString()} {formattedTime}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
        {phones.map((phone) => (
          <Link key={phone.idphone} to={`/telephones/${phone.idphone}`}>
            <PhoneCards
              brand={phone.brand}
              ram={phone.ram}
              storage={phone.storage}
              url={phone.url}
              network={phone.network}
              model={phone.model}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PhonePage;
