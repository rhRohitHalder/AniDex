import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios_API from "../api/axios_API"; // custom axios instance

const TopNav = () => {
  const [search, setSearch] = useState(""); // user input
  const [results, setResults] = useState([]); // anime list from API
  const [loading, setLoading] = useState(false); // loading state

  // Fetch anime list based on search input
  const handleSearch = async (query) => {
    if (!query) return;

    try {
      setLoading(true);
      // console.log("Searching for:", query); // input going to API
      const res = await Axios_API.get(`/anime`, {
        params: {
          q: query,
          limit: 10,
          // Safe For Work = No adult content
          sfw: true,
          // order_by:mal_id
        },
      });
      // console.log("Fetched Data:", res.data.data.data); // what we got back

      setResults(res.data.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching anime search:", error);
      setLoading(false);
    }
  };

  // Watch input and trigger search
  useEffect(() => {
    // console.log("Search Term:", search); // log the input
    // console.log("Current Results:", results); // log existing results
    const timer = setTimeout(() => {
      if (search.trim().length > 0) {
        handleSearch(search.trim());
      } else {
        setResults([]);
      }
    }, 300); // debounce input by 500ms

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="relative w-[50%] mx-auto p-2 flex flex-col items-start gap-2 text-white">
      {/* Search Input Field */}
      <div className="flex items-center gap-2 w-full">
        <i className="ri-search-line text-3xl bg-cyan-900 p-2 rounded-full"></i>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for Anime..."
          className="w-full p-3 bg-black rounded-md focus:outline-none"
        />
        {search && (
          <i
            className="ri-close-fill cursor-pointer text-3xl bg-cyan-900 p-2 rounded-full"
            onClick={() => setSearch("")}
          ></i>
        )}
      </div>

      {/* Search Results Dropdown */}
      {search.length > 0 && (
        <div className="absolute w-full max-h-[60vh] top-[100%] mt-2 z-10 bg-zinc-800 rounded-lg overflow-y-auto shadow-lg">
          {loading ? (
            <p className="text-center text-gray-400 py-5">Loading...</p>
          ) : results.length > 0 ? (
            results.map((anime) => (
              <Link
              to={`/Details/${anime?.mal_id}`} // Assuming you have a detail route like /anime/:id
                key={anime.mal_id}
                className="flex items-center gap-3 p-3 hover:bg-zinc-700 border-b border-zinc-700 duration-300"
              >
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  className="w-12 h-16 object-cover rounded-md"
                />
                <span className="text-xl font-bold text-white">
                  {anime.title}
                </span>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-400 py-5">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TopNav;
