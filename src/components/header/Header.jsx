import React, { useState, Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useParams } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const location = useLocation();
  
  let Links = [
    { name: "Home", link: "/" },
    { name: "Places To Go", link: "/placestogo" },
    { name: "Contact Us", link: "/contactus" },
    { name: "Parterner Programe", link: "/partnerprograme" },
  ];
  let [open, setOpen] = useState(false);

  let [active, setActive] = useState();
  useEffect(() => {
    setActive(location.pathname);
    if (location.pathname != `/placestogo/description/`) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="shadow-md w-full z-10 fixed top-0 left-0">
      <div className="min-[881px]:flex items-center justify-between bg-indigo-600 min-[881px]:py-2 py-4 min-[881px]:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img
            className="h-8 mr-4 w-auto"
            src="images/common/logo.png"
            alt=""
          />
          <span className="text-white">Traveliv</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          id="toggle"
          className="absolute right-8 top-6 cursor-pointer  min-[881px]:hidden w-7 h-7 text-white"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`min-[881px]:flex min-[881px]:items-center  min-[881px]:pb-0 pb-12 absolute min-[881px]:static bg-indigo-600 min-[881px]:my-0 my-4 min-[881px]:z-auto z-[-1] left-0 w-full min-[881px]:w-auto min-[881px]:pl-0  transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className={`min-[881px]:ml-8 w-full cursor-pointer min-[881px]:w-auto px-9 min-[881px]:px-0 min-[881px]:after:mx-auto min-[881px]:my-0 my-1 py-2 text-sm min-[881px]:text-base lg:text-[16px]  font-semibold text-white after:block after:content-[''] after:w-0 after:h-[2px]  hover:after:w-full after:rounded-full after:duration-500 after:ease-in-out after:bg-cyan-400 ${
                link.link === active && "after:w-full"
              }
                 
                `}
              onClick={() => setOpen(!open)}
            >
              <Link to={link.link} className="duration-500 py-2 block w-full ">
                {link.name}
              </Link>
            </li>
          ))}
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="relative flex min-[881px]:mt-0 mt-4 items-center min-[881px]:w-auto w-full min-[1100px]:pl-40 px-9 mx-auto rounded-full bg-indigo-600 text-sm ">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full mr-3"
                  src="https://lh3.googleusercontent.com/a/ACg8ocKbztQ-j7hKFXS-7whinUAn0FqofjhAMSXsHZu6j2GlIQM=s360-c-no"
                  alt=""
                />
                <h4 className="text-white">Milan</h4>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="min-[881px]:absolute relative flex w-5/6 top-4 mx-auto min-[881px]:top-9 min-[881px]:block right-6 min-[881px]:right-0 z-10 mt-2 min-[881px]:w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/login"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                      onClick={() => setOpen(!open)}
                    >
                      Sign out
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
