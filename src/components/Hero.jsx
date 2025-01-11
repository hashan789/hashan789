import { FaLaptopCode } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Button } from "react-scroll";
import  downloadCV  from "../context/downloadCV";
import homepage from '../images/homepage.png';
import SlidingText from "./SlidingText";

const Hero = () => (
  <section id="home" className="h-screen flex flex-col justify-center items-center text-center text-white" style={{ backgroundImage : `url(${homepage})` }}>
    <h1 className="text-4xl md:text-6xl font-bold mb-4 animation-fade-in">
      Hi, I'm Hashan!
    </h1>
    <div className="h-36 flex items-center justify-center">
      <SlidingText/>
    </div>
    <FaLaptopCode className="text-5xl animate-bounce" />
    <div className="flex justify-center items-center space-x-4 mt-4">
      <a href="https://github.com/hashan789" className="text-white hover:text-black text-2xl">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/hashan-malinda-b89474213/" className="text-white hover:text-blue-800 text-2xl">
        <FaLinkedin />
      </a>
      <a href="https://medium.com/@hashanmalind123" className="text-white hover:text-black text-2xl">
        <FaMedium />
      </a>
    </div>
    <Button smooth className="text-blue-700 w-36 font-semibold h-10 rounded-md bg-white mt-5" onClick={downloadCV}>Download CV</Button>
  </section>
);

export default Hero;
