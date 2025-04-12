// import React, { useEffect, useState } from "react";
// import TopNav from "./TopNav";
// import Header from "./Header";
// import Axios_API from "../api/axios_API";

// const Home = () => {
//   document.title = "Netflix | Home";

//   const [Wallpaper, setWallpaper] = useState(null);
//   const [AnimeList, setAnimeList] = useState([]);

//   const fetch_data_head = async () => {
//     try {
//       const { data } = await Axios_API.get("/anime");
//       console.log(data);
//       if (data.data.length > 0) {
//         let randomIndex = Math.floor(Math.random() * data.data.length);
//         let random_Data = data.data[randomIndex];
//         setWallpaper(random_Data);
//         setAnimeList(data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching anime data:", error);
//     }
//   };

//   useEffect(() => {
//     fetch_data_head();
//     document.body.classList.add("overflow-hidden"); // ✅ Prevent page scrolling

//     return () => {
//       document.body.classList.remove("overflow-hidden"); // ✅ Cleanup on unmount
//     };
//   }, []);

//   return (
//     <div className="w-full h-screen bg-zinc-900 flex flex-col">
//       {/* Top Navbar */}
//       <TopNav />

//       {/* Main Content (Fits in Remaining Space) */}
//       <div className="flex-1 p-5 text-white">
//         <Header data={Wallpaper || {}} AnimeList={AnimeList} />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import Header from "./Header";
import Axios_API from "../api/axios_API";
import Horizontal_Card from "./Horizontal_Card";
import Footer from "./Footer";

const Home = () => {
  document.title = "AniDex | Home";

  const [Wallpaper, setWallpaper] = useState(null);
  const [AnimeList, setAnimeList] = useState([]);
  const [Trending, setTrending] = useState([]);
  const [category, setcategory] = useState();
  const fetch_data_Trending = async () => {
    try {
      const { data } = await Axios_API.get("/recommendations/anime");
      // https://api.jikan.moe/v4/top/anime
      // console.log("recommendations : ", data);
      setTrending(data.data);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };
  const fetch_data_anime = async () => {
    try {
      const { data } = await Axios_API.get("/anime");
      // console.log(data);
      if (data.data.length > 0) {
        let randomIndex = Math.floor(Math.random() * data.data.length);
        let random_Data = data.data[randomIndex];
        setWallpaper(random_Data);
        setAnimeList(data.data);
      }
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  useEffect(() => {
    fetch_data_anime();
    fetch_data_Trending();
  }, []);

  useEffect(() => {
    console.log("Updated Trending Data: ", Trending);
  }, [Trending]); // Logs only when Trending updates

  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col">
      {/* Top Navbar */}
      <TopNav />

      {/* Main Content - Scrollable */}
      <div className="flex-1 p-5 text-white overflow-x-hidden overflow-y-auto">
        <Header data={Wallpaper || {}} AnimeList={AnimeList} />
        <Horizontal_Card data={Trending} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
