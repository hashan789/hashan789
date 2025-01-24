const About = () => (
    <section id="about" className="py-20 bg-gray-100">
      <div className="sm:block lg:flex justify-evenly items-center text-center">
        <div className="w-32 h-32 rounded-full bg-slate-400 border max-sm:w-0 max-sm:h-0"></div>
        <div className="sm:block align-left">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <div className="w-32 h-32 rounded-full bg-slate-400 border max-sm:relative max-sm:left-1/3 max-sm:mb-5"></div>
        <p className="text-gray-700 max-w-2xl max-sm:mx-5 max-sm:text-sm lg:text-xl">
        I am a full-stack developer with expertise in Microsoft Azure, React.js, and Python, coupled with a strong foundation in Machine Learning. My experience spans designing and deploying cloud-based solutions, building dynamic and responsive web applications, and developing predictive models that drive data-driven decision-making.
        </p>
        </div>
      </div>
    </section>
  );
  
  export default About;
  