// import { Card } from "@shadcn/ui";

import { useState } from "react";
import WebProjects from "./WebProjects";
import MLProjects from "./MLProjects";
import useInView from "../hooks/useInView";

function Projects(){

  const [ section, setSection ] = useState("Web");

  const [ref, setInView] = useInView({ threshold : 0.5 })
  
  return(
  <section id="projects" className="py-20">
      <div ref={ref} className={`transition-all duration-1000 ${ setInView ? 'opacity-100' : 'opacity-0'}`}> 
        <div className="text-3xl text-center font-bold mb-6">Projects</div>
        <div className="flex justify-around items-center">
          <h2 className={`px-5 py-2 cursor-pointer ${section === "Web" ? 'text-workspace-dark' :  'text-black' } font-semibold lg:text-xl max-sm:text-sm`} onClick={() => setSection("Web")}>Web Development</h2>
          <h2 className={`px-5 py-2 cursor-pointer ${section === "ML" ? 'text-workspace-dark' :  'text-black' } font-semibold lg:text-xl max-sm:text-sm`} onClick={() => setSection("ML")}>Machine Learning</h2>
        </div>
          <div className="mt-5">
        {
            section === "Web" && <WebProjects /> 
        }
        {
            section === "ML" && <MLProjects /> 
        }
          </div>
      </div>
  </section>
  )
}

export default Projects;
