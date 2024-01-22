import { headerLogo } from "../../../assets/images";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="flex justify-between padding-x py-10 absolute z-10 w-full">
      <a href="/">
        <img src={headerLogo} alt="nike logo" width={130} height={29} />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
