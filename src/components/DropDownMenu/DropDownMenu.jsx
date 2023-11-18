import { useState } from "react";
import "./DropDownMenu.css";

const DropDownMenu = ({ menuItems = [] }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="dropdown_menu__container relative">
      <div
        className="dropdown__button rounded-[20px] cursor-pointer flex items-center px-4 py-2"
        onClick={() => setIsShow((prev) => !prev)}
      >
        <span className="tag-selected mt-1 flex-1 select-none">Choose something</span>
        <span className="icon inline-flex items-center px-2 py-[6px]">
          <i className="fa-solid fa-angle-down text-[#F26F33]"></i>
        </span>
      </div>
      {isShow && (
        <div className="dropdown__list absolute top-full">
          {menuItems.map((menuItem) => (
            <div>{menuItem}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
