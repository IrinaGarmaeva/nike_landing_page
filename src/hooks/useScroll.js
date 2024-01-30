import { useState, useEffect } from 'react';

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let isScrolling;

    const handleScroll = () => {
      setIsScrolled(true);

      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        setIsScrolled(false);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled };
};

export default useScroll;

