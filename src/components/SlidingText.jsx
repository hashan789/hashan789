import React, { useState, useEffect } from "react";

const SlidingText = () => {
  const [currentText, setCurrentText] = useState(0);

  const texts = ["Full-Stack Developer", "AI Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [texts.length]);

  return (
    <div className="h-auto overflow-hidden text-center">
      <div className="inset-0 flex flex-col items-center justify-center">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`transition-transform duration-700 ${
              index === currentText
                ? "translate-y-0"
                : index < currentText
                ? "-translate-y-full"
                : "translate-y-full"
            }`}
          >
            <p className="font-semibold text-white">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingText;
