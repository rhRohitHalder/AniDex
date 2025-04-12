import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BackButton from "../Components/Back_button";

const PopularAnime = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Start at page 1
  const [hasMore, setHasMore] = useState(true); // Flag to know if more pages exist

  const fetchAnime = async (pageNumber) => {
    try {
      const res = await axios.get("https://api.jikan.moe/v4/anime", {
        params: {
          page: pageNumber,
          limit: 20, // Adjust the limit as needed
          order_by: "popularity",
          sort: "asc",
        },
      });
      // Append new anime entries to the existing list
      setAnimeList((prev) => [...prev, ...res.data.data]);
      // Check pagination metadata to see if more pages exist
      if (res.data.pagination.has_next_page) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching popular anime:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnime(page);
    // We want to re-run only when page changes, not all the time.
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);
  };

  return (
    <div className="w-full p-5 my-10">
      <div className="flex items-center justify-between bg-blue-800 rounded-md p-4 mb-5">
        <h1 className="text-4xl font-semibold text-white">Popular Anime</h1>
        <BackButton />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animeList.map((anime) => (
          <Link
            key={anime.mal_id}
            to={`/Details/${anime.mal_id}`}
            rel="noopener noreferrer"
            className="block bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              className="w-full h-56 object-cover"
              src={anime.images?.jpg?.large_image_url}
              alt={anime.title}
            />
            <div className="p-4 text-white">
              <h2 className="text-3xl text-amber-400 font-bold">
                {anime.title}
              </h2>
              <p className="text-xl text-gray-400 mt-1">
                <span className="font-semibold">Episodes:</span>{" "}
                {anime.episodes || "N/A"}
              </p>
              <p className="text-xl text-gray-400">
                <span className="font-semibold">Rating:</span>{" "}
                {anime.score || "N/A"}
              </p>
              <p className="text-xl text-gray-400">
                <span className="font-semibold">ID:</span>{" "}
                {anime.mal_id || "N/A"}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 transition"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PopularAnime;
