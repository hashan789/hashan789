import { useEffect, useState } from 'react';
import portfolio_image from '../images/hashan_malinda_image.jpg';
import AboutMe from '../documents/aboutme.txt';

function About () {

  const [text, setText] = useState('');

  useEffect(() => {
    fetch(AboutMe)
      .then((res) => res.text())
      .then((data) => setText(data))
      .catch((err) => console.error('Error fetching text file:', err));
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="sm:block lg:flex justify-evenly items-center max-sm:text-center">
        <div className="w-48 h-48 rounded-full border max-sm:w-0 max-sm:h-0" style={{ backgroundImage : `url(${portfolio_image})` , backgroundPosition : 'center' , backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}></div>
        <div className="sm:block align-left">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <div className="w-0 h-0 rounded-full border max-sm:w-32 max-sm:h-32 max-sm:relative max-sm:left-1/3 max-sm:mb-5" style={{ backgroundImage : `url(${portfolio_image})` , backgroundPosition : 'center' , backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}></div>
        <p className="text-gray-700 max-w-2xl max-sm:mx-5 max-sm:text-xs">
          {text}
        </p>
        </div>
      </div>
    </section>
  )
}
  
export default About;
  