"use client"
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const dropDownList = [
  {
    id: 1,
    value: "By Rating",
  },
  {
    id: 2,
    value: "By Color",
  },
  {
    id: 3,
    value: "By Price",
  },
  {
    id: 4,
    value: "By Brand",
  },
  {
    id: 5,
    value: "By Category",
  },
];

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(dropDownList[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="flex px-2 md:px-4 py-3 rounded-lg border border-[#D4D4D4] md:w-[256px] relative cursor-pointer">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-[16px] md:text-[15px] md:leading-[17px] font-medium text-black select-none whitespace-nowrap">{selectedValue.value}</h3>
        <MdKeyboardArrowDown className={`text-3xl text-black  duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`} />
      </div>

      <ul
        className={`flex  flex-col absolute top-[3.5rem] bg-[#1E3237] rounded-[6px] border border-[#E2E8FF]/20 shadow-md z-40 w-full left-0 duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0 "
        }`}
      >
        <h2 className="py-2.5 text-[12px] px-[15px] text-[#E2E8FF]/60 font-semibold border-b  border-[#E2E8FF]/20 cursor-not-allowed  uppercase select-none">Select option</h2>
        {dropDownList.slice(1, 5).map((item, index) => (
          <li
            onClick={() => setSelectedValue(item)}
            key={item.id}
            className={`py-3 px-[15px] text-[#E2E8FF]/60 hover:text-[#E2E8FF] cursor-pointer ease-in-out duration-300 font-medium hover:bg-secondaryBg/50 select-none ${
              index !== dropDownList.length - 2 ? "border-b  border-[#E2E8FF]/20" : ""
            }`}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;