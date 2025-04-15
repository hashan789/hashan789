import React from 'react'
import Box from '@mui/material/Box';
import Slider from "react-slick";  
import projects from '../documents/mlprojects.json';
import { FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import colors from '../documents/colorpalette.json';

export default function MLProjects() {

  const technologies = [
    {
        name: "React",
        icon: <FaReact className='text-blue-600' />
    },
    {
        name: "Node.js",
        icon: <FaNodeJs className='text-green-600' />
    },
    {
        name: "Python",
        icon: <FaPython className='text-yellow-600' />
    },
    {
        name: "JavaScript",
        icon: <FaJs className='text-yellow-600' />
    },
    {
        name: "HTML5",
        icon: <FaHtml5 className='text-orange-600' />
    },
    {
        name: "CSS3",
        icon: <FaCss3 className='text-blue-600' />
    }
  ]
  
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

  return (
    <div>
        <Box className="font-poppins mx-auto mt-4 p-4">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <div className="shadow-lg max-sm:block flex items-center justify-center">
              <div className='w-7/12 max-sm:w-full h-full'>
                <img
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="w-5/12 max-sm:w-full p-5 ml-5">
                <h5 className="font-poppins font-bold mb-5">
                  {project.title}
                </h5>
                <p className="font-poppins text-gray-600 mb-5 max-sm:text-sm">
                  {project.description}
                </p>
                <div className='flex justify-left items-center mb-5 gap-5'>
                  {
                    project.technologies.map((technology,index) => (
                      <div key={index} className={`p-2 border rounded-full`} >
                        {
                          technologies.map((tech, subIndex) => (
                            <div key={subIndex} className="">
                              {technology.language === tech.name && 
                                  tech.icon
                              }
                            </div>
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
                <div className="flex justify-left items-center gap-4">
                { project.link && <a href={project.link} className={`${colors['bg-light']} text-white text-sm mt-5 mb-5 max-sm:text-xs px-2 py-2 rounded-lg`}>View Source Code</a>}
                { project.project && <a href={project.project} className={`${colors['bg-dark']} text-white text-sm mt-5 mb-5 max-sm:text-xs px-2 py-2 rounded-lg`}>View Project</a>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Box>
    </div>
  )
}
