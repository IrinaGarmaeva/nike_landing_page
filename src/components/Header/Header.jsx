import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import useScroll from "../../hooks/useScroll";

const Header = () => {
  const { isScrolled } = useScroll();

  return (
    <header
      className={`fixed top-0 z-50 w-full ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="max-container wide:px-0 flex justify-between items-center pb-4 pt-8 px-8 sm:px-16 bg-white dark:bg-bg-dark ">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
