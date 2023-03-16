import { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  console.info(searchValue);
  return (
    <div>
      <input
        className="h-[63px] w-[350px] border-solid font-medium border-2 text-lg border-grey3 focus:outline-grey2 px-4 rounded-full"
        type="text"
        placeholder="Entrer votre recherche"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
