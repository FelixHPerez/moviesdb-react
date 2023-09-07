import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-y-8 gap-x-4 px-4 pb-10 flex-auto justify-center mt-20">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
