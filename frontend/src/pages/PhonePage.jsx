import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneCards from "../components/PhoneCards";
import expressAPI from "../services/expressAPI";
import deco from "../assets/Images/Deco.png";
import SearchBar from "../components/SearchBar";

function PhonePage() {
  const [search, setSearch] = useState("");
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
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="pl-2 text-grey2 text-xs mb-8">
        {date.toLocaleDateString()} {formattedTime}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
        {search.length > 0
          ? phones
              .filter(
                (elem) =>
                  elem.brand.toLowerCase().includes(search.toLowerCase()) ||
                  elem.model.toLowerCase().includes(search.toLowerCase())
              )
              .map((phone) => (
                <Link key={phone.idphone} to={`/telephones/${phone.idphone}`}>
                  <PhoneCards
                    antutu={phone.antutu_indice}
                    brand={phone.brand}
                    ram={phone.ram}
                    storage={phone.storage}
                    url={phone.url}
                    network={phone.network}
                    model={phone.model}
                    screen={phone.screen_size}
                    category={phone.category_name}
                  />
                </Link>
              ))
          : phones.map((phone) => (
              <Link key={phone.idphone} to={`/telephones/${phone.idphone}`}>
                <PhoneCards
                  antutu={phone.antutu_indice}
                  brand={phone.brand}
                  ram={phone.ram}
                  storage={phone.storage}
                  url={phone.url}
                  network={phone.network}
                  model={phone.model}
                  screen={phone.screen_size}
                  category={phone.category_name}
                />
              </Link>
            ))}
        {phones.filter(
          (elem) =>
            elem.brand.toLowerCase().includes(search.toLowerCase()) ||
            elem.model.toLowerCase().includes(search.toLowerCase())
        ).length === 0 && (
          <div className="flex items-center col-span-3  flex-col">
            <img
              className="flex  w-[50%]"
              src="https://img.freepik.com/vecteurs-libre/funny-error-404-background-design_1167-219.jpg?w=2000"
              alt="404"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PhonePage;
