import React from 'react'
import Box from '@mui/material/Box';
import Slider from "react-slick";  
import projects from '../documents/mlprojects.json'

export default function MLProjects() {

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
                      <p key={index} className={`font-poppins max-sm:text-xs`} style={{ color : technology.color }}>
                        {technology.language}
                      </p>
                    ))
                  }
                </div>
                <a href={project.link} className='text-cyan-700 text-sm mt-5 mb-5 max-sm:text-xs'>View Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Box>
    </div>
  )
}
