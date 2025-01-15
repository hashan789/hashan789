// import { Card } from "@shadcn/ui";
import Box from '@mui/material/Box';
import Slider from "react-slick";  
import logo from '../images/custom_gpt_image1.png';
import projects from '../documents/projects.json'

function Projects(){

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  
  return(
  <section id="projects" className="py-20">
    <div className="text-3xl text-center font-bold mb-6">Projects</div>
    <Box className="font-poppins mx-auto mt-4 p-4">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <div className="shadow-lg flex items-center justify-center">
              <div className='w-7/12 h-full'>
                <img
                  className="w-full h-full object-cover"
                  src={logo}
                  alt={project.title}
                />
              </div>
              <div className="w-5/12 p-5 ml-5">
                <h5 className="font-poppins font-bold mb-5">
                  {project.title}
                </h5>
                <p className="font-poppins text-gray-600 mb-5">
                  {project.description}
                </p>
                <a href={project.link} className='text-cyan-700 text-sm mt-5 mb-5'>View Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Box>
  </section>
  )
}

export default Projects;
