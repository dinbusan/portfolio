import React from "react";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  // const { ref, inView } = useInView({
  //   // threshold: 0.1,
  // });
  // const animation = useAnimation();

  // useEffect(() => {
  //   console.log("use effect hook, inView = ", inView);
  //   if (inView) {
  //     animation.start({
  //       opacity: 1,
  //       x: 0,
  //       transition: { delay: 0.2, duration: 1 },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       opacity: 0,
  //       x: 100,
  //       transition: { duration: 0.3 },
  //     });
  //   }
  // }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className="select-none flex-col	inset-0 font-mono flex justify-center pt-10 pb-16 md:pt-0"
    >
      <motion.div className="inline-flex items-center md:bg-black md:bg-opacity-40 justify-center w-full xl:w-1/3 xl:mt-20 xl:ml-72">
        <motion.h1 className="roddenberry text-white text-2xl md:text-4xl xl:text-2xl tracking-widest">
          ABOUT ME
        </motion.h1>
        <motion.hr className="w-64 md:w-2/3 h-0.5 my-8 xl:my-0 ml-1 md:ml-5 xl:ml-1 border-0 bg-gray-300"></motion.hr>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className=" lg:flex max-h-750px overflow-y-auto mt-5"
      >
        <motion.div className="xl:order-last w-3/4 md:w-1/3 mx-auto mb-5 lg:ml-20 lg:pt-20 xl:ml-5 xl:pt-0 xl:w-1/4 xl:mt-16">
          <img
            className="object-cover "
            src="./assets/deann_peace.jpeg"
            alt=""
          />
        </motion.div>
        <p className="xl:mx-auto mx-6 text-center bg-black bg-opacity-40 mb-5 leading-loose md:mx-10 lg:text-left lg:w-3/4 lg:mr-10 xl:w-1/3 xl:mr-1 xl:pl-6 text-white">
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
          {/* Thank you for visiting my personal portfolio website. If you have any
          questions or would like to collaborate on a project, please feel free
          to get in touch via my contact page! */}
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
      <motion.div className="inline-flex items-center md:bg-black md:bg-opacity-50 justify-center w-full xl:w-2/3 xl:mx-auto">
        <motion.h1 className="roddenberry text-white text-2xl md:text-4xl xl:text-2xl tracking-widest">
          SKILLS
        </motion.h1>
        <motion.hr className="w-64 md:w-2/3 h-0.5 my-8 xl:my-0 ml-1 md:ml-5 xl:ml-5 border-0 bg-gray-300"></motion.hr>
      </motion.div>
      <motion.div
      // animate={animation}
      >
        {<Skills />}
      </motion.div>
    </motion.div>
  );
};

export default About;
