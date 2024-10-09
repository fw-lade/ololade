import React from "react";
import {BsFillCaretRightFill} from "react-icons/bs";
import {Link} from "gatsby";
import avi from "../images/avi.jpg";
const Intro = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center">
      <div
        style={{
          backgroundImage: `url(${avi})`,
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover'
        }}
        className="h-[8rem] w-[8rem] rounded-full"
      ></div>
        <h1 className="px-4 pt-4 text-2xl font-semibold">
          Hello, I&apos;m Ololade Bello.
        </h1>
      </div>
      <p className="text-sm leading-loose text-dark-grey break-all">
        I am a{" "}
        <span className="animate-flash text-white opacity-90">versatile</span>{" "}
        <span className="animate-flashTwo text-white opacity-90">and innovative</span>{" "}
        <span className="animate-flash text-white opacity-90">frontend</span>{" "}
        <span className="animate-flashTwo text-white opacity-90">developer</span>, distinguished by an{" "}
        <span className="animate-flash text-white opacity-90">insatiable curiosity</span>{" "}
        for{" "}
        <span className="animate-flashTwo text-white opacity-90">cutting-edge technologies</span> and a fervent commitment to crafting{" "}
        <span className="animate-flash text-white opacity-90">robust, user-centric solutions from frontend</span>.
      </p>

      <div className="m-1 my-5 flex items-center justify-center">
        <Link
          to="/work"
          className="flex items-center gap-x-2 bg-box-bg px-8 py-[0.6rem] text-xs text-white"
        >
          <span>Explore</span>
          <BsFillCaretRightFill />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
