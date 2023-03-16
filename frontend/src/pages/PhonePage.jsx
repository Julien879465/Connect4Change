import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import deco from "../assets/Images/Deco.png";
import PhoneCards from "../components/PhoneCards";

function PhonePage() {
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
      <PhoneCards />
      <PhoneCards />
    </div>
  );
}

export default PhonePage;
