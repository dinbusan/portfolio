import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";
// import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <div
      style={{ position: "relative", height: "100vh", width: "100vw" }}
      className="relative overflow-hidden h-full w-full"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/assets/fade_in_out.mp4" type="video/mp4" />
      </video>
      <div className="relative h-full w-full">
        <Header className="relative flex items-center justify-center h-screen w-screen overflow-hidden" />
        <div className="route--container">
          <AnimatedRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
