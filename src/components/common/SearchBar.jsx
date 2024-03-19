import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
const SearchBar = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const inputVal = useRef("");

  const handleChange = (value) => {
    let currentValue = value.target.value;
    currentValue.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
  };

  const handleClick = () => {
    inputVal.current.value = "";
    inputVal.current.focus();
    setIsEmpty(true);
  };
  return (
    <div className="sm:w-[70%] w-[100%] relative flex items-center justify-end mt-5 md:flex-shrink-1 flex-shrink-3 mx-12 ">
      <input
        ref={inputVal}
        onChange={handleChange}
        className="- w-full rounded-md outline-none border bg-gray-200 px-5 py-2"
        type=""
        name=""
        id=""
        placeholder="Explore Places"
      />
      {!isEmpty && (
        <span
          className="p-3 right-10 rounded-full cursor-pointer duration-150 ease-linear hover:bg-slate-300 absolute "
          onClick={handleClick}
        >
          {" "}
          <GrClose />
        </span>
      )}
      <span className="p-3 rounded-full cursor-pointer duration-150 ease-linear hover:bg-slate-300 absolute ">
        {" "}
        <FaSearch className="text-cyan-600" />
      </span>
    </div>
  );
};

export default SearchBar;
