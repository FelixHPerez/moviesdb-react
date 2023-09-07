import { useEffect } from "react";
import MoviesList from "../components/MoviesList";
import { FilmIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { useMoviesContext } from "../components/MoviesContext";

const Home = () => {
  const { setSearch, movies, loading, noResults, resetMovies } =
    useMoviesContext();

  useEffect(() => {
    resetMovies();
    setSearch("");
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <VideoCameraIcon
          className={`w-28 lg:w-32 text-yellow-400 ${
            loading ? "animate-loading" : ""
          } `}
          strokeWidth="1"
          strokeDasharray="50"
        />
      </div>
    );

  if (movies?.length > 0) return <MoviesList movies={movies} />;

  if (noResults)
    return (
      <div className="flex items-center text-[#606061] px-10 h-56">
        <p className="text-lg lg:text-xl text-center">
          Unable to find what you're looking for. Please try another search.
        </p>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center text-[#2E2E2F] h-56">
      <FilmIcon className={"w-20 h-20 lg:w-24 lg:h-24"} />
      <p className="text-lg lg:text-xl">Start exploring</p>
    </div>
  );
};

export default Home;
