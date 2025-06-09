import { FaLaptopCode } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Button } from "react-scroll";
import  downloadCV  from "../context/downloadCV";
import TypingText from "./TypingText";

const Hero = () => (
  <section id="home" className="h-screen max-sm:bg-center max-sm:bg-cover flex flex-col justify-center items-center text-center text-black">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 animation-fade-in">
      Hi, I'm Hashan!
    </h1>
    <div className="mb-4 text-lg flex items-center justify-center">
      <TypingText />
    </div>
    <FaLaptopCode className="text-5xl animate-bounce" />
    <div className="flex justify-center items-center space-x-4 mt-4">
      <a href="https://github.com/hashan789" className="text-black hover:text-black text-2xl">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/hashan-malinda-b89474213/" className="text-black hover:text-blue-800 text-2xl">
        <FaLinkedin />
      </a>
      <a href="https://medium.com/@hashanmalind123" className="text-black hover:text-black text-2xl">
        <FaMedium />
      </a>
    </div>
    <Button smooth className={`bg-workspace-light w-36 font-semibold h-10 rounded-md text-white mt-5`} onClick={downloadCV}>Download CV</Button>
  </section>
);

export default Hero;
