import React from "react";

const ScrollToBottom = () => {
  const goToBottom = () => {
    document.documentElement.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className=" z-30" onClick={goToBottom}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="text-white w-10 h-10 animate-[bounce_1.5s_ease-in-out_infinite]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
};

export default ScrollToBottom;
