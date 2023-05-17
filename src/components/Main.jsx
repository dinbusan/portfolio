import React from "react";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.div className="flex-col xl:inline-flex absolute w-full">
      <div className="select-none mt-20 lg:mt-30 mx-auto xl:mt-40 xl:ml-40 text-center xl:text-left text-white roddenberry bg-black bg-opacity-20 md:bg-opacity-40">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl"
        >
          Hi, I'm Deann.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl mt-10 md:text-5xl xl:text-6xl"
        >
          A fullStack JavaScript developer.
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-10 flex justify-center xl:absolute xl:mt-36 xl:right-0 xl:mr-32"
      >
        <div className="bg-amber-400 w-60 h-60 md:h-72 md:w-72 xl:h-80 xl:w-80 rounded-full">
          <img
            className="object-top h-full w-full object-cover rounded-full"
            src="./assets/deann.png"
            alt=""
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Main;
