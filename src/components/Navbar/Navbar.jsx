import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../common/constants.js";
import { GoSun, GoMoon } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import SearchForm from "../SearchForm/SearchForm";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentTheme, changeCurrentTheme } = useTheme();

  return (
    <nav className="max-lg:mx-0 flex flex-row gap-8 max-xl:flex-row-reverse items-center max-lg:gap-5">
      <ul
        className="flex-1 flex justify-center items-center gap-16 max-xl:hidden"
        id="menu"
      >
        {NAV_LINKS.map((item) => (
          <li key={item.label} className="relative hover:scale-105">
            <a
              href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray ease-linear transition-all hover:text-coral-red dark:text-white-400"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col-reverse xl:hidden">
        <div
          className={`${
            isMobileMenuOpen
              ? "w-3/4 h-screen z-20 bg-white fixed top-0 right-0 shadow-xl dark:bg-[#212124]"
              : ""
          }  `}
        >
          {isMobileMenuOpen && (
            <div className="mt-8 xl:hidden">
              <ul
                className="flex flex-col items-center flex-wrap gap-4 pt-10 "
                id="menu"
              >
                {NAV_LINKS.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-xl font-bold text-slate-gray dark:text-white-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div
            className={`hidden max-xl:block dark:text-coral-red ${
              isMobileMenuOpen ? "" : ""
            }`}
          >
            {isMobileMenuOpen ? (
              <IoCloseOutline
                size={30}
                className="absolute right-10 top-3 dark:text-coral-red"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ) : (
              <RxHamburgerMenu
                size={23}
                className="dark:text-coral-red"
                onClick={() => setIsMobileMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center gap-5">
        <div>
          <SearchForm />
        </div>
        <div
          onClick={() =>
            changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
          }
        >
          {currentTheme === "light" ? (
            <GoSun size={20} />
          ) : (
            <GoMoon size={20} className="text-coral-red" />
          )}
        </div>
        <Link to="/">
          <GiShoppingCart size={21} className="dark:text-coral-red" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
