import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Button } from "react-scroll";
import  downloadCV  from "../context/downloadCV";
import TypingText from "./TypingText";
import logo from "../images/portfolio-hashan.png"

const Hero = () => (
  <section id="home" className="container h-screen max-sm:bg-center max-sm:bg-cover flex justify-center items-center text-black">
  <div className="lg:w-1/2 max-lg:w-full lg:text-left max-lg:text-center">
    <div className="lg:hidden max-lg:w-full flex lg:justify-end max-lg:justify-center items-center my-4">
      <img src={logo} alt="logo" className="w-[125px] h-auto "/>
    </div>
    <h1 className="lg:text-6xl max-lg:text-4xl font-bold mb-4 animation-fade-in space-y-4">
      I'm <div className=" text-workspace-light my-[5px] lg:text-5xl max-lg:text-2xl"><TypingText /></div>
    </h1>
    <div className="flex lg:justify-start max-lg:justify-center items-center space-x-4 mt-4 lg:text-lg max-lg:text-sm max-lg:px-[10%]">
      <p>
      A passionate web developer With a strong foundation in full-stack web development, Machine Learning and Cloud computing 
      </p>
    </div>
    <div className="flex lg:justify-start max-lg:justify-center items-center space-x-4 mt-4">
      <a href="https://github.com/hashan789" className="text-black hover:text-black text-lg p-2 border rounded-full ">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/hashan-malinda-b89474213/" className="text-black hover:text-blue-800 text-lg p-2 border rounded-full ">
        <FaLinkedin />
      </a>
      <a href="https://medium.com/@hashanmalind123" className="text-black hover:text-black text-lg p-2 border rounded-full ">
        <FaMedium />
      </a>
    </div>
    <Button smooth className={`hover:border-workspace-light hover:bg-white bg-workspace-light border-[1px] w-36 font-semibold h-10 rounded-md hover:text-workspace-light text-white transition-all duration-300 mt-5`} onClick={downloadCV}>Download CV</Button>
  </div>
  <div className="lg:w-1/3 max-lg:hidden flex justify-end items-center">
    <img src={logo} alt="logo" className="w-[300px] h-auto "/>
  </div>
  </section>
);

export default Hero;
