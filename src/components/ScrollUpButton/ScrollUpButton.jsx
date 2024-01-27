import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-6 right-6 transition-opacity duration-500 ease-in-out`}
    >
      <div className="max-w-screen-lg mx-auto">
        <button
          className="bg-coral-red hover text-white font-bold py-2 px-4 rounded-full"
          onClick={scrollToTop}
        >
          <FaArrowUp size={30}/>
        </button>
      </div>
    </div>
  );

};

export default ScrollUpButton;
