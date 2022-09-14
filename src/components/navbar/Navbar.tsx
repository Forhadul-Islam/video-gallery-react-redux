import React from "react";
import brandImage from "../../assets/man.svg";
import Search from "./Search";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";

const Navbar: React.FC = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleChangeTheme = () => setDarkTheme(!darkTheme);
  return (
    <>
      <nav className=" dark:bg-neutral-900 bg-slate-200 shadow-md">
        <div className="max-w-7xl flex justify-between mx-auto py-2 px-3">
          <Link to="/" className="flex items-center">
            <img
              className="h-12 w-12 border-2 border-gray-700 bg-white p-1 rounded-full"
              src={brandImage}
              alt=""
            />
            {/* <span className="flex flex-col ml-1">
              <span className="text-sm text-gray-900 font-bold">
                Programming
              </span>{" "}
              <span className="text-xl font-bold text-purple-700">Hub</span>
            </span> */}
          </Link>
          <div className="flex items-center">
            <MdDarkMode
              onClick={handleChangeTheme}
              className="text-3xl mr-3 dark:text-gray-700 dark:bg-gray-200  text-gray-800 cursor-pointer transition ease-in-out duration-500 hover:text-white hover:bg-black p-1 rounded-full"
            />
            <Search />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
