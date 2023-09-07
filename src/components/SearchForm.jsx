import { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SpinnerIcon } from "./Icons";
import { useMoviesContext } from "./MoviesContext";

const SearchForm = () => {
  const [isInputValid, setIsInputValid] = useState(false);
  const { search, setSearch, getMovies, loading } = useMoviesContext();

  const handleChange = (e) => {
    setSearch(e.target.value);
    setIsInputValid(e.target.value.trim() !== "");
  };

  const handleResetSearch = () => {
    setSearch("");
    setIsInputValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      getMovies(search.toLowerCase());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center px-8 gap-2">
      <div className="relative w-full sm:w-4/6 lg:w-3/6 transition-[width]">
        <span className="absolute inset-y-0 left-1.5 lg flex items-center text-[#9CA3AF]">
          <MagnifyingGlassIcon className="w-5 h-5" />
        </span>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Spider-man, The Godfather, Repo man"
          className="bg-[#2E2E2F] py-2 pl-8 pr-12 rounded-lg text-sm placeholder:text-ellipsis w-full lg:text-lg placeholder:text-[#a5a5a59d] text-ellipsis"
          aria-label="Search a movie"
        />
        <span
          className={`absolute inset-y-0 right-1.5 flex items-center cursor-pointer ${
            search ? "inline" : "hidden"
          }`}
          onClick={handleResetSearch}
          onKeyDown={handleResetSearch}
        >
          <XMarkIcon
            className="w-6 h-6 p-1 rounded-full bg-zinc-900 hocus:bg-zinc-600"
            tabIndex="0"
            aria-label="Reset the search field"
          />
        </span>
      </div>
      <button
        className="rounded-lg px-4 text-sm lg:text-lg text-black enabled:bg-yellow-300 disabled:bg-yellow-100 disabled:text-zinc-400 disabled:cursor-not-allowed transition-colors"
        disabled={!isInputValid || loading}
      >
        {loading ? (
          <div className="w-10 lg:w-10">
            <SpinnerIcon className="animate-spin h-5 w-5 mx-auto" />
          </div>
        ) : (
          "Search"
        )}
      </button>
    </form>
  );
};

export default SearchForm;
