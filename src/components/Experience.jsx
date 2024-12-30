const WorkExperienceTree = () => {
    const experiences = [
      {
        position: "Full Stack Developer Intern",
        company: "HeliosP2P",
        description:
          "Contributing to the development of Helios peer-to-peer lending platform.",
        duration: "Oct 2024 - present",
      },
      {
        position: "Full Stack Developer Intern",
        company: "Cogniata Solutions (Pvt) Ltd",
        description:
          "Contributed to Microsoft Azure Cloud-based application development.",
        duration: "Apr 2024 - Oct 2024",
      },
    ];
  
    return (
      <section id="experience" className="py-20 bg-gray-700 text-white flex items-center justify-center">
        <div className="container flex items-center justify-evenly gap-4">
          <div>
          <h2 className="text-3xl font-bold text-center">Work Experience</h2>
          </div>
          <div className="max-w-xl border-l-4 border-blue-500 pl-8 space-y-10">
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
  