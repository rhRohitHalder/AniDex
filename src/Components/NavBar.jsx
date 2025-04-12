// import React, { useState } from "react";
// import { TbReportSearch } from "react-icons/tb";
// import { CiSettings } from "react-icons/ci";
// import { FaTheaterMasks } from "react-icons/fa";
// import { IoLogoBuffer } from "react-icons/io";
// import { FaFireAlt } from "react-icons/fa";
// import { MdLocalMovies, MdLogout } from "react-icons/md";
// import { FiLogIn } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

//   const MenuItems = [
//     { icons: <FaFireAlt size={30} />, label: "Trending", path: "/#" },
//     { icons: <MdLocalMovies size={30} />, label: "Movies", path: "/#" },
//     { icons: <IoLogoBuffer size={30} />, label: "TV Shows", path: "/#" },
//     { icons: <FaTheaterMasks size={30} />, label: "Genres", path: "/#" },
//     { icons: <CiSettings size={30} />, label: "Settings", path: "/#" },
//     { icons: <TbReportSearch size={30} />, label: "Report", path: "/#" },
//   ];

//   return (
//     <div className="w-[15%] h-screen flex flex-col border-r-2 border-zinc-500 p-4">
//       {/* Header */}
//       <div className="bg-cyan-950 p-3 rounded-md flex items-center justify-center gap-3 text-2xl font-semibold">
//         <i className="ri-tv-fill text-red-800 cursor-pointer"></i>
//         <span className="text-white">Netflix</span>
//       </div>
//       {/* Body */}
//       <div className="flex-1 mt-5">
//         <h1 className="text-xl font-semibold text-center mb-5 bg-red-800 rounded-md p-2 text-white">
//           News Feed
//         </h1>
//         <div className="flex flex-col gap-3">
//           {MenuItems.map((item, index) => (
//             <Link
//               className="flex items-center gap-3 px-4 py-3 border-b text-white  hover:bg-red-400 transition duration-300"
//               to={item.path}
//               key={index}
//             >
//               <div className="text-red-700">{item.icons}</div>
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </div>
//       </div>
//       {/* Website Info Section */}
//       <div className="mt-5">
//         <h1 className="text-xl font-semibold text-center mb-3 text-white">
//           Website Info
//         </h1>
//         <div className="flex flex-col gap-3">
//           <Link className="flex items-center gap-2 text-white hover:text-zinc-500 transition">
//             <i className="ri-phone-line bg-red-500 rounded-[50%] p-2 px-3"></i>
//             Contact Us
//           </Link>
//           <Link className="flex items-center gap-2 text-white hover:text-zinc-500 transition">
//             <i className="ri-user-line bg-red-500 rounded-full p-2 px-3"></i>
//             Profile
//           </Link>
//           <Link className="flex items-center gap-2 text-white hover:text-zinc-500 transition">
//             <i className="ri-information-2-line bg-red-500 rounded-full p-2 px-3"></i>
//             Information
//           </Link>
//         </div>
//       </div>
//       {/* Footer (Login/Logout) */}
//       <div className="p-3">
//         <button
//           onClick={toggleLogin}
//           className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
//         >
//           {isLoggedIn ? <MdLogout size={20} /> : <FiLogIn size={20} />}
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { TbReportSearch } from "react-icons/tb";
import { SiBookstack } from "react-icons/si";
import { FaTheaterMasks, FaFireAlt } from "react-icons/fa";
import { IoLogoBuffer } from "react-icons/io";
import { MdLocalMovies, MdLogout } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  const MenuItems = [
    { icons: <FaFireAlt size={30} />, label: "Trending", path: "/trending" },
    { icons: <MdLocalMovies size={30} />, label: "Anime", path: "/anime" },
    { icons: <SiBookstack size={30} />, label: "Manga", path: "/manga" },
    // { icons: <IoLogoBuffer size={30} />, label: "TV Shows", path: "/" },
    // { icons: <FaTheaterMasks size={30} />, label: "Genres", path: "/" },
    // { icons: <TbReportSearch size={30} />, label: "details", path: "/Details" },///////
  ];

  return (
    <div className="w-64 h-screen flex flex-col border-r-2 border-zinc-500 p-4 bg-gray-900">
      {/* Header */}
      <div className="bg-cyan-950 p-3 rounded-md flex items-center justify-center gap-3 text-2xl font-semibold">
        <i className="ri-tv-fill text-red-800 cursor-pointer"></i>
        <Link to={"/"} className="text-white">
          Netflix
        </Link>
      </div>
      {/* Menu */}
      <div className="flex-1 mt-5">
        <h1 className="text-xl font-semibold text-center mb-5 bg-red-800 rounded-md p-2 text-white">
          News Feed
        </h1>
        <div className="flex flex-col gap-3 mt-10">
          {MenuItems.map((item, index) => (
            <NavLink
              className="flex items-center gap-3 px-4 py-3 border-b text-white hover:bg-red-400 transition duration-300"
              to={item.path}
              key={index}
            >
              <div className="text-red-700">{item.icons}</div>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
      {/* Website Info Section */}
      <div className="mt-5">
        <h1 className="text-xl font-semibold text-center mb-3 text-white">
          Website Info
        </h1>

        <div className="flex flex-col gap-3">
          <Link
            to={"/Profile"}
            className="flex items-center gap-2 text-white hover:text-zinc-500 transition"
          >
            <i className="ri-phone-line bg-red-500 rounded-full p-2 px-3"></i>
            Contact Us
          </Link>

          <Link
            to={"/Profile"}
            className="flex items-center gap-2 text-white hover:text-zinc-500 transition"
          >
            <i className="ri-user-line bg-red-500 rounded-full p-2 px-3"></i>
            Profile
          </Link>

          <Link
            to={"/Profile"}
            className="flex items-center gap-2 text-white hover:text-zinc-500 transition"
          >
            <i className="ri-information-2-line bg-red-500 rounded-full p-2 px-3"></i>
            Information
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3">
        <button
          onClick={toggleLogin}
          className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
        >
          {isLoggedIn ? <MdLogout size={20} /> : <FiLogIn size={20} />}
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
