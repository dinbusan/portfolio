import React from "react";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({
    // threshold: 0.1,
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: 100,
        transition: { duration: 0.3 },
      });
    }
  }, [inView]);

  return (
    <motion.div className="select-none flex-col	inset-0 font-mono bg-black bg-opacity-50 flex justify-center pt-20 pb-16 md:pt-32">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="roddenberry text-white text-center text-7xl md:text-8xl xl:text-9xl tracking-wider mb-16 xl:mb-36"
      >
        <h1>ABOUT ME</h1>
      </motion.div>
      <hr className="w-3/4 mx-auto" />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="lg:flex max-h-750px overflow-y-auto mt-20"
      >
        <div className="mx-5 mb-10 xl:mt-16 md:mx-auto md:w-1/2 lg:w-1/3 lg:ml-20 xl:ml-32 lg:pt-20 xl:pt-5">
          <img
            className="object-cover"
            src="./assets/deann_peace.jpeg"
            alt=""
          />
        </div>
        <p className="mb-5 leading-7 mx-5 md:mx-10 md:text-center lg:text-left lg:w-3/4 lg:mr-10 xl:mr-32 text-white">
          Hello, I'm Deann, a full-stack JavaScript developer based in
          Amsterdam, the Netherlands. <br />
          <br /> Originally from Iowa in the US, I spent several years teaching
          English in Busan, South Korea, where I honed my communication and
          interpersonal skills. Prior to that, I worked in customer service and
          education in the United States. <br />
          <br />
          Driven by my passion for technology, I transitioned to a career in web
          development. I taught myself the basics of web development through
          online resources and bootcamps before enrolling in an intensive
          full-stack JavaScript bootcamp in Amsterdam. Since then, I have been
          constantly learning and experimenting with new technologies and
          approaches to development.
          <br />
          <br />I have a keen interest in front-end development and creating
          visually appealing and responsive websites. I particularly enjoy
          working with ReactJS and other modern front-end frameworks. <br />
          <br />
          When I'm not coding, I enjoy playing board games, exploring new
          places, and catching up on the latest true-crime documentaries. <br />
          <br />
          Thank you for visiting my personal portfolio website. If you have any
          questions or would like to collaborate on a project, please feel free
          to get in touch via my contact page!
          <span className=""></span>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mx-auto mb-10 "
      >
        <p className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white w-10 h-10 animate-[bounce_2s_linear_infinite]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
      </motion.div>
      <hr className="w-3/4 mx-auto" />

      <motion.div
        ref={ref}
        animate={animation}
        className="mt-16 xl:mt-8 roddenberry text-white text-center text-7xl md:text-8xl xl:text-9xl tracking-wider mb-16 xl:mb-10 xl:mb-36"
      >
        <h1 className="tracking-wider">Skills</h1>
      </motion.div>
      <hr className="w-3/4 mx-auto" />
      <motion.div ref={ref} animate={animation}>
        {<Skills />}
      </motion.div>
    </motion.div>
  );
};

export default About;
