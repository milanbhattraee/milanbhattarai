import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignIn = () => {
    const [show, setShow] = useState(true);
  const [type, setType] = useState("password");

  const handleToggle = () => {
    setShow(!show);
    setType(!show ? "text" : "password");
  };
  return (
    <div className="w-72 ">
    {/* <!-- Heading --> */}

    {/* <!-- Form --> */}
    <form className="mt-4">
      <div className="relative mb-3 w-full h-10">
        <input
          className="peer w-full h-full bg-transparent text-cyan-gray-700 font-sans font-normal focus:outline-0 disabled:bg-cyan-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-cyan-gray-200 placeholder-shown:border-t-cyan-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-cyan-gray-200 focus:border-cyan-500"
          placeholder=" "
        />
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-cyan-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-cyan-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-cyan-gray-400 peer-focus:text-cyan-500 before:border-cyan-gray-200 peer-focus:before:!border-cyan-500 after:border-cyan-gray-200 peer-focus:after:!border-cyan-500">
          Email
        </label>
      </div>

      <div className="relative mb-3 w-full h-10">
        <input
          type={type}
          className=" peer w-full h-full bg-transparent text-cyan-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-cyan-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-cyan-gray-200 placeholder-shown:border-t-cyan-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-cyan-gray-200 focus:border-cyan-500"
          placeholder=" "
        />
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-cyan-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-cyan-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-cyan-gray-400 peer-focus:text-cyan-500 before:border-cyan-gray-200 peer-focus:before:!border-cyan-500 after:border-cyan-gray-200 peer-focus:after:!border-cyan-500">
          Password
        </label>
        {!show ? (
          <span
            className="flex justify-around items-center"
            onClick={handleToggle}
          >
            <IoEye
              className="absolute right-1 cursor-pointer top-2"
              size={25}
            />
          </span>
        ) : (
          <span
            className="flex justify-around items-center"
            onClick={handleToggle}
          >
            <IoEyeOff
              className="absolute right-1 cursor-pointer top-2"
              size={25}
            />
          </span>
        )}
      </div>

      <div className="mb-3 flex flex-wrap content-center">
        <input
          id="remember"
          type="checkbox"
          className="mr-1 checked:bg-cyan-400"
        />{" "}
        <label
          htmlFor="remember"
          className="mr-auto text-xs font-semibold"
        >
          Remember me
        </label>
        <a
          href="#"
          className="text-xs font-semibold text-cyan-400 hover:underline"
        >
          Forgot password?
        </a>
      </div>

      <div className="mb-3">
        <button className="mb-1.5 block w-full text-center text-white bg-cyan-400 hover:bg-cyan-600 hover:ease-in-out hover:duration-300 px-2 py-1.5 rounded-md">
          Sign in
        </button>
      </div>
    </form>

    {/* <!-- Footer --> */}
    <div className="text-center">
      <span className="text-xs mx-2  text-gray-400 font-semibold">
        Don't have account?
      </span>
      <a
        href="#"
        className="text-xs hover:underline font-semibold text-cyan-400"
      >
        Sign up
      </a>
    </div>
  </div>
  )
}

export default SignIn