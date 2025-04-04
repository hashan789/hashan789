import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import SpecialProject from "./components/SpecialProject";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkExperienceTree from "./components/Experience";
import './App.css';

const App = () => (
  <div className="font-poppins">
    <Navbar />
    <Hero />
    <About />
    <WorkExperienceTree />
    <Projects />
    <SpecialProject />
    <Contact />
    <Footer />
  </div>
);

export default App;
