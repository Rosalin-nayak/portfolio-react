import React from "react";
import image from "../assets/mypic.jpg"
const Aboutme = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-black text-gray-800 dark:text-white  py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <img src={image} alt="" className="w-48 h-48 md:w-48 md:h-48 object-cover rounded-full border-4 border-green-400 shadow-[0_0_50px_rgba(34,197,94,0.8)] mb-6" />
            <p className="text-base max-w-md md:max-w-lg text-gray-600 dark:text-gray-300">
                I’m a Computer Science and Engineering student with a strong interest in web development, problem-solving, and building efficient, user-focused digital solutions. I enjoy exploring technologies like React, Node.js, and MongoDB, and I'm continuously learning to improve my coding skills and create impactful applications. Whether it's frontend design or backend logic, I love bringing ideas to life through code.
            </p>
            </div>

            <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-green-600 mb-10">Education</h3>
            <div className="border-l-4 border-green-400 pl-6 space-y-6 relative">
              
               <div className="relative">
                <div className="absolute -left-[32px] top-1 w-4 h-4 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-400">2024 – 2028</p>
                <h4 className="text-xl font-semibold">
                  B.Tech in Computer Science and Engineering
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Odisha University of Technology and Research,Bhubaneswar
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[32px] top-1 w-4 h-4 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-400">2024</p>
                <h4 className="text-xl font-semibold">
                  12th grade
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  DAV Public School,MCL,Kalinga Area,Talcher
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[32px] top-1 w-4 h-4 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-400">2022</p>
                <h4 className="text-xl font-semibold">
                  10th grade 
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Little Hearts Toddlers Academy,Angul
                </p>
              </div> 


              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Aboutme;