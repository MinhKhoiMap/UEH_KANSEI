import ueh_white from "../../assets/images/logo/ueh_white.svg";

import "./MainFooter.css";

const MainFooter = () => {
  return (
    <footer
      className="bg-[#005F69] pt-7 pb-[71px] px-16 md:px-20 lg:px-[105px] xl:px-0"
      id="main__footer"
    >
      <div className="max-w-[1124px] mx-auto">
        <figure className="mb-8">
          <img src={ueh_white} alt="" />
        </figure>
        <div className="flex gap-y-4 gap-x-8 xl:gap-0 xl:justify-between flex-wrap xl:flex-nowrap pr-12 xl:pr-0">
          <div className="md:mr-8 lg:mr-8">
            <p>59C Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh</p>
            <p>Email: info@ueh.edu.vn</p>
            <p>© 2023 Trường Đại học Kinh tế TP. Hồ Chí Minh</p>
          </div>
          <div>
            <a href="#" className="underline block text-white">
              UEH Tuyển sinh
            </a>
            <a href="#" className="underline block text-white">
              UEH Future
            </a>
            <a href="#" className="underline block text-white">
              UEH Green Campus
            </a>
          </div>
          <div>
            <a href="#" className="underline block text-white">
              UEH Portal
            </a>
            <a href="#" className="underline block text-white">
              UEH Virtual Tour
            </a>
          </div>
          <div>
            {" "}
            <a href="#" className="underline block text-white">
              UEH Global
            </a>
            <a href="#" className="underline block text-white">
              UEH Giving
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
