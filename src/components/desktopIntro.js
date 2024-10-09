import React from "react";
import { Link } from "gatsby";
import { FaGithub, FaAt, FaTwitter } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import avi from "../images/avi.jpg";
const routes = [
  {
    to: "",
    text: "work",
  },
  {
    to: "resume",
    text: "resume",
  },
  // {
  //   to: "blogs",
  //   text: "articles",
  // },
];

const DesktopIntro = ({ active }) => {
  return (
    <div className="flex h-full flex-col justify-between py-[10%] pl-[8%] pr-[5%]">
      <div>
        <h1 className="mb-2.5 text-4xl font-bold">
          Hello, <br /> I&apos;m Ololade Bello.
        </h1>
        <p className="break-all text-sm leading-loose text-dark-grey">
          I am a{" "}
          <span className="animate-flash text-white opacity-90">versatile</span>{" "}
          <span className="animate-flashTwo text-white opacity-90">
            and innovative
          </span>{" "}
          <span className="animate-flash text-white opacity-90">frontend</span>{" "}
          <span className="animate-flashTwo text-white opacity-90">
            developer
          </span>
          , distinguished by an{" "}
          <span className="animate-flash text-white opacity-90">
            insatiable curiosity
          </span>{" "}
          for{" "}
          <span className="animate-flashTwo text-white opacity-90">
            cutting-edge technologies
          </span>{" "}
          and a fervent commitment to crafting{" "}
          <span className="animate-flash text-white opacity-90">
            robust, user-centric solutions from frontend
          </span>
          .
        </p>
      </div>

      <ol className="mt-[0.9rem] inline-flex flex-col items-start gap-y-5 uppercase">
        {routes.map(({ to, text }, i) => (
          <li key={i} className="group flex items-center text-[0.7rem]">
            <span
              className={`cursor-pointer transition-all duration-300 ease-linear group-hover:text-white ${
                to === active ? "text-white" : "text-dark-grey"
              }`}
            >
              0{i}
            </span>
            <Link
              to={"/" + to}
              className={`flex items-center group-hover:text-white ${
                to === active ? "text-white" : "text-dark-grey"
              }
    `}
            >
              <span
                className={`mx-4 h-px transition-all duration-300 ease-linear group-hover:w-16 group-hover:bg-white ${
                  to === active ? "w-16 bg-white" : "w-10 bg-dark-grey "
                }`}
              ></span>
              <span className="tracking-widest">{text}</span>
            </Link>
          </li>
        ))}
      </ol>

      <footer>
        <div className="flex items-center">
          <div
            style={{
              backgroundImage: `url(${avi})`,
              backgroundPosition: "center bottom",
              backgroundSize: "cover",
            }}
            className="mr-6 h-12 w-12 rounded-full bg-contain bg-top"
          ></div>
          <div className="flex items-center gap-x-4 text-xs">
            <a
              href="https://github.com/fw-lade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2"
            >
              <FaGithub color="grey" />
              <span>Github</span>
              <BsArrowUpRight className="text-sm opacity-70" />
            </a>
            <a
              href="https://twitter.com/ololade_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2"
            >
              <FaTwitter color="grey" />
              <span>Twitter</span>
              <BsArrowUpRight className="text-sm opacity-70" />
            </a>
            <a
              href="mailto:b.ololade03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2"
            >
              <FaAt color="grey" />
              <span>Email</span>
              <BsArrowUpRight className="text-sm opacity-70" />
            </a>
          </div>
        </div>
        <p className="mr-3 pt-5 text-[11px] text-dark-grey">
          Inspired by{" "}
          <a
            href="https://kadet.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#cecece]"
          >
            Collins Enebeli
          </a>
        </p>
      </footer>
    </div>
  );
};

export default DesktopIntro;
