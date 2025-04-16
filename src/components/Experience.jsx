import { Link } from 'react-scroll';
import experiences from '../documents/experiences.json'
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const WorkExperienceTree = () => (
      <section id="experience" className={`py-20 bg-workspace-dark text-black flex items-center justify-center`}>
        <div className="container max-sm:block lg:flex items-center justify-evenly gap-4">
          <div>
          <h2 className="text-3xl font-bold text-center max-sm:text-2xl max-sm:mb-8">Work Experience</h2>
          </div>
          <div className="max-w-xl lg:border-l-4 lg:border-blue-500 pl-8 space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`w-10 h-10 mt-2 mb-2 bg-white text-workspace-light rounded-full flex items-center justify-center`}>
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold max-sm:text-lg">{exp.position}</h3>
                  <p className="text-gray-700 text-lg">{exp.company}</p>
                  <div className="flex justify-left items-center gap-4 my-3">
                    <div className="p-2 border rounded-full">
                      <FaFacebook size={20} className='hover:text-blue-800 transition-all duration-300'/>
                    </div>
                    <div className="p-2 border rounded-full">
                      <FaLinkedin size={20} className='hover:text-blue-500 transition-all duration-300'/>
                    </div>
                  </div>
                  <p className="mt-2 text-sm">{exp.description}</p>
                  <span className="text-xs text-gray-700">{exp.duration}</span>
                  <div className="mt-3">
                  <Link to={exp.article} className={`bg-white text-workspace-light text-sm font-semibold px-6 py-2 max-sm:mb-3 rounded-full shadow hover:bg-gray-100 transition duration-300`}>
                    Read More
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  
  export default WorkExperienceTree;
  