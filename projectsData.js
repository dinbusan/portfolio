import { v4 as uuidv4 } from "uuid";

export default {
  success: true,
  data: {
    projects: [
      {
        id: uuidv4(),
        name: "WeatherWise",
        desc: " WeatherWise is a responsive and user-friendly full-stack web app that provides real-time weather information using the OpenWeatherMap API with Axios.",
        tech: "HTML | CSS | JavaScript | React | Node.js | MongoDB",
        img: "/assets/weatherWise.png",
        link: "https://weatherwise-543ec.web.app/",
      },
      {
        id: uuidv4(),
        name: "DevHub",
        desc: "DevHub is a social media website designed for developers to connect and collaborate on development projects.",
        tech: "React.js | JavaScript | TailwindCSS | Redux | Google Maps API | Firebase",
        img: "./assets/devHub_shot.png",
        link: "https://github.com/dinbusan/dev-hub",
      },
      {
        id: uuidv4(),
        name: "Portfolio",
        desc: "My portfolio website was designed to be visually interesting and easy to navigate.",
        tech: "React | TailwindCSS | FramerMotion | React Form Hook | EmailJS API | Vite",
        img: "./assets/portfolio.png",
        link: "https://github.com/dinbusan/portfolio",
      },
    ],
  },
};
