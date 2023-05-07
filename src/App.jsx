import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="assets/star_burst_2.mp4" type="video/mp4" />
        </video>
      </div>
      {/* <div className="h-screen bg-no-repeat bg-center bg-cover md:hidden">
        {" "}
        <img src="./public/assets/stars.jpg" alt="" />
      </div> */}

      <Header className="relative flex items-center justify-center h-screen w-screen overflow-hidden" />
      <div className="route--container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
