import { useState } from "react";
import { useMoviesContext } from "./MoviesContext";
import { useLocation } from "react-router-dom";
import MovieModal from "./MovieModal";
import noImgAvailable from "../assets/no-image-available.jpg";

const Movie = ({ movie }) => {
  const { id, title, year, poster, type } = movie;
  const [openModal, setOpenModal] = useState(false);
  const {
    mediaDetails,
    favoriteMovies,
    getMediaDetails,
    detailsLoading,
    addToFavorites,
    removeFromFavorites,
  } = useMoviesContext();
  const isFavorite = favoriteMovies.some((favMovie) => favMovie.id === id);
  const location = useLocation();
  const isMyList = location.pathname === "/mylist";

  const handleOpenMovieModal = (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      setOpenModal(true);
      getMediaDetails(id, type);
    }
  };

  const toggleFavorite = () => {
    if (isFavorite && isMyList) {
      setOpenModal(false);
      setTimeout(() => removeFromFavorites(id), 400);
    } else if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <>
      <li
        tabIndex="0"
        className="cursor-pointer flex flex-col group shadow-md overflow-hidden mx-auto"
        onClick={handleOpenMovieModal}
        onKeyDown={handleOpenMovieModal}
        aria-label={`More details of ${title} ${year}`}
      >
        <img
          src={poster || noImgAvailable}
          alt={title}
          className="rounded-t-md group-hover:contrast-[.65] group-focus:contrast-[.65] transition-[filter]"
        />
        <div className="text-center p-2 bg-zinc-900 h-full rounded-b-md space-y-2">
          <h2 className="text-sm">{title}</h2>
          <p className="text-xs text-[#5a5a5a]">{year}</p>
        </div>
      </li>
      <MovieModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        mediaDetails={mediaDetails}
        detailsLoading={detailsLoading}
        isMyList={isMyList}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
};

export default Movie;
