import React from "react";

const Skills = () => {
  return (
    <div className="select-none	w-full h-screen bg-black bg-opacity-60 mt-4 lg:mt-10 text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <p className="text-5xl inline border-b-4 text-center roddenberry tracking-widest">
            Skills
          </p>
          <p className="py-4 text-xl text-center font-mono">
            I enjoy diving into and learning new things. Here's a list of
            technologies I've worked with
          </p>
        </div>
        <div className="w-full text-xl font-mono grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-amber-400">
            <p className="my-4 ">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-rose-400">
            <p className="my-4 ">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-sky-400">
            <p className="my-4 ">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:text-indigo-400">
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:text-sky-400">
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-indigo-400">
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-rose-400">
            <p className="my-4 ">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:text-amber-400">
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-rose-400">
            <p className="my-4 ">Sass</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:text-sky-400">
            <p className="my-4">Mongodb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
