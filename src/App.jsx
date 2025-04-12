// import "./App.css";
// import { Route, Routes } from "react-router-dom";
//  import Home from "./Components/Home";
// import NavBar from "./Components/NavBar";

// function App() {
//   return (
//     <div className="w-screen h-screen bg-[#0F0F0F] flex">
//       {/* Sidebar */}
//       <NavBar />
//       {/* Main Content */}
//       <div className="w-[85%] h-full">
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Anime from "./Pages/Anime";
import Manga from "./Pages/Manga";
import Trending from "./Pages/Trending";
import Details from "./Pages/Details";
import MangaDetails from "./Pages/MangaDetails";
import Profile from "./Pages/Profile";
const App = () => {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 h-full bg-gray-900">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
          <Route path="/anime" element={<Anime />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/manga/:id" element={<MangaDetails />} />
          <Route path="/Profile" element={<Profile />} />


          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
