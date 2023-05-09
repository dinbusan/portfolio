import React from "react";
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div
      className="fixed select-none	inset-0 font-mono bg-black bg-opacity-70 flex justify-center pt-20 pb-5 md:pt-40"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      {/* <div className="flex-col lg:flex-row max-h-750px overflow-y-auto justify-center">
        <div className="mx-5 md:w-1/3 md:mx-auto lg:w-1/3 lg:ml-20 lg:pt-5"><img className="" src="./assets/deann_peace.jpeg" alt="" /></div>
        <p className=" md:mx-auto md:text-center lg:text-left lg:w-1/3 p-5 text-white"> */}

      <div className="lg:flex max-h-750px overflow-y-auto ">
        <div className="mx-5 md:mx-auto md:w-1/2 lg:w-1/3 lg:ml-20 lg:pt-5">
          <img
            className="object-cover"
            src="./assets/deann_peace.jpeg"
            alt=""
          />
        </div>
        <p className="md:mx-auto md:text-center lg:mx-5 lg:text-left lg:w-3/4  text-white">
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
        </p>
      </div>
    </motion.div>
  );
};

export default About;
