import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneCards from "../components/PhoneCards";
import expressAPI from "../services/expressAPI";
import deco from "../assets/Images/Deco.png";
import SearchBar from "../components/SearchBar";

function PhonePage() {
  const [search, setSearch] = useState(" ");
  const [phones, setPhones] = useState([]);
  const date = new Date().toLocaleDateString("fr-fr", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  useEffect(() => {
    expressAPI.get(`/telephones`).then((res) => {
      setPhones(res.data);
    });
  }, []);

  return (
    <div className="m-5">
      <div className="mt-5 font-bold text-4xl flex items-center justify-between gap-4">
        <div className="mt-3 ml-2 font-bold text-4xl font-feli flex items-center gap-4">
          <span>Téléphones</span>
          <img src={deco} alt="Descripción de la imagen" className="mb-7" />
        </div>
        <div className="flex mr-10">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>
      <p className="ml-3 mb-5 font-normal text-grey1">{date}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
        {phones
          .filter(
            (elem) =>
              elem.brand.toLowerCase().includes(search.toLowerCase()) ||
              elem.model.toLowerCase().includes(search.toLowerCase())
          )
          .map((phone) => (
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
