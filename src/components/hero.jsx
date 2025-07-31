import React from "react";
import image from "../assets/mypic.jpg";

const user = {
  name: "Rosalin Nayak",
  welcomeMessage: "Welcome to my Portfolio!",
};

const Hero = () => {
  return (
    <div
      className="py-20 bg-white dark:bg-black transition-colors duration-500"
      id="home"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        
        <div className="text-center md:text-left md:w-1/2 md:ml-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400 dark:from-green-400 dark:to-blue-300">
            {user.welcomeMessage}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400 dark:from-green-400 dark:to-blue-300">
            I'm {user.name}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-md">
            A passionate developer crafting visually stunning and user-friendly web experiences.
          </p>

          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-green-500 to-yellow-800 hover:from-green-600 hover:to-yellow-900 text-white px-6 py-3 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            Download Resume
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Profile"
            className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-green-400 shadow-[0_0_100px_rgba(34,197,94,0.8)] transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;