const SlidingText = () => {

  const texts = ["Full-Stack Developer", "AI Enthusiast"];

  return (
    <div className="h-7 overflow-hidden text-center">
      <div className="inset-0 flex flex-col items-center justify-center">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`animate-fade-in`}
          >
            <p className="font-semibold text-xl text-white">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingText;
