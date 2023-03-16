import { useState } from "react";
import searchIcon from "../assets/Icons/search.svg";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  console.info(searchValue);
  return (
    <div className="relative w-full">
      <input
        className="absolute h-[63px] w-[350px] border-solid border-2 border-grey3 px-4 rounded-full"
        type="text"
        placeholder="Entrer votre recherche"
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <img
        className="absolute h-[24px] top-5 left-[280px]"
        src={searchIcon}
        alt=""
      />
    </div>
  );
}

export default SearchBar;
