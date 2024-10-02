import React from "react";
import Cursor from "../components/cursor";
import DesktopHomeRight from "../components/desktopHomeRight";
import DesktopIntro from "../components/desktopIntro";
import Intro from "../components/intro";
import NavBar from "../components/navBar";
import Socials from "../components/socials";
import cursorPos from "../hooks/useGetCursor";

const Home = () => {
  const [posX, posY] = cursorPos();
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between bg-dark-bg p-[5%] text-white md:hidden">
        <NavBar />
        <Intro />
        <Socials />
      </main>
      <main className="fixed hidden h-screen grid-cols-2 bg-dark-bg text-white md:grid">
        <Cursor top={posY} left={posX} />
        <DesktopIntro active="" />
        <div className="h-full overflow-y-scroll py-[10%] pl-[5%] pr-[8%]">
          <DesktopHomeRight />
        </div>
      </main>
    </>
  );
};

export default Home;
export const Head = () => <title>Home | Ololade </title>;
