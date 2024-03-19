import React from "react";

import SignIn from "./SignIn";

const Login = () => {
  
  return (
    <div className="flex flex-wrap overflow-hidden min-h-screen w-full content-center items-center justify-center bg-gray-200 py-10">
      {/* <!-- Login component --> */}
      <div className="flex sm:flex-row flex-col-reverse  shadow-md">
        {/* <!-- Login form --> */}
        <div
          className="flex flex-shrink-[2] relative px-8 sm:w-[37rem] sm:h-[40rem] w-auto h-[30rem] flex-wrap content-center items-center justify-center rounded-l-md  bg-white"
          // style={{ width: "30rem", height: "40rem" }}
        >
          <div className="flex justify-between items-center h-12 absolute px-10 py-14 top-0 w-full">
            <div className=" ">
              <img src="images/login/logo.png" alt="" />
            </div>
            <div className="">
              <span className=" sm:text-md xl:text-xl  text-sm mx-2 text-gray-400 font-semibold">
                Don't have account?{" "}
              </span>
              <a
                href="#"
                className="sm:text-xl text-sm font-bold text-cyan-400 hover:underline"
              >
                Sign up
              </a>
            </div>
          </div>

          <SignIn />
        </div>

        {/* <!-- Login banner --> */}
        <div
          className="sm:flex hidden flex-shrink-1 md:flex-shrink-0 content-center justify-center rounded-r-md"
          style={{ maxwidth: "36rem", maxheight: "40rem" }}
        >
          <div className="relative sm:w-full w-[100%]  h-full flex justify-center items-center bg-cyan-400">
            <div className="md:w-8/12 md:h-[60%] w-2/3 sm:h-2/4 h-auto  bg-orange-400 flex items-end rounded-t-full">
              <img src="images/login/login-1.png" alt="" />
              
              <img
                className=" absolute md:w-20 w-14 sm:top-[20rem] top-[9.7rem] sm:left-[1.5rem] left-9"
                src="images/login/login-4.png"
                alt=""
              />
              <img
                className=" absolute md:w-20 w-10 md:top-[10rem] top-[4rem] md:left-[16rem] sm:top-[15rem] sm:left-[13rem] left-[17.5rem]"
                src="images/login/login-3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
