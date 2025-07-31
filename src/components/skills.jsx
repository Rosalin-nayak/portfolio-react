import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import myImage from "../assets/mypic.jpg"; 

const techSkills = [
  { name: "HTML,CSS & Javascript", level: 90 },
  { name: "React", level: 80 },
  { name: "Node.JS", level: 75 },
  { name: "Express.JS", level: 65 },
  { name: "MongoDB", level: 60 },
];

const softSkills = [
  { name: "Creativity", value: 65 },
  { name: "Communication", value: 65 },
  { name: "Teamwork", value: 90 },
  { name: "Problem Solving", value: 70 },
];

const Skills = () => {
  return (
    <section className="py-16 bg-white dark:bg-black text-gray-800 dark:text-gray-100" id="skills">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600">
          Skills
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 md:mb-0 mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-green-500">Technical Skills</h3>
          <div className="space-y-4">
            {techSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-6 text-purple-500">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-black dark:text-white">
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={skill.value}
                    text={`${skill.value}%`}
                    styles={buildStyles({
                      pathColor: "#8b5cf6", 
                      textColor: "currentColor", 
                      trailColor: "#374151",
                    })}
                  />
                </div>
                <p className="mt-2 text-center">{skill.name}</p>
              </div>
            ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;