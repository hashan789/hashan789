// import { Card } from "@shadcn/ui";
  

const projects = [
  { title: "Financial research assistant", description: "AI-driven healthcare app.", link: "#" },
  { title: "Web Scraper", description: "Automated data scraping tool.", link: "#" },
  { title: "Python AI chatbot", description: "Automated data scraping tool.", link: "#" },
  { title: "Email spam classifier", description: "Automated data scraping tool.", link: "#" },
];

const Projects = () => (
  <section id="projects" className="py-20">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
           <div key={project.title} className="p-4 shadow-lg">
             <h3 className="text-xl font-semibold">{project.title}</h3>
             <p className="text-gray-600">{project.description}</p>
             <a
               href={project.link}
               className="text-blue-600 hover:underline mt-2 block"
             >
               View Details
             </a>
           </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
