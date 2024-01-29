import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

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
        isVisible ? "block" : "hidden"
      } fixed bottom-6 right-6 transition-opacity duration-500 ease-in-out z-40`}
    >
      <div className="max-w-screen-lg mx-auto">
        <button
          className="bg-coral-red hover text-white font-bold py-2 px-2 rounded-full"
          onClick={scrollToTop}
        >
          <IoIosArrowUp size={24}/>
        </button>
      </div>
    </div>
  );

};

export default ScrollUpButton;
