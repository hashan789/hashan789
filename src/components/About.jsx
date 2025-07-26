import { useEffect, useState } from 'react';
import portfolio_image from '../images/hashan_malinda_image.jpg';
import AboutMe from '../documents/aboutme.txt';
import useInView from '../hooks/useInView';

function About () {

  const [text, setText] = useState('');

  const [ref, setInView] = useInView({ threshold : 0.5 })

  useEffect(() => {

    const controller = new AbortController();

    fetch(AboutMe, { signal: controller.signal })
      .then((res) => res.text())
      .then((data) => setText(data))
      .catch((err) => console.error('Error fetching text file:', err));

    return () => {
      controller.abort(); // Cleanup function to abort the fetch request
    }
  }, []);

  return (
    <section id="about" className="lg:py-20 max-md:pb-20 max-md:py-[10px] max-lg:py-[50px]">
      <div ref={ref} className={`max-lg:justify-center max-lg:items-center max-md:block lg:flex max-lg:gap-[50px] max-lg:px-[50px] max-lg:flex justify-evenly items-center max-md:text-justify transition-all duration-1000 ${ setInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-[250px] h-[250px] rounded-lg border max-md:w-0 max-md:h-0" style={{ backgroundImage : `url(${portfolio_image})` , backgroundPosition : 'center' , backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}></div>
        <div className={`sm:block align-left`}>
        <h2 className="lg:text-5xl max-lg:text-2xl font-bold mb-[50px] lg:text-left max-lg:text-center">About Me</h2>
        <div className="w-0 h-0 max-md:w-full max-md:h-1/4 max-md:flex max-md:justify-center max-md:items-center max-lg:flex max-lg:justify-center max-lg:items-center">
          <div className="w-0 h-0 rounded-full border max-md:w-32 max-md:h-32 max-md:mb-5" style={{ backgroundImage : `url(${portfolio_image})` , backgroundPosition : 'center' , backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}></div>
        </div>
        <p className="text-gray-700 max-w-2xl max-md:mx-5 max-md:text-xs">
          {text.split('#')[0]}
        </p>
        </div>
      </div>
    </section>
  )
}
  
export default About;
  