import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import propTypes from "prop-types";

const Navbar = ({ children, brand, brandLink }) => {
  return (
    <nav className="w-full fixed py-3 px-5 flex items-center gap-4 shadow-md shadow-slate-200">
      <div className="sm:w-[20%] sm:block hidden text-3xl uppercase font-bold text-center">
        <Link to={brandLink ?? "#"}>{brand ?? ""}</Link>
      </div>

      <div className="w-3/5 sm:w-2/5 relative flex items-center">
        <input
          type="text"
          id="searchBox"
          className="w-full rounded-lg py-1 sm:py-2 pl-10 pr-4 outline-none border-2 border-slate-300 placeholder:text-slate-400 focus:border-teal-400"
          placeholder="Search Item"
        />
        <span className="absolute left-4 text-slate-400">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>

      <div className="w-2/5 sm:w-2/5 flex justify-between sm:justify-evenly text-xl sm:text-2xl">
        {children}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  brand: propTypes.string,
  brandLink: propTypes.string,
};

export default Navbar;
