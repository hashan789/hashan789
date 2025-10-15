import React from 'react'
import Box from '@mui/material/Box';
import Slider from "react-slick";  
import projects from '../documents/mlprojects.json';
import { FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiSupabase, SiRedis, SiTensorflow, SiOpenai, SiPrisma, SiExpress, SiTailwindcss, SiLangchain } from 'react-icons/si';
import image1 from '../images/chatbot.png';
import image2 from '../images/custom_gpt_image1.png';
import image3 from '../images/doc_query_ai.png';
import image4 from '../images/services_assistant.png';

export default function MLProjects() {

  const images = [
      image1,
      image2,
      image3,
      image4
  ]

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
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className='text-blue-600' />
    },
    {
        name: "Next",
        icon: <SiNextdotjs className='text-black' />
    },
    {
        name: "Supabase",
        icon: <SiSupabase className='text-blue-600' />
    },
    {
        name: "Redis",
        icon: <SiRedis className='text-blue-600' />
    },
    {
        name: "TensorFlow",
        icon: <SiTensorflow className='text-amber-600' />
    },
    {
        name: "Openai",
        icon: <SiOpenai className='text-black' />
    },
    {
        name: "Prisma",
        icon: <SiPrisma className='text-black' />
    },
    {
        name: "Express JS",
        icon: <SiExpress className='text-black' />
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className='text-black' />
    },
    {
        name: "Langchain",
        icon: <SiLangchain className='text-black' />
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
        <Box className="mx-auto mt-4 p-4">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <div className="shadow-lg max-sm:block flex items-center justify-center">
              <div className='w-7/12 max-sm:w-full h-full'>
                <img
                  className="w-full h-full object-cover"
                  src={images[index]}
                  alt={project.title}
                />
              </div>
              <div className="w-5/12 max-sm:w-full p-5 ml-5">
                <h5 className="font-bold mb-5">
                  {project.title}
                </h5>
                <p className="text-gray-600 mb-5 max-sm:text-sm">
                  {project.description}
                </p>
                <div className='lg:flex lg:justify-left lg:items-center max-lg:inline-grid max-lg:grid-cols-5 max-lg:gap-3 mb-5 lg:gap-5'>
                  {
                    project.technologies.map((technology,index) => (
                        technologies.map((tech, subIndex) => (
                              technology.language === tech.name &&  
                              <div key={index} className={`p-2 rounded-full border`} >
                                <div key={subIndex} className="">
                                      {tech.icon}
                                </div>
                              </div>    
                        ))     
                    ))
                  }
                </div>
                <div className="flex justify-left items-center gap-4">
                { project.link && <a href={project.link} className={`bg-workspace-light text-white text-sm mt-5 mb-5 max-sm:text-xs px-2 py-2 rounded-lg`}>View Source Code</a>}
                { project.project && <a href={project.project} className={`bg-workspace-dark text-white text-sm mt-5 mb-5 max-sm:text-xs px-2 py-2 rounded-lg`}>View Project</a>}
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
