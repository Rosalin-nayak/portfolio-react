import React from "react";
import { FaCode, FaServer, FaLaptopCode, FaPaintBrush, FaPenNib, FaBullhorn } from "react-icons/fa";
const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon:<FaCode size={30} className="text-green-400 mb-2"/>
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    icon:<FaServer size={30} className="text-green-400 mb-2"/>
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    icon:<FaLaptopCode size={30} className="text-green-400 mb-2"/>
  },
  {
    id: 4,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
     icon:<FaPaintBrush size={30} className="text-green-400 mb-2"/>
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
     icon:<FaPenNib size={30} className="text-green-400 mb-2"/>
  }
];

const Service = () => {
  return (
    <div className="bg-white dark:bg-black py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((servicee) => (
            <div
              key={servicee.id}
              data-aos="flip-left"
              className="bg-gray-100 dark:bg-gray-900 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <br />
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {servicee.icon}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {servicee.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{servicee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;