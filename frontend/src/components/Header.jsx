import React from "react";

import deco from "../assets/Deco.png";

function header() {
  const date = new Date().toLocaleDateString("fr-fr", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  //   let day = date.getDate();
  //   let month = date.getMonth() + 1;
  //   let year = date.getFullYear();

  //   // This arrangement can be altered based on how we want the date's format to appear.
  //   let currentDate = `${day}-${month}-${year}`;
  // console.log(date); // "17-6-2022"

  return (
    <div className="flex flex-col w-full justify-between font-fira">
      <div className="flex flex-row items-end gap-4">
        <h2 className="font-medium text-4xl">Accueil</h2>
        <img src={deco} alt="petits ronds colorés" className="pb-6" />
      </div>
      <p className="font-normal text-grey1">{date}</p>
    </div>
  );
}

export default header;
