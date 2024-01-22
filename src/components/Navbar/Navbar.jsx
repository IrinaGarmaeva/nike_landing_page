import { hamburger } from "../../assets/icons";
import { NAV_LINKS } from "../../common/constants";

const Navbar = () => {
  return (
    <nav className="max-container max-lg: mx-0">
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
    </nav>
  );
};

export default Navbar;
