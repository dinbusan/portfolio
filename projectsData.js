import { v4 as uuidv4 } from "uuid";

export default {
  success: true,
  data: {
    projects: [
      {
        id: uuidv4(),
        name: "WeatherWise",
        desc: " WeatherWise is a responsive and user-friendly full-stack web app that provides real-time weather information using the OpenWeatherMap API with Axios. The app was built with HTML, CSS, JavaScript, React, Node.js, and MongoDB, and was created during a hack day project at Salt.",
        img: "/assets/weatherWise.png",
        link: "https://weatherwise-543ec.web.app/",
      },
      {
        id: uuidv4(),
        name: "DevHub",
        desc: "DevHub is a social media website designed for developers to connect and collaborate on development projects. It was built using React.js, JavaScript, TailwindCSS, Redux, and Firebase. Users can create 'mobs', chat with each other, create and delete posts, add and delete friends, and add pictures.",
        img: "./assets/devhub.png",
        link: "https://github.com/dinbusan/dev-hub",
      },
    ],
  },
};
