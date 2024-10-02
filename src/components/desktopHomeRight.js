import React from "react";
import {FaEye, FaCodeBranch, FaCube} from "react-icons/fa";

const DesktopHomeRight = () => {
  return (
    <>
      <h2 className="my-4 text-xs font-bold uppercase text-dark-grey">
        Projects
      </h2>
      <div className="darken flex flex-col gap-y-8 md:gap-y-3">
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">
            ICAN ABEOKUTA & DISTRICT SOCIETY
          </h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            REACT + GIT + CHAKRA UI + REST API
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
            Developed and launched an innovative job referral platform designed
            to bridge the gap between professionals and job seekers,
            significantly enhancing employment opportunities in the process
          </p>
          <div className="my-8 flex items-center gap-x-4">
            <a
              href="https://refnet.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/Refnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Frontend</span>
            </a>
          </div>
        </div>
      </div>

      <div className="darken flex flex-col gap-y-8 md:gap-y-3">
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">Genesis360</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            REACT + GIT + CHAKRA UI + REST API
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
            Developed and launched an innovative job referral platform designed
            to bridge the gap between professionals and job seekers,
            significantly enhancing employment opportunities in the process
          </p>
          <div className="my-8 flex items-center gap-x-4">
            <a
              href="https://refnet.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/Refnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Frontend</span>
            </a>
          </div>
        </div>
      </div>

      <div className="darken flex flex-col gap-y-8 md:gap-y-3">
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">
            ICAN ABEOKUTA & DISTRICT SOCIETY
          </h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            REACT + GIT + CHAKRA UI + REST API
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
            Developed and launched an innovative job referral platform designed
            to bridge the gap between professionals and job seekers,
            significantly enhancing employment opportunities in the process
          </p>
          <div className="my-8 flex items-center gap-x-4">
            <a
              href="https://refnet.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/Refnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Frontend</span>
            </a>
          </div>
        </div>
      </div>

      <div className="darken flex flex-col gap-y-8 md:gap-y-3">
        <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
          <h3 className="text-[1.3rem] font-semibold text-white">ICAN</h3>
          <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
            REACT + DJANGO + DJANGO CHANNELS + WEBSOCKET + REDIS + RABBITMQ +
            CELERY + GIT + POSTGRESQL + OAUTH + REST API
          </p>
          <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
            Developed and launched an innovative job referral platform designed
            to bridge the gap between professionals and job seekers,
            significantly enhancing employment opportunities in the process
          </p>
          <div className="my-8 flex items-center gap-x-4">
            <a
              href="https://refnet.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaEye /> <span>Live</span>
            </a>
            <a
              href="https://github.com/Goddy01/Refnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Frontend</span>
            </a>
            <a
              href="https://github.com/Goddy01/Gorah-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
            >
              <FaCodeBranch /> <span>Backend</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopHomeRight;
