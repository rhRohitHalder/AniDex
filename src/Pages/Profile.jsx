import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import ChatGPT from "../assets/ChatGPT.png"; // Corrected file name with proper casing

const Profile = () => {
  return (
    <div className="p-20">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={ChatGPT} // Using the correctly imported image
            alt="Rohit Halder"
            className="rounded-lg" // Optional: Add styling like rounded corners to the image
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-5xl">Rohit Halder</h1>
          <p className="text-2xl text-gray-400">
            Web developer with a strong foundation in modern web technologies.
            With expertise in frontend and backend development, he focuses on
            creating intuitive, user-friendly, and efficient web applications.
            Passionate about building responsive websites and optimizing
            performance, Rohit is committed to delivering high-quality solutions
            that meet user needs and enhance user experience. Constantly
            exploring new tools and techniques, he remains dedicated to staying
            ahead in the ever-evolving landscape of web development.
          </p>
          <div className="text-2xl text-gray-400 items-center space-x-2">
            {/* "Mail:" label */}
            <p className="bg-blue-700 p-3 rounded-md text-white inline-block">
              {/* Added inline-block */}
              Mail:
            </p>

            {/* Mail link */}
            <a
              href="mailto:rohitHalder4225@gmail.com"
              className="text-blue-500 text-2xl hover:underline"
            >
              rohitHalder4225@gmail.com
            </a>
          </div>

          <div className="card-actions justify-center flex items-center space-x-4">
            {" "}
            {/* Added spacing between icons */}
            <a
              href="https://www.linkedin.com/in/rohit-halder4225/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rhRohitHalder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={50} />{" "}
              {/* Added a color class for consistency */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
