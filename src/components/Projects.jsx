// import { Card } from "@shadcn/ui";

import { useState } from "react";
import WebProjects from "./WebProjects";
import MLProjects from "./MLProjects";

function Projects(){

  const [ section, setSection ] = useState("Web");
  
  return(
  <section id="projects" className="py-20">
    <div className="text-3xl text-center font-bold mb-6">Projects</div>
    <div className="flex justify-around items-center">
      <h2 className={`px-5 py-2 ${section === "Web" ? 'bg-blue-600 text-white' :  'bg-black text-blue-600' } font-semibold text-xl`} onClick={() => setSection("Web")}>Web Development</h2>
      <h2 className={`px-5 py-2 ${section === "ML" ? 'bg-blue-600 text-white' :  'bg-black text-blue-600' } font-semibold text-xl`} onClick={() => setSection("ML")}>Machine Learning</h2>
    </div>
      <div className="mt-5">
    {
        section === "Web" && <WebProjects /> 
    }
    {
        section === "ML" && <MLProjects /> 
    }
      </div>
  </section>
  )
}

export default Projects;
