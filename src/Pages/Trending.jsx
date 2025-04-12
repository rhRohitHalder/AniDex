import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Mixed() {
  const [animeRecs, setAnimeRecs] = useState([]);
  const [mangaRecs, setMangaRecs] = useState([]);
  const [animeTrending, setAnimeTrending] = useState([]);
  const [mangaTrending, setMangaTrending] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [animeRecRes, mangaRecRes, animeTrendRes, mangaTrendRes] =
          await Promise.all([
            axios.get("https://api.jikan.moe/v4/recommendations/anime"),
            axios.get("https://api.jikan.moe/v4/recommendations/manga"),
            axios.get("https://api.jikan.moe/v4/top/anime?filter=bypopularity"),
            axios.get("https://api.jikan.moe/v4/top/manga?filter=bypopularity"),
          ]);

        setAnimeRecs(animeRecRes.data.data.slice(0, 10));
        setMangaRecs(mangaRecRes.data.data.slice(0, 10));
        setAnimeTrending(animeTrendRes.data.data.slice(0, 10));
        setMangaTrending(mangaTrendRes.data.data.slice(0, 10));
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError("Too many requests. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const renderCard = (item, type = "recommendation", category = "anime") => {
    const entry = type === "recommendation" ? item.entry[0] : item;
    const isAnime = category === "anime";

    const detailLink = isAnime
      ? `/Details/${entry.mal_id}`
      : `/manga/${entry.mal_id}`;

    return (
      <Link
        key={entry.mal_id}
        to={detailLink}
        rel="noopener noreferrer"
        className="block bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
      >
        {/* Image */}
        <img
          className="w-full h-56 object-cover"
          src={
            entry.images?.jpg?.large_image_url || entry.images?.jpg?.image_url
          }
          alt={entry.title}
        />

        {/* Card Content */}
        <div className="p-4 text-white">
          <h2 className="text-2xl font-bold text-amber-400">{entry.title}</h2>

          {/* Score (shown in both types) */}
          <p className="text-md text-gray-400">
            <span className="font-semibold">Score:</span> {entry.score || "N/A"}
          </p>

          <p className="text-md text-gray-400">
            <span className="font-semibold">ID:</span> {entry.mal_id}
          </p>
        </div>
      </Link>
    );
  };

  if (error) return <div className="p-4 text-red-500 font-bold">{error}</div>;

  return (
    <div className="p-6 space-y-10">
      <section>
        <div className="flex items-center justify-between bg-blue-800 rounded-md p-4 mb-5">
          <h1 className="text-4xl font-semibold text-white">Trending Anime</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {animeTrending.map((item) => renderCard(item, "trending", "anime"))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between bg-blue-800 rounded-md p-4 mb-5">
          <h2 className="text-3xl font-bold mb-4">Trending Manga</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {mangaTrending.map((item) => renderCard(item, "trending", "manga"))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between bg-blue-800 rounded-md p-4 mb-5">
          <h2 className="text-3xl font-bold mb-4">Recommended Anime</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {animeRecs.map((item) => renderCard(item, "recommendation", "anime"))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between bg-blue-800 rounded-md p-4 mb-5">
        <h2 className="text-3xl font-bold mb-4">Recommended Manga</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {mangaRecs.map((item) => renderCard(item, "recommendation", "manga"))}
        </div>
      </section>
    </div>
  );
}
