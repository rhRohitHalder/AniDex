import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BackButton from "../Components/Back_button";

const Manga = () => {
  const [mangaList, setMangaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Starting page
  const [hasMore, setHasMore] = useState(true); // Flag if more pages exist

  const fetchManga = async (pageNumber) => {
    try {
      const res = await axios.get("https://api.jikan.moe/v4/manga", {
        params: {
          page: pageNumber,
          limit: 20, // adjust the limit as needed
          // You can add other parameters here if desired, e.g. order_by, sort, etc.
        },
      });
      // Append the new manga entries to the existing list.
      setMangaList((prev) => [...prev, ...res.data.data]);

      // Check the pagination data to see if there is a next page.
      if (res.data.pagination.has_next_page) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching manga:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManga(page);
  }, [page]);

  // Load more manga by increasing page number.
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);
  };

  return (
    <div className="w-full p-5 my-10">
      <div className="flex items-center justify-between bg-blue-800 rounded-md p-4 mb-5">
        <h1 className="text-4xl font-semibold text-white">Manga</h1>
        <BackButton />
      </div>
      {/* Grid Layout for all Manga Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mangaList.map((manga) => (
          <Link
            key={manga.mal_id}
            to={`/manga/${manga.mal_id}`}
            rel="noopener noreferrer"
            className="block bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Manga Image */}
            <img
              className="w-full h-56 object-cover"
              src={manga.images?.jpg?.large_image_url}
              alt={manga.title}
            />
            {/* Card Content */}
            <div className="p-4 text-white">
              <h2 className="text-3xl text-amber-400 font-bold">
                {manga.title}
              </h2>
              <p className="text-xl text-gray-400 mt-1">
                <span className="font-semibold">Chapters:</span>{" "}
                {manga.chapters || "N/A"}
              </p>
              <p className="text-xl text-gray-400">
                <span className="font-semibold">Volumes:</span>{" "}
                {manga.volumes || "N/A"}
              </p>
              <p className="text-xl text-gray-400">
                <span className="font-semibold">Score:</span>{" "}
                {manga.score || "N/A"}
              </p>
              <p className="text-xl text-gray-400">
                <span className="font-semibold">ID:</span>{" "}
                {manga.mal_id || "N/A"}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* "Load More" Button */}
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

export default Manga;
