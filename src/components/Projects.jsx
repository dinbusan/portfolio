import React from "react";

const Projects = () => {
  return (
    <div className="relative bg-black m-2 md:w-1/2 md:m-auto">
      <h1 className="mt-5 text-white text-center tracking-wider roddenberry text-4xl">
        WeatherWise
      </h1>
      <div className="max-w-100% h-auto mt-5 ">
        <a href="https://weatherwise-543ec.web.app/">
          <img src="./public/assets/weatherWise.png" alt="" />
        </a>
      </div>
      <div className="hidden flex max-h-750px overflow-y-auto justify-center ">
        <p className="text-white">
          WeatherWise is a full-stack web application that provides real-time
          weather information for cities around the world. Built with a tech
          stack that includes HTML, CSS, JavaScript, React, Node.js, and
          MongoDB, this app is designed to be responsive and user-friendly.
          Using the OpenWeatherMap API with Axios, WeatherWise retrieves the
          latest weather data for any city that the user searches for. Users can
          see current weather conditions, as well as a 16 hour forecast. One of
          the standout features of WeatherWise is its ability to save cities to
          the user's favorites list. This means that users can quickly access
          weather information for cities they care about without having to
          search for them every time they use the app. WeatherWise was created
          during a hack day project at Salt, where the team had just 36 hours to
          complete a full-stack web application. Since then, the app has been
          updated and improved with better design and additional features. As
          the developer continues to learn more about UI design and web
          development, they plan to keep improving WeatherWise and adding new
          features that make the app even more useful for users. Overall,
          WeatherWise is a great tool for anyone who wants to stay up-to-date
          with the latest weather information for their favorite cities. Whether
          you're planning a trip or just want to know what to expect for the day
          ahead, WeatherWise has you covered!
        </p>
      </div>
    </div>
  );
};

export default Projects;
