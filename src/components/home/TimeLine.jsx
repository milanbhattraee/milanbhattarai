import React, { useState } from 'react'
import { FaTrain,FaBed,FaTruck} from "react-icons/fa6";
import { FaSmile,FaCheckCircle } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { PiWarningCircleFill } from "react-icons/pi";



const TimeLineProperty = [
    {
        title: "Transportation",
        icon:(<FaTrain className='text-white' />),
        description:"Simply get the ticket the bus will arrive to pick you at your point and also take you back home...",
        date:"04 / 02 / 2022"
    },
    {
        title: "Lodge and Staying Facilities",
        icon:(<FaBed className='text-white' />),
        description:"We got all the hotels for you... Travel anywhere without worrying",
        date:"04 / 03 / 2022"
    },
    {
        title: "Parks, Tourists Place ",
        icon:(<FaTruck className='text-white' />),
        description:"We got all the hotels for you... Travel anywhere without worrying",
        date:"04 / 03 / 2022"
    },
    {
        title: "Guides For you",
        icon:(<ImUsers className='text-white' />),
        description:"We got all the hotels for you... Travel anywhere without worrying",
        date:"04 / 03 / 2022"
    },
    
    
];

const TimeLine = () => {
    const [selectedIndex, setSelectedIndex ] = useState(0);
    const handleClick = (index) =>{
        setSelectedIndex(index)
    }

  return (
    <main className="flex  w-full justify-around items-center  lg:flex-row flex-col mb-14">
      <section className="lg:w-[40rem] w-full flex justify-center items-center mt-10">
        <div className="lg:w-[50%] h-[25rem] md:w-[40%] sm:w-[60%] w-[80%] flex justify-center items-center rounded-t-full bg-orange-100">
          <div className="shadow-lg flex flex-col items-center justify-evenly bg-white rounded-lg mt-14 w-[15rem] h-[15rem] text-center">
            <div>
              <h1 className="text-cyan-400 font-bold text-xl">Travelib.com</h1>
            </div>
            <div className="w-[90%] p-2 cursor-pointer bg-sky-100 flex items-center justify-center   rounded-md ">
              <FaSmile className="text-cyan-700" />
              <span className="ml-3 block text-cyan-700 ">Friendly Travel</span>
            </div>
            <div className="w-[90%] p-2 cursor-pointer bg-red-100 flex items-center justify-center  rounded-md ">
              <PiWarningCircleFill className="text-red-700" />
              <span className="ml-3 block text-red-700">Friendly Travel</span>
            </div>
            <div className="w-[90%] p-2 cursor-pointer bg-orange-100 flex items-center justify-center   rounded-md ">
              <FaCheckCircle className="text-orange-700" />
              <span className="ml-3 block text-orange-700">Friendly Travel</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className=" lg:w-[60%] w-full flex flex-col mt-5 sm:px-12 px-8 justify-center items-center">
        <h3 className="sm:text-xl text-base flex text-gray-500 font-bold mb-6 ml-3">
          All at one place
        </h3>

        <ol className="flex flex-col">
          {TimeLineProperty.map((item, index) => {
            
            return (
              <li
                key={index}
                className={`border-l-2 duration-300 transition ease-in-out ${
                  selectedIndex < index ? "border-cyan-500" : "border-green-400"
                }`}
              >
                <div className="md:flex flex-start">
                  <div
                    className={`bg-cyan-500 w-6 duration-300 transition ease-in-out cursor-pointer h-6 flex items-center justify-center rounded-full -ml-3.5 ${
                      selectedIndex < index ? "bg-cyan-500" : "bg-green-400"
                    }`}
                    onClick={() => {
                      handleClick(index);
                    }}
                  >
                    {item.icon}
                  </div>
                  <h1 className="ml-3"></h1>
                  <div className="block p-3 rounded-lg shadow-lg bg-white sm:max-w-md max-w-full ml-6 cursor-pointer mb-8"onClick={() => {
                      handleClick(index);
                    }}>
                    <div className="flex justify-between mb-4">
                      <a
                        href="#!"
                        className={`font-medium ${
                          selectedIndex < index
                            ? "text-cyan-500 hover:text-cyan-700"
                            : "text-green-400 hover:text-green-700"
                        }    sm:text-sm text-[11px]`}
                      >
                        {item.title}
                      </a>
                      <a
                        href="#!"
                        className={`font-medium ${
                          selectedIndex < index
                            ? "text-cyan-500 hover:text-cyan-700"
                            : "text-green-400 hover:text-green-700"
                        }    sm:text-sm text-[11px]`}
                      >
                        {item.date}
                      </a>
                    </div>
                    <p className="text-gray-700 sm:text-sm text-[14px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}

export default TimeLine