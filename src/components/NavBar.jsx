import React from "react";
import NavLinks from "../utils/Navlinks";
import { Link } from "react-scroll";
const NavBar = () => {
  return (
    <div className="flex flex-1 flex-row justify-between items-center p-4 mb-[-4] shadow-md rounded-md shadow-gray-400 sticky top-0 bg-slate-800">
      <div className="flex justify-center items-center">
        <h1 className="text-white uppercase font-bold leading-5 tracking-widest">
          Tim
        </h1>
      </div>
      <div className="flex justify-between items-center p-2 ">
        {NavLinks.map((item, index) => {
          const { link, name } = item;
          return (
            <Link
              className={`uppercase font-thin ${
                NavLinks.length - 1 === index ? "mx-0" : "mx-3"
              } 2xl text-gray-200 font-medium`}
              key={item.id}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
