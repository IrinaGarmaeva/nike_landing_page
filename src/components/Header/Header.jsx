import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldHaveShadow = scrollY > 0;

      setIsScrolled(shouldHaveShadow);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 flex justify-between items-center pb-12 pt-8 px-8 sm:px-16 z-50 w-full max-container wide:px-0 ${isScrolled ? 'shadow-md bg-white bg-opacity-80' : ''}`}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
