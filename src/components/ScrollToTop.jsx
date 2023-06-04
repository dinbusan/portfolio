import React from 'react'

const ScrollToTop = () => {
    const goToTop = () => {
        document.documentElement.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
  return (
    <button
      className="scrollToTop-btn z-30  flex mx-auto lg:ml-auto lg:mr-16 -mt-10"
      onClick={goToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="bg-slate-400 rounded-full bg-opacity-50 hover:bg-opacity-70 hover:scale-105 z-30 text-white w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
        />
      </svg>
    </button>
  );
}

export default ScrollToTop