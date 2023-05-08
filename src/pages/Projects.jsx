import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import projectsData from "../../projectsData";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const projects = projectsData.data.projects;
 
  return (
    <div className="">
      {projects.map((project) => (
        <motion.div
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white mt-10 rounded mx-auto w-5/6 h-auto py-3 px-5 font-mono "
          transition={{ layout: { duration: 1, type: "spring" } }}
          key={project.id}
        >
          <motion.h2 layout="position">{project.name}</motion.h2>
          <motion.div layout className="max-w-100% h-auto mt-5 mx-auto">
            <img src={project.img} alt="" />
          </motion.div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="pt-1 leading-7 "
            >
              <p>
                {project.desc}
                <a href="https://weatherwise-543ec.web.app/">Deployed Site</a>
              </p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;

// <motion.div
//   className="projects-container relative bg-black bg-opacity-60 m-2 lg:w-1/2 md:m-auto"
//   initial={{ opacity: 0, x: 100 }}
//   animate={{ opacity: 1, x: 0 }}
//   exit={{ opacity: 0, x: -100 }}
//   transition={{ duration: 0.3 }}
// >
//   <div className="">
//     <h1 className="mt-5 select-none	text-white text-center tracking-widest roddenberry text-4xl">
//       WeatherWise
//     </h1>
//     <div className="">
//       <div className="max-w-100% hover:scale-105 duration-300  md:w-1/2 h-auto mt-5 mx-auto">
//         <a href="https://weatherwise-543ec.web.app/">
//           <img src="./assets/weatherWise.png" alt="" />
//         </a>
//       </div>
//       <div className="hidden md:block font-mono mx-10 mt-10 text-center justify-center ">
//         <p className="text-white max-h-250px overflow-y-auto">
//           WeatherWise is a responsive and user-friendly full-stack web app
//           that provides real-time weather information using the
//           OpenWeatherMap API with Axios. It has a favorites list feature
//           that lets users quickly access weather information for cities they
//           care about. The app was built with HTML, CSS, JavaScript, React,
//           Node.js, and MongoDB, and was created during a hack day project at
//           Salt.
//         </p>
//       </div>
//     </div>
//     <h1 className="mt-10  select-none	text-white text-center tracking-widest roddenberry text-4xl">
//       DevHub
//     </h1>
//     <div className="">
//       <div className="max-w-100% hover:scale-105 duration-300 md:w-1/2 h-auto mt-5 mx-auto">
//         <a href="https://github.com/dinbusan/dev-hub">
//           <img src="./assets/devhub.png" alt="" />
//         </a>
//       </div>
//       <div className="hidden md:block font-mono mx-10 mt-10 text-center justify-center ">
//         <p className="text-white max-h-250px overflow-y-auto">
          // DevHub is a social media website designed for developers to
          // connect and collaborate on development projects. It was built
          // using React.js, JavaScript, TailwindCSS, Redux, and Firebase.
          // Users can create 'mobs', chat with each other, create and delete
          // posts, add and delete friends, and add pictures. Agile project
          // management was used to ensure timely delivery and meeting project
          // requirements. The project provided valuable experience in
          // full-stack development, project management, and team
          // collaboration.
//         </p>
//       </div>
//     </div>
//   </div>
// </motion.div>
