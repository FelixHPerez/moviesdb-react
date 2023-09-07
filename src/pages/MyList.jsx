import MoviesList from "../components/MoviesList";
import { Link } from "react-router-dom";
import { useMoviesContext } from "../components/MoviesContext";

const MyList = () => {
  const { favoriteMovies } = useMoviesContext();

  if (favoriteMovies.length > 0) return <MoviesList movies={favoriteMovies} />;

  return (
    <div className="flex flex-col justify-center items-center h-56 text-lg px-10 text-center gap-2">
      <p>Your list is empty.</p>
      <p>
        First{" "}
        <Link to="/" className="text-yellow-400 hocus:underline">
          search for a movie or tv show tittle
        </Link>
      </p>
    </div>
  );
};

export default MyList;
