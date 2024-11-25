import { FaLaptopCode } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "react-scroll";

const Hero = () => (
  <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-600 to-blue-400 text-white">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
      Hi, I'm Hashan!
    </h1>
    <p className="text-lg md:text-2xl mb-6">
      Full-Stack Developer | AI Enthusiast
    </p>
    <FaLaptopCode className="text-5xl animate-bounce" />
    <div className="flex justify-center items-center space-x-4 mt-4">
      <a href="#3" className="text-white hover:text-black text-2xl">
        <FaGithub />
      </a>
      <a href="#1" className="text-white hover:text-blue-800 text-2xl">
        <FaLinkedin />
      </a>
      <a href="#2" className="text-white hover:text-blue-700 text-2xl">
        <FaTwitter />
      </a>
    </div>
    <Button to="projects" smooth className="text-blue-700 w-36 font-semibold h-10 rounded-md bg-white mt-5">Download CV</Button>
  </section>
);

export default Hero;
