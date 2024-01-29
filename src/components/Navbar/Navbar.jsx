import { useState } from "react";
import { Link } from "react-router-dom";
import { hamburger, closeIcon } from "../../assets/icons";
import { NAV_LINKS } from "../../common/constants";
import { GoSun, GoMoon } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import SearchForm from "../SearchForm/SearchForm";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="max-lg:mx-0 flex flex-row gap-10 max-xl:flex-row-reverse items-center max-lg:gap-6">
      <ul
        className="flex-1 flex justify-center items-center gap-16 max-xl:hidden"
        id="menu"
      >
        {NAV_LINKS.map(
          (
            item
          ) => (
            <li key={item.label} className="relative hover:scale-105">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray ease-linear transition-all hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          )
        )}
      </ul>
      <div className="flex flex-col-reverse gap-5 md:hidden">

        <div
          className={`${
            isMobileMenuOpen
              ? "w-3/4 h-screen z-20 bg-white fixed top-0 right-0 shadow-xl"
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
                  <li key={item.label} onClick={() => setIsMobileMenuOpen(false)}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-xl font-bold text-slate-gray"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={`hidden max-xl:block  ${isMobileMenuOpen ? "" : ""}`}>
            {isMobileMenuOpen ? (
              <img
                src={closeIcon}
                alt="close menu icon"
                width={22}
                height={22}
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute right-10 top-3"
              />
            ) : (
              <img
                src={hamburger}
                alt="hamburger menu icon"
                width={25}
                height={25}
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
        <div className="">
          <GoSun size={20} />
        </div>
        <Link to="/cart" className="">
          <GiShoppingCart size={21} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
