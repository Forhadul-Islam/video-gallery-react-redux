import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search: React.FC = () => {
  return (
    <>
      <div className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex justify-center items-center pl-2">
          <BiSearchAlt2 className="text-xl" />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </div>
    </>
  );
};

export default Search;
