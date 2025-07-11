import { FaLaptopCode } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Button } from "react-scroll";
import  downloadCV  from "../context/downloadCV";
import TypingText from "./TypingText";
import logo from "../images/portfolio-hashan.png"

const Hero = () => (
  <section id="home" className="container h-screen max-sm:bg-center max-sm:bg-cover flex justify-center items-center text-black">
  <div className="lg:w-1/3 max-lg:w-full lg:text-left max-lg:text-center">
    <div className="lg:hidden max-lg:w-full flex lg:justify-end max-lg:justify-center items-center my-4">
      <img src={logo} alt="logo" className="w-[125px] h-auto "/>
    </div>
    <h1 className="lg:text-6xl max-lg:text-4xl font-bold mb-4 animation-fade-in">
      I'm Hashan!
    </h1>
    <div className="mb-4 text-lg flex items-center lg:justify-start max-lg:justify-center">
      <TypingText />
    </div>
    <div className="flex lg:justify-start max-lg:justify-center items-center">
      <FaLaptopCode className="text-5xl animate-bounce" />
    </div>
    <div className="flex lg:justify-start max-lg:justify-center items-center space-x-4 mt-4">
      <a href="https://github.com/hashan789" className="text-black hover:text-black text-2xl p-2 border rounded-full ">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/hashan-malinda-b89474213/" className="text-black hover:text-blue-800 text-2xl p-2 border rounded-full ">
        <FaLinkedin />
      </a>
      <a href="https://medium.com/@hashanmalind123" className="text-black hover:text-black text-2xl p-2 border rounded-full ">
        <FaMedium />
      </a>
    </div>
    <Button smooth className={`border-workspace-light hover:bg-workspace-light border-[1px] w-36 font-semibold h-10 rounded-md text-workspace-light hover:text-white transition-all duration-300 mt-5`} onClick={downloadCV}>Download CV</Button>
  </div>
  <div className="lg:w-1/3 max-lg:hidden flex justify-end items-center">
    <img src={logo} alt="logo" className="w-[300px] h-auto "/>
  </div>
  </section>
);

export default Hero;
