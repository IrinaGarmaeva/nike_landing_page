import { Link } from "react-router-dom";
import { headerLogo, nikeLogo } from "../../assets/images";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={headerLogo}
        alt="nike logo"
        width={130}
        height={29}
        className="hidden md:block"
      />
      <img src={nikeLogo} alt="nike logo" className="md:hidden" width={70} />
    </Link>
  );
};

export default Logo;
