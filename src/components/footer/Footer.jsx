import React from "react";
import { FaUserCircle,FaLocationArrow } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { SiVisa } from "react-icons/si";


const Footer = () => {
  return (
    <main className="w-full flex justify-center items-center py-16 bg-gray-100 ">
      <div className="w-[80%] flex justify-around items-center flex-wrap gap-14">
        <section className="">
          <div>
            <h1 className="font-semibold text-xl text-center">Our Contact Details</h1>
          </div>
          <div className="flex justify-start py-6 text-gray-700 flex-wrap gap-4">
            <div>
              <img
                className="min-h-12 min-w-12 w-12  rounded-full mx-5"
                src="https://lh3.googleusercontent.com/a/ACg8ocKbztQ-j7hKFXS-7whinUAn0FqofjhAMSXsHZu6j2GlIQM=s360-c-no"
                alt=""
              />
            </div>
            <div className="mx-6">
              <h5 className="relative pl-5">
                <span className="absolute left-0 top-1">
                  <FaUserCircle />
                </span>
                Milan Bhattarai
              </h5>
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
        <section>
          <div>
            <h1 className="font-semibold text-xl text-center">
              Social Media Presence
            </h1>
          </div>
          <div className="flex justify-center items-center  ">
            <div className="sm:w-7 w-7 m-4 cursor-pointer hover:scale-125 duration-300 ease-in-out">
              <img src="images/social-icons/twitter.png" alt="" />
            </div>
            <div className="sm:w-7 w-7 m-4 cursor-pointer hover:scale-125 duration-300 ease-in-out">
              <img src="images/social-icons/facebook.png" alt="" />
            </div>
            <div className="sm:w-7 w-7 m-4 cursor-pointer hover:scale-125 duration-300 ease-in-out">
              <img src="images/social-icons/youtube.png" alt="" />
            </div>
            <div className="sm:w-7 w-7 m-4 cursor-pointer hover:scale-125 duration-300 ease-in-out">
              <img src="images/social-icons/linkden.png" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className="font-semibold text-xl">Payment Methods</h1>
          </div>
          <div className="flex items-center">
            <SiVisa className="bg-white rounded-lg text-6xl h-10 w-28 mr-7"/>
            <span>Visa ****64</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Footer;
