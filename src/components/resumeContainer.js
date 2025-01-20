import React from "react";
import { Link } from "gatsby";
import { FaDownload, FaLinkedin } from "react-icons/fa";

const DesktopResumeContainer = () => {
  return (
    <section className="bg-box-bg p-[5%] text-[0.8rem] text-dark-grey">
      <div className="flex items-baseline justify-between text-white">
        <h2 className="text-[2.1rem] font-semibold">Ololade Bello</h2>

        <span className="flex items-center justify-between gap-x-3 text-lg md:gap-x-4 md:text-[0.8rem]">
          <a
            href="https://linkedin.com/in/bello-ololade-85b033233"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1"
          >
            <FaLinkedin />
            <span className="hidden md:flex">LinkedIn</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1664AIBcajPdcrq_LhcHbZK_oINuCTm0t/view?usp=sharing"
            // GOOGLE DRIVE RESUME LINK
            target="_blank"
            download
            className="flex items-center gap-x-1"
          >
            <FaDownload />
            <span className="hidden md:flex">Download</span>
          </a>
        </span>
      </div>
      <b className="my-[6px] text-cfcfcf">Frontend Developer</b>
      {/* <p className="mb-4 text-dark-grey md:mt-6">
        I am a dedicated and dynamic backend developer, distinguished by an insatiable thirst for learning and a fervent commitment to delivering excellence. In pursuit of an entry-level position, I bring a unique blend of passion and expertise to a challenging and innovative environment. My journey involves shaping efficient, secure, and scalable web applications, with a specialized focus on crafting robust RESTful APIs. With a knack for seamlessly integrating third-party APIs and a penchant for designing sleek database architectures, I consistently uphold industry best practices. Elevate your expectations—I am not just a developer; I am a catalyst for transformative digital solutions.
      </p> */}
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Frontend Development</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p>
        HTML, CSS, Bootstrap, JavaScript, React JS, TypeScript, Next JS, Redux
        Toolkit, RESTful API, Web Application development, Web Design, User
        Experience, Git, Github, Web Hosting.
      </p>
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Extras</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p>Python, Microsoft Office, Adobe photoshop.</p>
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Soft Skills</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">
        Good Communication, Teamwork, Critical Thinking, Adaptability, Solving
        Skills, Decision-making, Consistent, Creativity, Emotional intelligence.
      </p>

      {/* ***************** WORK STARTS HERE *********** */}

      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Work Experience</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-base text-white">
        Spin Designs - <i>Frontend Developer</i>
      </p>
      <p className="my-3 ml-[5px] text-xs">MARCH 2024 - JANUARY 2025</p>
      <ul className="list-box my-3 space-y-2">
        <li>
          Effectively converted Figma designs into fully functional web
          applications and websites, ensuring a seamless user experience.
        </li>
        <li>
          Collaborated with backend developers to integrate RESTful APIs,
          enabling dynamic content and smooth functionality on the website.
        </li>
        <li>
          Significantly reduced bug occurrence through rigorous unit testing,
          improving project reliability and performance.
        </li>
        <li>
          Maintained and enhanced front-end platforms built with HTML, CSS,
          JavaScript, and React, ensuring ongoing performance and
          responsiveness.
        </li>
      </ul>

      <p className="text-base text-white">
        DevCent - <i>Frontend Development Instructor</i>
      </p>
      <p className="my-3 ml-[5px] text-xs">MARCH 2024 - JANUARY 2025</p>
      <ul className="list-box my-3 space-y-2">
        <li>Trained over 12 students on front-end development skills.</li>
        <li>
          Provided mentorship and guidance to students during and after the
          training, offering support in portfolio development, job preparation,
          and continued skill enhancement.
        </li>
        <li>Encouraged teamwork and communication skills.</li>
        <li>
          Organized interactive workshops and group projects to foster
          collaboration and real-world application of front-end development
          concepts.
        </li>
      </ul>
      <h3 className="my-4 flex items-center text-[0.8rem] font-semibold text-e2e2e2">
        <p className="mr-3 basis-1/12 font-[Andika] capitalize">Projects</p>
        <span className="h-px basis-10/12 bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">
        Links to my works can be found on{" "}
        <Link to="/work" className="text-white">
          /work
        </Link>{" "}
        and more details can be provided upon request.
      </p>
    </section>
  );
};

export default DesktopResumeContainer;
