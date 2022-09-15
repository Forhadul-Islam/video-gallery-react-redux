import React, { FormEvent, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useAppDispatch } from "../../app/hooks";
import { pageChanged, searchAdded } from "../../features/filter/filterSlice";

const Search: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useAppDispatch();
  //input form handler
  const handleSearchForm = (e: FormEvent) => {
    e.preventDefault();
    dispatch(searchAdded(input));
  };
  const debounce = (fn: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn();
      }, delay);
    };
  };
  const handleSearchOnChange = (text: string) => {
    dispatch(pageChanged(1));
    debounce(() => {
      dispatch(searchAdded(text));
    }, 1000)();
  };
  return (
    <>
      <form onSubmit={handleSearchForm} className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex justify-center items-center pl-2">
          <BiSearchAlt2 className="text-xl" />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="search"
          name="search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            handleSearchOnChange(input);
          }}
        />
      </form>
    </>
  );
};

export default Search;
