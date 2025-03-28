import portfolio_image from '../images/hashan_malinda_photo.jpeg';

const About = () => (
    <section id="about" className="py-20 bg-gray-100">
      <div className="sm:block lg:flex justify-evenly items-center max-sm:text-center">
        <div className="w-48 h-48 rounded-full border max-sm:w-0 max-sm:h-0" style={{ backgroundImage : `url(${portfolio_image})` , backgroundPosition : 'center' , backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}></div>
        <div className="sm:block align-left">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <div className="w-0 h-0 rounded-full bg-slate-400 border max-sm:w-32 max-sm:h-32 max-sm:relative max-sm:left-1/3 max-sm:mb-5"></div>
        <p className="text-gray-700 max-w-2xl max-sm:mx-5 max-sm:text-sm">
        I am a full-stack developer with expertise in Microsoft Azure, React.js, and Python, coupled with a strong foundation in Machine Learning. My experience spans designing and deploying cloud-based solutions, building dynamic and responsive web applications, and developing predictive models that drive data-driven decision-making.
        </p>
        </div>
      </div>
    </section>
  );
  
  export default About;
  