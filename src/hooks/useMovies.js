import { useEffect, useRef, useState } from "react";
import { searchMedia, searchMediaDetails } from "../services/movies";

const useMovies = (search) => {
  const [movies, setMovies] = useState([]);
  const [mediaDetails, setMediaDetails] = useState({});
  const [favoriteMovies, setFavoriteMovies] = useState(
    () => JSON.parse(localStorage.getItem("favoriteMovies")) || []
  );
  const [loading, setLoading] = useState(false);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const previousSearch = useRef(search);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const filteredMovies = movies?.filter(
    (movie) => movie.media_type !== "person"
  );

  const mappedMovies = filteredMovies.map((movie) => {
    const year = movie.release_date ?? movie.first_air_date;
    const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return {
      id: movie.id,
      title: movie.title ?? movie.name,
      year: year && new Date(year).getFullYear(),
      poster: movie.poster_path && poster,
      type: movie.media_type,
    };
  });

  const transformedMovie = {
    title: mediaDetails?.title ?? mediaDetails.name,
    year:
      (mediaDetails.release_date ?? mediaDetails.first_air_date) &&
      new Date(
        mediaDetails.release_date ?? mediaDetails.first_air_date
      ).getFullYear(),
    duration: mediaDetails?.runtime,
    genres: mediaDetails?.genres,
    creator: mediaDetails?.created_by?.map((person) => ({
      id: person.id,
      name: person.name,
    })),
    director: mediaDetails?.credits?.crew?.filter(
      (person) => person.job === "Director" || person.job === "Series Director"
    ),
    cast: mediaDetails?.credits?.cast?.map((actor) => ({
      id: actor.id,
      name: actor.name,
    })),
    plot: mediaDetails?.overview,
    backdrop:
      mediaDetails?.backdrop_path &&
      `https://image.tmdb.org/t/p/original${mediaDetails?.backdrop_path}`,
    poster:
      mediaDetails?.poster_path &&
      `https://image.tmdb.org/t/p/original${mediaDetails?.poster_path}`,
    rating: mediaDetails?.vote_average,
    type: mediaDetails?.type,
  };

  const getMovies = async (search) => {
    if (previousSearch.current === search) return;

    try {
      setLoading(true);
      previousSearch.current = search;
      const data = await searchMedia(search);
      if (!data.total_results) {
        setNoResults(true);
        setMovies([]);
        return;
      }
      setMovies(data.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getMediaDetails = async (id, type) => {
    try {
      setDetailsLoading(true);
      const data = await searchMediaDetails(id, type);
      const newData = { ...data, type };
      setMediaDetails(newData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setDetailsLoading(false);
    }
  };

  const resetMovies = () => {
    setMovies([]);
    setNoResults(false);
    previousSearch.current = "";
  };

  const addToFavorites = (newMovie) => {
    setFavoriteMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavoriteMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  return {
    movies: mappedMovies,
    mediaDetails: transformedMovie,
    favoriteMovies,
    loading,
    detailsLoading,
    noResults,
    getMovies,
    getMediaDetails,
    resetMovies,
    addToFavorites,
    removeFromFavorites,
  };
};

export default useMovies;
