import { Outlet } from "react-router-dom";
import MainFooter from "../MainFooter/MainFooter";

const MainLayout = () => {
  return (
    <div className="main_layout pt-[226px]">
      <div className="content__section max-w-[1124px] mx-auto min-h-[500px]">
        <Outlet />
      </div>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
