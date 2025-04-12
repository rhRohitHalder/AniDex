// import React from "react";

// const Details = () => {

//   const { id } = useParams();
//   console.log(id);

//   return (
//     <div
//       className="relative w-full min-h-screen p-10 bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-auto"
//       // style={{
//       //   backgroundImage:
//       //     "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfFrm_bWNdQVD5oHAqSqUKp1kgvllXCTxTPxvedp8WdeXLDgJJdpWUyB-WPlPvSbixlg&usqp=CAU')",
//       // }}
//     >
//       {/* Dark Overlay */}
//       {/* <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div> */}

//       {/* Content */}
//       <div className="relative z-10">
//         <div className="card lg:card-side bg-base-80 shadow-sm">
//           <figure className="w-full flex justify-center">
//             <img
//               src="https://cdn.myanimelist.net/images/anime/4/19644l.jpg"
//               alt="Album"
//               className=" min-w-[300px] min-h-[300px] max-w-none"
//             />
//           </figure>

//           <div className="card-body">
//             {/* <h2 className="card-title">New album is released!</h2> */}
//             <h1 class="text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem] font-bold text-neutral-50 mb-1 md:mb-2">
//               One Piece
//             </h1>
//             {/* detail */}
//             <div class="flex flex-wrap items-center gap-2">
//               <span class="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-neutral-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-2 rounded-lg">
//                 TV
//               </span>
//               <span class="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-neutral-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-2 rounded-lg">
//                 Eps ??
//               </span>
//               <span class="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-neutral-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-2 rounded-lg">
//                 24 min
//               </span>
//               <span class="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-neutral-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-2 rounded-lg">
//                 ★ 8.73
//               </span>
//               <span class="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-neutral-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-2 rounded-lg">
//                 ❤ 235789
//               </span>
//             </div>
//             {/* xkjdskj */}
//             <div class="flex items-center gap-x-4 text-neutral-100 mt-4 md:mt-5">
//               <a
//                 target="_blank"
//                 class="flex items-center gap-x-2 text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] border border-neutral-100 px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-neutral-100 hover:text-neutral-950 transition-colors duration-300 ease-in-out"
//                 href="https://www.youtube.com/watch?v=-tviZNY6CSw"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="lucide lucide-circle-play"
//                 >
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <polygon points="10 8 16 12 10 16 10 8"></polygon>
//                 </svg>{" "}
//                 Watch Trailer
//               </a>
//               <button
//                 aria-label="Bookmark"
//                 title="Bookmark"
//                 class="flex items-center gap-x-2 text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-neutral-100 hover:text-neutral-950 transition-colors duration-300 ease-in-out
//           "
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="lucide lucide-bookmark"
//                 >
//                   <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
//                 </svg>{" "}
//                 Bookmark
//               </button>
//             </div>
//             <p class="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-neutral-200 mt-4 md:mt-6 text-balance">
//               Barely surviving in a barrel after passing through a terrible
//               whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship
//               under attack by fearsome pirates. Despite being a naive-looking
//               teenager, he is not to be underestimated. Unmatched in battle,
//               Luffy is a pirate himself who resolutely pursues the coveted One
//               Piece treasure and the King of the Pirates title that comes with
//               it. The late King of the Pirates, Gol D. Roger, stirred up the
//               world before his death by disclosing the whereabouts of his hoard
//               of riches and daring everyone to obtain it. Ever since then,
//               countless powerful pirates have sailed dangerous seas for the
//               prized One Piece only to never return. Although Luffy lacks a crew
//               and a proper ship, he is endowed with a superhuman ability and an
//               unbreakable spirit that make him not only a formidable adversary
//               but also an inspiration to many. As he faces numerous challenges
//               with a big smile on his face, Luffy gathers one-of-a-kind
//               companions to join him in his ambitious endeavor, together
//               embracing perils and wonders on their once-in-a-lifetime
//               adventure. [Written by MAL Rewrite]
//             </p>
//             {/* <div className="card-actions justify-end">
//             <button className="btn btn-primary">Listen</button>
//           </div> */}
//             <div className="flex flex-wrap gap-2 mt-4">
//               <span className="text-neutral-200 bg-violet-950/50 border border-violet-900 px-2 py-1 rounded-lg">
//                 Action
//               </span>
//               <span className="text-neutral-200 bg-violet-950/50 border border-violet-900 px-2 py-1 rounded-lg">
//                 Adventure
//               </span>
//               <span className="text-neutral-200 bg-violet-950/50 border border-violet-900 px-2 py-1 rounded-lg">
//                 Fantasy
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="flex w-full flex-col ">
//         <div className="divider divider-warning">Characters</div>
//       </div> */}
//       <div className="flex w-full flex-col items-center">
//         <div className="divider divider-warning">Trailer</div>
//         <div className="w-full max-w-4xl aspect-video">
//           <iframe
//             className="w-full h-full rounded-lg"
//             src="https://www.youtube.com/embed/uXWycyeTeCs"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"; // Import axios

const Badge = ({ children }) => (
  <span className="text-neutral-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-2 rounded-lg">
    {children}
  </span>
);

const Details = () => {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null);
  const [animeCharacters, setAnimeCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animeRecommendations, setAnimeRecommendations] = useState([]);
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}/full`
        );
        setAnimeData(res.data.data);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      }
    };

    const fetchAnimeCharacters = async () => {
      try {
        const res = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}/characters`
        );
        setAnimeCharacters(res.data.data);
        console.log(res.data.data); // For debugging
      } catch (error) {
        console.error("Error fetching anime characters:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAnimeRecommendations = async () => {
      try {
        const res = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}/recommendations`
        );
        setAnimeRecommendations(res.data.data);
      } catch (error) {
        console.error("Error fetching anime recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
    fetchAnimeCharacters();
    fetchAnimeRecommendations();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  if (!animeData) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-red-400 text-2xl">
        Failed to load anime details.
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen p-10 bg-black overflow-x-hidden overflow-y-auto text-white">
      <div className="relative z-10">
        <div className="card lg:card-side bg-base-80 shadow-sm">
          <figure className="w-full flex justify-center">
            <img
              src={animeData.images?.jpg?.large_image_url || "/fallback.jpg"}
              alt={animeData.title}
              className="min-w-[300px] min-h-[300px] max-w-none object-cover"
            />
          </figure>

          <div className="card-body">
            <h1 className="text-[2rem] font-bold text-neutral-50 mb-2">
              {animeData.title || "Unknown Title"}
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              <Badge>{animeData.type}</Badge>
              <Badge>Eps: {animeData.episodes || "?"}</Badge>
              <Badge>{animeData.duration || "?"}</Badge>
              <Badge>★ {animeData.score || "?"}</Badge>
              <Badge>❤ {animeData.favorites || "?"}</Badge>
            </div>

            <div className="flex items-center gap-x-4 text-neutral-100 mt-5">
              {animeData.trailer?.url && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={animeData.trailer.url}
                  className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                >
                  Watch Trailer
                </a>
              )}
              <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
                Bookmark
              </button>
            </div>

            <p className="text-neutral-200 mt-6">
              {animeData.synopsis || "No description available."}
            </p>

            {animeData.genres?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {animeData.genres.map((genre) => (
                  <span
                    key={genre.mal_id}
                    className="text-neutral-200 bg-violet-950/50 border border-violet-900 px-2 py-1 rounded-lg"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Embedded Trailer */}
      {animeData.trailer?.embed_url && (
        <div className="flex w-full flex-col items-center mt-10">
          <div className="divider divider-warning">Trailer</div>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={animeData.trailer.embed_url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Characters Section */}
      {animeCharacters.length > 0 && (
        <div className="mt-10">
          <div className="divider divider-warning">Characters</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {animeCharacters.map((character) => (
              <Link
                to={character.character.url}
                key={character.character.mal_id}
                target="_blank"
                className="card bg-base-100 shadow-md"
              >
                <figure className="flex justify-center">
                  <img
                    src={character.character.images?.jpg?.image_url}
                    alt={character.character.name}
                    className=" mt-5 w-30 h-30 object-cover rounded-full"
                  />
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-xl font-bold">
                    {character.character.name}
                  </h2>
                  <p className="text-lg font-extrabold text-neutral-400">
                    {character.role}
                  </p>

                  {character.voice_actors.length > 0 && (
                    <div className="mt-0">
                      <p className="text-sm ">Voice Actors:</p>
                      {character.voice_actors.map((voiceActor) => (
                        <div key={voiceActor.person.mal_id}>
                          <p className="text-neutral-300 text-xs">
                            {voiceActor.person.name} ({voiceActor.language})
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations Section */}
      <div className="divider divider-warning">Recommendations</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {animeRecommendations?.map((recommendation, i) => {
          const anime = recommendation.entry; // Extract the entry object
          return (
            <Link
              key={i}
              to={`/Details/${anime?.mal_id}`}
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
                  <span className="font-semibold">ID:</span>
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

export default Details;
