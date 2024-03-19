import React from "react";
import SearchBar from "../common/SearchBar";
const SearchNav = () => {
  

  return (
    <section className="w-full flex justify-center my-1  relative">
      <div className="w-[80%] h-20  flex justify-around sm:flex-row flex-col gap-3 items-center sm:mt-2 mt-8 ">
        <div className="md:flex-shrink-1 flex-shrink-0 sm:static absolute top-4  left-7">
          <h2 className="font-bold text-sm sm:text-md border-b-4 rounded-3xl px-3 md:px-5 border-indigo-400">
            PROUDLY NEPALI
          </h2>
        </div>
        <SearchBar  />
        <div className="flex md:flex-shrink-1 flex-shrink-0 sm:static absolute top-5 right-6 ">
          <div className="sm:w-7 w-4 mx-2 cursor-pointer hover:scale-125 duration-300 ease-in-out">
            <img src="images/social-icons/twitter.png" alt="" />
          </div>
          <div className="sm:w-7 w-4 mx-2 cursor-pointer hover:scale-125 duration-300 ease-in-out">
            <img src="images/social-icons/facebook.png" alt="" />
          </div>
          <div className="sm:w-7 w-4 mx-2 cursor-pointer hover:scale-125 duration-300 ease-in-out">
            <img src="images/social-icons/youtube.png" alt="" />
          </div>
          <div className="sm:w-7 w-4 mx-2 cursor-pointer hover:scale-125 duration-300 ease-in-out">
            <img src="images/social-icons/linkden.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchNav;
