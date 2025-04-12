import React from "react";
import Drop_down from "./Drop_down";
import { Link } from "react-router-dom";

const CardList = ({ data }) => {
  return (
    <div className="w-full p-5 my-10">
      {/* Header */}
      <div className="mb-5  bg-red-800 flex justify-between rounded-md items-center">
        <h1 className="text-4xl font-semibold rounded-md p-2 text-white">
          Trending Anime
        </h1>
        <Drop_down options={["Anime", "Manga"]} />
      </div>

      {/* Grid Layout for All Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((e, i) => {
          const anime = e.entry[0]; // Extract first anime entry

          return (
            <Link
              key={i}
              // href={anime?.url}
              // href={`https://myanimelist.net/anime/${anime?.mal_id}`}
              to={`/Details/${anime?.mal_id}`}
              // target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Anime Image */}
              <img
                className="w-full h-56 object-cover"
                src={anime?.images?.jpg?.large_image_url}
                alt={anime?.title}
              />

              {/* Card Content */}
              <div className="p-4 text-white">
                <h2 className="text-3xl text-amber-400 font-bold">
                  {anime?.title}
                </h2>

                <p className="text-xl text-gray-400 mt-1">
                  <span className="font-semibold">Episodes:</span>
                  {anime?.episodes || "N/A"}
                </p>
                <p className="text-xl text-gray-400">
                  <span className="font-semibold">Rating:</span>
                  {anime?.score || "N/A"}
                </p>
                <p className="text-xl text-gray-400">
                  <span className="font-semibold">id : </span>
                  {anime?.mal_id || "N/A"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
