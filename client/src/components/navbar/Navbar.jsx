import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEnvelope,
  faBell,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="w-full fixed py-3 px-5 flex items-center gap-4 shadow-md shadow-slate-200">
      <div className="sm:w-[20%] sm:block hidden text-3xl uppercase font-bold text-center">
        Brand
      </div>

      <div className="w-1/2 sm:w-2/5 relative flex items-center">
        <input
          type="text"
          id="searchBox"
          className="w-full rounded-lg py-2 pl-10 pr-4 outline-none border-2 border-slate-300 placeholder:text-slate-400 focus:border-teal-400"
          placeholder="Search Item"
        />
        <span className="absolute left-4 text-slate-400">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>

      <div className="w-1/2 sm:w-2/5 flex justify-evenly text-2xl">
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faShoppingCart} />
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
