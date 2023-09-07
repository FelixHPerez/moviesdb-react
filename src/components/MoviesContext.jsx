import { createContext, useContext } from "react";
import useMovies from "../hooks/useMovies";
import useSearch from "../hooks/useSearch";

const MoviesContext = createContext();

export const useMoviesContext = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const { search, setSearch } = useSearch();
  const {
    movies,
    mediaDetails,
    favoriteMovies,
    loading,
    detailsLoading,
    noResults,
    getMovies,
    getMediaDetails,
    resetMovies,
    addToFavorites,
    removeFromFavorites,
  } = useMovies(search);

  return (
    <MoviesContext.Provider
      value={{
        search,
        setSearch,
        movies,
        mediaDetails,
        favoriteMovies,
        loading,
        detailsLoading,
        noResults,
        getMovies,
        getMediaDetails,
        resetMovies,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
