const WorkExperienceTree = () => {
    const experiences = [
      {
        position: "AI Solutions Developer",
        company: "Microsoft Azure AI Studio",
        description:
          "Developed and deployed AI-driven healthcare and financial solutions using GPT models and Azure services.",
        duration: "Jan 2022 - Present",
      },
      {
        position: "Web Developer",
        company: "Freelance Platforms",
        description:
          "Built scalable web scraping solutions and modern websites using React, Node.js, and Tailwind.",
        duration: "Jun 2020 - Dec 2021",
      },
      {
        position: "Software Engineer Intern",
        company: "Google Cloud Platform",
        description:
          "Contributed to cloud-based application development and real-time data analysis pipelines.",
        duration: "Jan 2020 - May 2020",
      },
    ];
  
    return (
      <section id="experience" className="py-20 mx-auto bg-gray-700 text-white">
        <div className="container block mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>
          <div className="max-w-xl mx-auto border-l-4 border-blue-500 pl-8 space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="w-10 h-10 mt-2 mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-blue-500 text-lg">{exp.company}</p>
                  <p className="text-gray-100 mt-2 text-sm">{exp.description}</p>
                  <span className="text-xs text-gray-400">{exp.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WorkExperienceTree;
  