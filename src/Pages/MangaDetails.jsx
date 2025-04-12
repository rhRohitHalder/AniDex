import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const MangaDetails = () => {
  const { id } = useParams();
  const [manga, setManga] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMangaDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/manga/${id}/full`
        );
        setManga(response.data.data);
      } catch (error) {
        console.error("Error fetching manga details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMangaDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  if (!manga) {
    return (
      <div className="text-red-400 flex items-center justify-center h-screen text-2xl">
        Failed to load manga details.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      {/* Back Button */}
      <Link
        to="/manga"
        className="text-blue-500 hover:bg-yellow-400 mb-5 inline-block bg-blue-950 p-3 rounded-md"
      >
        &larr; Back to Manga List
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Manga Image */}
        <div className="w-full md:w-1/3">
          <img
            src={manga.images?.jpg?.large_image_url || "/fallback.jpg"}
            alt={manga.title}
            className="object-cover rounded-md"
          />
        </div>

        {/* Manga Details */}
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{manga.title}</h1>

          {manga.title_english && (
            <h2 className="text-2xl mb-2">{manga.title_english}</h2>
          )}

          {manga.title_japanese && (
            <p className="mb-2">
              <span className="font-semibold">Japanese Title:</span>{" "}
              {manga.title_japanese}
            </p>
          )}

          <p className="mb-2">
            <span className="font-semibold">Type:</span> {manga.type}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Chapters:</span>{" "}
            {manga.chapters || "N/A"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Volumes:</span>{" "}
            {manga.volumes || "N/A"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Status:</span> {manga.status}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Score:</span> {manga.score || "N/A"}
          </p>
          <p className="mb-4">{manga.synopsis}</p>

          {manga.authors?.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold">Authors:</h3>
              <ul>
                {manga.authors.map((author) => (
                  <li key={author.mal_id}>{author.name}</li>
                ))}
              </ul>
            </div>
          )}

          {manga.genres?.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-1">Genres:</h3>
              <ul className="flex flex-wrap gap-2">
                {manga.genres.map((genre) => (
                  <li
                    key={genre.mal_id}
                    className="bg-gray-800 px-2 py-1 rounded text-sm"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {manga.external?.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-1">External Links:</h3>
              <ul>
                {manga.external.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MangaDetails;
