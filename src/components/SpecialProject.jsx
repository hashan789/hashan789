import React from "react";
import meme_gen from "../images/meme_gen.png"; // replace with your meme icon
import { Link } from "react-router-dom";

const SpecialProject = () => (
    <div className={`lg:w-full max-sm:container font-poppins bg-gradient-to-r from-workspace-dark to-workspace-light text-black p-10 shadow-2xl`}>
      <div className="lg:flex max-sm:block flex-col md:flex-row items-center justify-around">
        {/* Left Content */}
        <div className="lg:w-1/2 max-sm:w-full text-center md:text-left">
          <h1 className="lg:text-4xl max-sm:text-2xl font-extrabold mb-3 animate-bounce">
            Meme Gen
          </h1>
          <i className="text-sm">
            Tired of scrolling past memes and thinking <em>“I could{"’"}ve made that better”?</em> 
          </i>
          {/* <ul className='my-4 space-x-2 text-sm'>
            <li>🖼 Upload or choose from popular meme templates</li>
            <li>✍️ Add hilarious captions with real-time preview</li>
            <li>🚀 Instantly download designed meme templates</li>
          </ul> */}
          <p className="text-sm my-3">
            Say hello to <b>Meme Gen</b>, the easiest and fastest way to turn your ideas into viral-worthy memes!
          </p>
          <div className="mt-6 lg:flex max-sm:grid justify-center md:justify-start lg:gap-4">
            <Link to={"https://zealous-forest-0458eb40f.4.azurestaticapps.net/"} className={`bg-white text-workspace-dark text-sm font-semibold px-6 py-2 max-sm:mb-3 rounded-full shadow hover:bg-gray-100 transition duration-300`}>
              Try Now 🚀
            </Link>
            <Link to={"https://github.com/hashan789/Meme-Gen"} className={`bg-white text-workspace-light text-sm font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300`}>
              View Source Code
            </Link>
          </div>
        </div>

        {/* Right Image / Animation */}
        <div className="lg:w-1/2 max-sm:w-full max-sm:mt-5 flex justify-end">
          <div className="w-full flex items-center justify-center animate-pulse">
            <img
              src={meme_gen}
              alt="Meme Icon"
              className="w-full object-fit mix-blend-color-burn"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
    </div>
  );

export default SpecialProject;
