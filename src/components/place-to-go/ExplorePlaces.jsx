import React from "react";
import SearchBar from "../common/SearchBar";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ExplorePlaces = () => {
  const placesItem = useSelector(store=>store.explorePlaces);
  

  return (
    <main className="w-full flex pt-7 items-center justify-between flex-col ">
    
      <div className="w-full flex justify-center md:justify-end md:pr-16 pr-0">
        <SearchBar />
      </div>
      <div className="w-full flex md:flex-row flex-col-reverse  justify-between px-0 sm:px-4  ">
        <section className=" flex mt-5 flex-col px-5 md:px-0 justify-start  items-center">
          <div className="bg-white border-r rounded-lg  border-gray-200 flex py-4 justify-start  items-center flex-col  w-full">
            <div className=" pb-4 text-md font-bold px-8">
              {" "}
              <h1>
                <span>
                  <BsFillInfoCircleFill className="inline-block text-base mb-1 text-cyan-500" />
                </span>{" "}
                Filter Results
              </h1>
            </div>
            <div className="w-full px-8 ">
              <label htmlFor="countries" className="block">
                Type
              </label>
              <select
                id="countries"
                className=" bg-gray-200 w-full  outline-none py-1 px-4 rounded-md my-2"
              >
                <option value={"Plan"}>Plan</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="w-full px-8 ">
              <label htmlFor="countries" className="block">
                Start Date
              </label>

              <input
                className=" bg-gray-200 w-full  outline-none py-1 px-4 rounded-md my-2"
                type="date"
                name=""
                id=""
              />
            </div>
            <div className="w-full px-8 ">
              <label htmlFor="countries" className="block">
                End Date
              </label>

              <input
                className=" bg-gray-200 w-full  outline-none py-1 px-4 rounded-md my-2"
                type="date"
                name=""
                id=""
              />
            </div>

            <div className="w-full px-8 ">
              <label htmlFor="countries" className="block">
                Price Range
              </label>
              <select
                id="countries"
                className=" bg-gray-200 w-full  outline-none py-1 px-4 rounded-md my-2"
              >
                <option value={"h"}>5000-10000</option>
                <option value="US">10000-20000</option>
                <option value="CA">20000-30000</option>
                <option value="FR">30000-40000</option>
                <option value="DE">40000-50000</option>
              </select>
            </div>
          </div>
          <div className="flex w-full justify-center items-center p-4  bg-white mt-4 rounded-md flex-col">
            <div className="flex w-full justify-start gap-2 items-center">
              <img src="images/common/logo.png" alt="" />
              <h1>Travelib</h1>
            </div>
            <div className="flex w-full justify-center p-3 items-start  flex-col">
              <h6 className="relative pl-5">
                <span className="absolute left-0 top-1">
                  <IoCallSharp />
                </span>
                (458) 632-8404
              </h6>
              <h6 className="relative pl-5">
                <span className="absolute left-0 top-1">
                  <FaLocationDot />
                </span>
                Mechinagar-1 ,Jhapa
              </h6>
              <h6 className="relative pl-5">
                {" "}
                <span className="absolute left-0 top-1">
                  <FaLocationArrow />
                </span>
                milanbhattarai0007@gmail.com
              </h6>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col ml-0 sm:ml-5 overflow-hidden">
          <div className="w-full text-center flex justify-center items-center">
            <div className="flex justify-center items-center w-full">
              <h1 className="w-full font-bold text-xl pt-8 pb-3">EXPLORE PLACES</h1>
            </div>
          </div>
          <div className=" w-full  flex px-4 sm:px-6  justify-start items-center py-4 gap-x-6 gap-y-5  overflow-hidden  overflow-x-auto lg:grid lg:grid-cols-3 lg:place-items-center border-b-2 border-gray-300">
            {placesItem.map((item, index) => {
              return (
                <Link
                to={`description/${item.id}`}
                  key={item.id}
                  className=" flex justify-center items-center w-full flex-col py-1 p-0 hover:scale-105 duration-500 ease-in-out "
                >
                  <div className="relative flex md:w-96 w-72 h-60 lg:w-full  flex-col  cursor-pointer  items-center">
                    <img
                      className="h-full w-full rounded-md"
                      src={item.img}
                      alt=""
                    />
                    <div className="absolute inset-0 hover:bg-black opacity-30 rounded-md duration-500 ease-in-out h-60"></div>

                  </div>
                    <h2 className="font-bold text-sm pt-2 ">{item.name}</h2>
                </Link>
              );
            })}
          </div>
          <div className="text-center w-full mt-4">
            <button className="py-2 px-14 bg-indigo-600 border-none rounded-md   text-white hover:bg-indigo-800 duration-200 ease-in-out">Next</button>
          </div>
        </section>
        
      </div>
    </main>
  );
};

export default ExplorePlaces;
