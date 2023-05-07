import React from "react";

const Main = () => {
  return (
    <div className="flex-col md:inline-flex absolute z-10 w-full">
      <div className="select-none mt-40 mx-auto md:mt-30 md:ml-40 text-center md:text-left text-white roddenberry bg-black bg-opacity-40">
        <h1 className="text-7xl md:text-9xl">Hi, I'm Deann.</h1>
        <h1 className="text-4xl mt-10 md:text-6xl">
          A fullStack JavaScript developer.
        </h1>
      </div>
      <div className="mt-10 flex justify-center md:absolute md:mt-36 md:right-0 md:mr-40">
        <div className="bg-amber-400 w-60 h-60 md:h-80 md:w-80 rounded-full">
          <img
            className="object-top h-full w-full object-cover rounded-full"
            src="./public/assets/deann.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
