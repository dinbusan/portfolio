import React from "react";

const Projects = () => {
  return (
    <div className="relative bg-black bg-opacity-60 m-2 md:w-1/2 md:m-auto">
      <h1 className="mt-5  select-none	text-white text-center tracking-widest roddenberry text-4xl">
        WeatherWise
      </h1>
      <div className="">
        <div className="max-w-100% md:w-1/2 h-auto mt-5 mx-auto">
          <a href="https://weatherwise-543ec.web.app/">
            <img src="./public/assets/weatherWise.png" alt="" />
          </a>
        </div>
        <div className="hidden md:block font-mono mx-10 mt-10 text-center justify-center ">
          <p className="text-white max-h-250px overflow-y-auto">
            WeatherWise is a responsive and user-friendly full-stack web app
            that provides real-time weather information using the OpenWeatherMap
            API with Axios. It has a favorites list feature that lets users
            quickly access weather information for cities they care about. The
            app was built with HTML, CSS, JavaScript, React, Node.js, and
            MongoDB, and was created during a hack day project at Salt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
