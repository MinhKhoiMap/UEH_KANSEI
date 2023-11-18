import { Link } from "react-router-dom";

import logo_white from "../../assets/images/logo/ueh_white.svg";

const MainTopNav = () => {
  return (
    <nav
      className="main-top-nav__container fixed top-0 left-0 right-0 
                bg-[#005F69] flex justify-center py-[20px] z-[999]"
    >
      <Link to="/">
        <figure className="h-[90px]">
          <img src={logo_white} alt="logo UEH" className="w-full h-full" />
        </figure>
      </Link>
    </nav>
  );
};

export default MainTopNav;
