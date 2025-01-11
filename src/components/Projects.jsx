// import { Card } from "@shadcn/ui";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
    <Box className="font-poppins max-w-5xl mx-auto mt-10 p-4">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Box key={index} className="p-4">
            <Card className="shadow-lg">
              <CardMedia
                component="img"
                height="200"
                image={logo}
                alt={project.title}
              />
              <CardContent>
                <h5 className="font-poppins font-bold">
                  {project.title}
                </h5>
                <p className="font-poppins text-gray-600">
                  {project.description}
                </p>
                <a href={project.link} className='text-cyan-700 text-sm mt-5'>View Source Code</a>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  </section>
  )
}

export default Projects;
