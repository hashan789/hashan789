import React from "react";

const SpecialProject = () => (
    <div className="w-full font-poppins bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-around">
        {/* Left Content */}
        <div className="w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-3 animate-bounce">
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
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="bg-white text-red-500 text-sm font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300">
              Try Now 🚀
            </button>
            <button className="bg-white text-blue-500 text-sm font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300">
              View Source Code
            </button>
          </div>
        </div>

        {/* Right Image / Animation */}
        <div className="w-1/2 flex justify-end">
          <div className="w-52 h-52 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <img
              src="/your-meme-icon.png" // replace with your meme icon
              alt="Meme Icon"
              className="w-24 h-24"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
    </div>
  );

export default SpecialProject;
