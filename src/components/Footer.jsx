import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Footer = () => (
  <footer className="py-6 text-white text-center">
    <div className="flex justify-center items-center space-x-4">
      <a href="https://github.com/hashan789" className="text-gray-400 hover:text-white text-2xl transition-all duration-300">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/hashan-malinda-b89474213/" className="text-gray-400 hover:text-white text-2xl transition-all duration-300">
        <FaLinkedin />
      </a>
      <a href="https://medium.com/@hashanmalind123" className="text-gray-400 hover:text-white text-2xl transition-all duration-300">
        <FaMedium />
      </a>
    </div>
    <p className="text-gray-500 mt-4 max-sm:text-sm">&copy; 2024 Hashan. All Rights Reserved.</p>
  </footer>
);

export default Footer;
