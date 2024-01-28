import { headerLogo } from "../../assets/images";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className="flex justify-between items-center padding z-10 w-full max-container">
      <a href="/">
        <img src={headerLogo} alt="nike logo" width={130} height={29} />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
