import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="flex gap-3 items-center w-[600px] h-14 rounded-3xl border border-solid border-white text-white p-4">
      <MagnifyingGlassIcon className="w-5 h-5 text-white" />
      <div className="flex-1">
        <input
          type="text"
          className="w-full h-full text-white bg-black border-none focus:outline-none"
          placeholder="Search template.."
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default SearchBar;
