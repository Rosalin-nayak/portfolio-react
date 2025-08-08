import React from "react";
import weatherimage from "../assets/weatherproject.jpg"
import todoimage from "../assets/todoproject.jpeg"
import zairzestimage from "../assets/zairzest.png"
const projects=[
    {
        id:1,
        name:"Zairzest-website Clone",
        tech:"HTML,CSS & Javascript",
        image:zairzestimage,
        github:""
    },
    {
        id:2,
        name:"Weather-Web Server",
        tech:"NodeJS",
        image:weatherimage,
        github:""
    },
    {
        id:3,
        name:"Todo-Web Server",
        tech:"NodeJS & ExpressJS",
        image:todoimage,
        github:""
    }
]
const Projects = () => {
  return (
    <div className="bg-white dark:bg-black py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project=>(
                <div data-aos="flip-right" className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img src={project.image} alt={project.image} className="rounded-lg mb-4 w-full h-48 object-cover" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-400">{project.name}</h3>
                    <p className="text-gray-700 dark:text-gray-400 mb-4">{project.tech}</p>
                    <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
