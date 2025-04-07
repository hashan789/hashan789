import { Suspense, lazy } from 'react';
import './App.css';
import Loader from './components/Loader';

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const WorkExperienceTree = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const SpecialProject = lazy(() => import("./components/SpecialProject"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));


const App = () => (
  <div className="font-poppins">
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Hero />
      <About />
      <WorkExperienceTree />
      <Projects />
      <SpecialProject />
      <Contact />
      <Footer />
    </Suspense>
  </div>
);

export default App;
