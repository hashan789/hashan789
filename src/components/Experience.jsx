import experiences from '../documents/experiences.json'

const WorkExperienceTree = () => {
  
    return (
      <section id="experience" className="py-20 bg-gray-700 text-white flex items-center justify-center">
        <div className="container max-sm:block lg:flex items-center justify-evenly gap-4">
          <div>
          <h2 className="text-3xl font-bold text-center max-sm:text-2xl max-sm:mb-8">Work Experience</h2>
          </div>
          <div className="max-w-xl lg:border-l-4 lg:border-blue-500 pl-8 space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="w-10 h-10 mt-2 mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold max-sm:text-lg">{exp.position}</h3>
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
  