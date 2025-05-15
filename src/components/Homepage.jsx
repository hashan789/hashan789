import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import WorkExperienceTree from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

export default function Homepage() {
  return (
    <div className="font-poppins bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <WorkExperienceTree />
      <Projects />
      <Contact />
      <Footer />
  </div>
  )
}
