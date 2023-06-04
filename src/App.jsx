import { useEffect, useState } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./styles.css";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);

  return (
    <div className="relative bg-slate-950 h-screen w-screen flex justify-center items-center">
      {loading ? (
        <ScaleLoader
          color="#facc15"
          height={100}
          margin={5}
          radius={50}
          width={7}
        />
      ) : (
        <>
          <video
            className="hidden md:block fixed inset-0 h-full w-full object-cover z-0"
            autoPlay
            loop
            muted
          >
            <source src="/assets/fade_in_out.mp4" type="video/mp4" />
          </video>
          <div className="md:hidden absolute inset-0">
            <img
              className="fixed h-full w-full object-cover"
              src="./assets/stars_img2.jpg"
              alt=""
              // style={{ position: "fixed" }}
            />
          </div>

          <div className="relative z-1 h-full w-full">
            <Header className="relative flex items-center justify-center h-screen w-screen overflow-hidden" />
            <div className="route--container">
              <AnimatedRoutes />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
