// import React from "react";

// const Header = ({ data }) => {
//   console.log(data);

//   return (
//     <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden bg-zinc-800 p-4 w-full h-auto md:h-[50vh] shadow-lg">
//       {/* Left: Anime Image */}
//       <div className="w-full md:w-1/3 h-[40vh] md:h-full">
//         <img
//           src={data?.images?.jpg?.large_image_url}
//           alt="Album"
//           className="w-full h-full object-cover rounded-lg"
//         />
//       </div>

//       {/* Right: Anime Details */}
//       <div className="flex flex-col justify-between w-full md:w-2/3 p-6 space-y-4 text-white">
//         {/* Title */}
//         <div className="text-center md:text-left text-4xl md:text-7xl font-bold text-amber-400">
//           {data?.title || "Unknown"}
//         </div>

//         {/* Genres */}
//         <div className="flex flex-wrap justify-center md:justify-start gap-2">
//           {data?.genres?.map((genre) => (
//             <span
//               key={genre.mal_id}
//               className="text-lg font-semibold bg-amber-600 text-black px-3 py-1 rounded-md shadow-md"
//             >
//               {genre.name}
//             </span>
//           ))}
//         </div>
//        {/* Rating (Fixed) */}
//        <div className="text-lg font-semibold bg-amber-600 text-black px-3 py-1 rounded-md shadow-md w-fit">
//           ⭐ Rating: {data?.score ?? "N/A"}
//         </div>
//         {/* Synopsis */}
//         <div className="text-center md:text-left text-lg text-gray-300 leading-relaxed line-clamp-3">
//           {data?.synopsis}
//         </div>

//         {/* Watch Trailer Button */}

//         {data?.trailer?.url && (
//           <a
//             href={data.trailer.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className=" w-full md:w-auto bg-blue-700 hover:bg-blue-600 transition-all duration-300 text-white font-semibold text-lg py-2 px-6 rounded-md shadow-lg text-center"
//           >
//             Watch Trailer
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ AnimeList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (AnimeList.length === 0) return; // Prevent running interval if no data

    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Auto-slide every 5s

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex, AnimeList]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? AnimeList.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === AnimeList.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (AnimeList.length === 0) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center text-white">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  const data = AnimeList[currentIndex]; // Get current anime

  return (
    <div className="relative w-full h-auto md:h-[55vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={data?.mal_id}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden bg-zinc-800 p-4 w-full h-auto md:h-[50vh] shadow-lg"
        >
          {/* Left: Anime Image */}
          <div className="w-full md:w-1/3 h-[40vh] md:h-full">
            <Link to={`/Details/${data?.mal_id}`}>
              <img
                src={data?.images?.jpg?.large_image_url}
                alt={data?.title || "Anime"}
                className="w-full h-full object-cover rounded-lg"
              />
            </Link>
          </div>

          {/* Right: Anime Details */}
          <div className="flex flex-col justify-between w-full md:w-2/3 p-6 space-y-4 text-white">
            <Link
              to={`/Details/${data?.mal_id}`}
              className="text-center md:text-left text-4xl md:text-7xl font-bold text-amber-400 hover:underline"
            >
              {data?.title || "Unknown"}
            </Link>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {data?.genres?.map((genre) => (
                <span
                  key={genre.mal_id}
                  className="text-lg font-semibold bg-amber-600 text-black px-3 py-1 rounded-md shadow-md"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="text-lg font-semibold bg-amber-600 text-black px-3 py-1 rounded-md shadow-md w-fit">
              ⭐ Rating: {data?.score ?? "N/A"}
            </div>

            <div className="text-center md:text-left text-lg text-gray-300 leading-relaxed line-clamp-3">
              {data?.synopsis}
            </div>

            {(data?.trailer?.url ||
              "https://www.youtube.com/watch?v=-tviZNY6CSw") && (
              <a
                href={
                  data?.trailer?.url ||
                  "https://www.youtube.com/watch?v=-tviZNY6CSw"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-blue-700 hover:bg-blue-600 transition-all duration-300 text-white font-semibold text-lg py-2 px-6 rounded-md shadow-lg text-center mt-15"
              >
                Watch Trailer
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 z-10"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 z-10"
      >
        <ChevronRight size={30} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {AnimeList.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
