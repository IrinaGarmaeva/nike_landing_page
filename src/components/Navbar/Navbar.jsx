import { hamburger } from "../../assets/icons";
import { NAV_LINKS } from "../../common/constants";
import { GoSun, GoMoon } from "react-icons/go";
import { GiShoppingCart  } from "react-icons/gi";
import SearchForm from "../SearchForm/SearchForm";

const Navbar = () => {
  return (
    <nav className="max-container max-lg: mx-0 flex flex-row gap-10">
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {NAV_LINKS.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden max-lg:block">
        <img src={hamburger} alt="hamburger menu icon" width={25} height={25}/>
      </div>
      <div className="flex flex-row justify-between items-center gap-5">
        <SearchForm />
        <div className="">
          <GoSun size={20}/>
        </div>
        <div className="">
          <GiShoppingCart  size={21}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
