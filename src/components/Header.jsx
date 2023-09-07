import { NavLink, useLocation } from "react-router-dom";
import SearchForm from "./SearchForm";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="relative flex justify-between bg-[#0c0c0c] bg-hero-img bg-cover px-4 items-center flex-none h-32 shadow-[0_10px_40px_10px_rgb(0,0,0/0.05),0_2px_4px_-2px_rgb(0,0,0/0.1)] shadow-black">
      <h1 className="flex text-3xl lg:text-5xl cursor-pointer font-semibold lg:font-bold">
        Movies
        <div className="w-0.5 flex items-center lg:w-1">
          <div className="bg-yellow-400 h-5/6 w-full"></div>
        </div>
        DB
      </h1>
      <nav>
        <NavLink
          to={isHomePage ? "/mylist" : "/"}
          className="text-lg lg:text-xl text-zinc-300 hocus:border-b-2 hocus:border-yellow-400"
        >
          {isHomePage ? "My List" : "Home"}
        </NavLink>
      </nav>
      {location.pathname === "/" && (
        <div className="absolute bottom-[calc(-36px/2)] lg:bottom-[calc(-44px/2)] left-0 right-0 z-[1]">
          <SearchForm />
        </div>
      )}
    </header>
  );
};

export default Header;
