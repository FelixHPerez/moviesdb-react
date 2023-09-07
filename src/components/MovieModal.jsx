import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  StarIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import noImgAvailable from "../assets/no-image-available.jpg";
import { SpinnerIcon } from "./Icons";
import ProductionTeamList from "./ProductionTeamList";

const MovieModal = ({
  openModal,
  setOpenModal,
  mediaDetails,
  detailsLoading,
  isMyList,
  isFavorite,
  toggleFavorite,
}) => {
  const {
    title,
    year,
    duration,
    genres,
    creator,
    director,
    cast,
    plot,
    backdrop,
    poster,
    rating,
    type,
  } = mediaDetails;

  return (
    <Transition show={openModal} as={Fragment}>
      <Dialog
        onClose={setOpenModal}
        className="fixed inset-0 z-10 overflow-y-scroll py-6 px-5 pb-10 lg:px-36 transition-[padding] flex items-center"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        </Transition.Child>
        {detailsLoading ? (
          <div className="fixed inset-0 flex justify-center items-center">
            <SpinnerIcon className="animate-spin w-20 h-20" />
          </div>
        ) : (
          <>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-75"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-75"
            >
              <Dialog.Panel className="relative rounded-lg max-h-[90vh]">
                <div className="md:h-96 overflow-hidden relative transition-[height] rounded-t-lg bg-zinc-800">
                  {rating > 0 && (
                    <div className="absolute top-4 left-4 bg-gray-500 h-10 w-20 lg:w-24 rounded-full z-10 flex justify-center items-center lg:px-2">
                      <StarIcon className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-300" />
                      <span className="text-xs lg:text-base font-extralight lg:font-light">
                        &nbsp;{rating?.toFixed(1)}&nbsp;/&nbsp;10
                      </span>
                    </div>
                  )}
                  <div
                    className="absolute top-4 right-4 cursor-pointer z-10 flex justify-center items-center"
                    onClick={() => setOpenModal(false)}
                    aria-label={`Close ${title} window`}
                  >
                    <XMarkIcon
                      className="h-10 w-10 p-2 rounded-full bg-zinc-800 hocus:bg-zinc-900 transition-[background-color]"
                      tabIndex="0"
                    />
                  </div>
                  <div className="absolute inset-0 shadow-[inset_0_0_200px_-12px_rgb(0,0,0/0.25)] shadow-black"></div>
                  <img src={backdrop || poster || noImgAvailable} alt={title} />
                </div>
                <div className="p-4 lg:p-6 bg-zinc-700 space-y-4">
                  <div className="space-y-4 lg:space-y-5">
                    <header className="flex items-center">
                      <Dialog.Title className="lg:text-4xl md:text-2xl text-lg font-bold leading-none">
                        {title}
                      </Dialog.Title>
                      <div className="divide-x-2 divide-yellow-200 flex items-center space-x-8 text-xs lg:text-sm">
                        <div></div>
                        {year && (
                          <p className="text-zinc-400 rounded-full p-2">
                            {year}
                          </p>
                        )}
                        <p className="text-zinc-400 divide-x rounded-full p-2 whitespace-nowrap">
                          {type === "movie" ? "Movie" : "TV Series"}
                        </p>
                      </div>
                    </header>
                    <section className="space-y-2">
                      {duration || genres ? (
                        <div className="space-x-2 sm:space-x-4 md:space-x-6 text-zinc-500 text-xs lg:text-sm flex">
                          {duration !== 0 && type !== "tv" ? (
                            <p>{duration} min</p>
                          ) : null}
                          {genres.length > 0 &&
                            genres.map((genre) => (
                              <p
                                key={genre.id}
                                className="px-2 bg-zinc-400 rounded-full text-center inline-flex items-center"
                              >
                                {genre.name}
                              </p>
                            ))}
                        </div>
                      ) : null}
                      <Dialog.Description className="text-zinc-400 text-sm lg:text-base">
                        {plot}
                      </Dialog.Description>
                    </section>
                  </div>
                  {creator?.length > 0 ||
                  director?.length > 0 ||
                  cast?.length > 0 ? (
                    <ProductionTeamList
                      creatorList={creator}
                      directorList={director}
                      castList={cast}
                    />
                  ) : null}
                </div>
                <button
                  className={`flex items-center w-full rounded-b-lg justify-center h-10 text-zinc-600 hocus:text-zinc-800 space-x-2 text-sm lg:text-lg lg:h-12 transition-[height,_background-color,_color] duration-300 ${
                    isFavorite
                      ? "bg-red-300  hocus:bg-red-400"
                      : "bg-yellow-200 hocus:bg-yellow-300"
                  }`}
                  onClick={toggleFavorite}
                  aria-label={
                    isFavorite
                      ? `Remove ${title} from my list`
                      : `Add ${title} to my list`
                  }
                >
                  {isFavorite ? (
                    <MinusCircleIcon className="w-5 h-5 lg:w-5 lg:h-5" />
                  ) : (
                    <PlusCircleIcon className="w-5 h-5 lg:w-5 lg:h-5" />
                  )}
                  <span>
                    {isFavorite ? "Remove from my list" : "Add to my list"}
                  </span>
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </>
        )}
      </Dialog>
    </Transition>
  );
};

export default MovieModal;
