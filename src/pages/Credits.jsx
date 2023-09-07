import { TmdbLogo } from "../components/Icons";

const Credits = () => {
  return (
    <div className="space-y-10 text-center px-20">
      <p className="text-zinc-400 md:text-lg lg:text-xl">
        This product uses the{" "}
        <a
          href="https://developer.themoviedb.org/reference/intro/getting-started"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#90cea1]"
        >
          TMDB API
        </a>{" "}
        but is not endorsed or certified by TMDB.
      </p>
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <TmdbLogo className="w-44 md:w-72 lg:w-80" />
      </a>
    </div>
  );
};
export default Credits;
