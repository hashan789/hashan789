import React from "react";
import meme_gen from "../images/meme_gen.png"; // replace with your meme icon

const SpecialProject = () => (
    <div className="lg:w-full max-sm:container font-poppins bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white p-10 shadow-2xl">
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
          <div className="mt-6 lg:flex max-sm:block justify-center md:justify-start lg:gap-4">
            <button className="bg-white text-red-500 text-sm font-semibold px-6 py-2 max-sm:mb-3 rounded-full shadow hover:bg-gray-100 transition duration-300">
              Try Now 🚀
            </button>
            <button className="bg-white text-blue-500 text-sm font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300">
              View Source Code
            </button>
          </div>
        </div>

        {/* Right Image / Animation */}
        <div className="lg:w-1/2 max-sm:w-full max-sm:mt-5 flex justify-end">
          <div className="w-full bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <img
              src={meme_gen}
              alt="Meme Icon"
              className="w-full object-fit"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
    </div>
  );

export default SpecialProject;
