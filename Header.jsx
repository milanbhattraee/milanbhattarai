import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Example() {
  
  
  
  
  return (
    <Disclosure as="nav" className="bg-indigo-600 fixed top-0 w-full z-20">
      {({open}) => (
        <>
        
          <div className="w-full px-6 md:12 xl:px-24">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white  hover:text-white hover:outline-none hover:ring-2 hover:ring-inset hover:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open? (
                    <GrClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBarsStaggered
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center md:ml-0 ml-16  md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 mr-4 w-auto"
                    src="images/common/logo.png"
                    alt="Your Company"
                  />
                  <h4 className="text-white font-extrabold">Traveliv</h4>
                </div>
                <div className="hidden w-full md:flex justify-center">
                  <div className=" relative flex justify-between space-x-4">
                    <ul className=" h-full flex font-bold md:text-md text-sm items-center text-white">
                      <li className="mx-2 px-2 block py-2 rounded-md duration-300 ease-in-out relative ">
                        <Link className='after:block w-full h-1 bg-cyan-300 absolute after:bottom-0' to="/">Home</Link>
                      </li>
                      <li className="mx-2 px-2  py-2 rounded-md duration-300 ease-in-out relative">
                        <Link to="">Places To Go</Link>
                      </li>
                      <li className="mx-2 px-2  py-2 rounded-md duration-300 ease-in-out relative">
                        <Link to="">Contact Us</Link>
                      </li>
                      <li className="mx-2 px-2  py-2 rounded-md duration-300 ease-in-out relative">
                        <Link to="">Parterner Programe</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex items-center rounded-full bg-indigo-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel
            
          >
            {open && (
              <div className=" md:ml-3 duration-300 ease-in-out py-10 md:hidden block">
                <div className=" relative flex flex-col justify-between space-x-4">
                  <ul className="flex font-bold text-start flex-col md:text-md text-sm  text-white ">
                    <li className="mx-2 px-2  py-2 rounded-md duration-300 ease-in-out hover:border-white border-2 border-indigo-600 ">
                      <Link className="w-full block " to="/">
                        Home
                      </Link>
                    </li>
                    <li className="mx-2 px-2  py-2 rounded-md duration-300 ease-in-out hover:border-white border-2 border-indigo-600">
                      <Link className="w-full block">Places To Go</Link>
                    </li>
                    <li className="mx-2 px-2  py-2 rounded-md duration-300 ease-in-out hover:border-white border-2 border-indigo-600">
                      <Link className="w-full block">Contact Us</Link>
                    </li>
                    <li className="mx-2 px-2  py-2 rounded-md duration-300 ease-in-out hover:border-white border-2 border-indigo-600">
                      <Link className="w-full block">Parterner Programe</Link>
                        </li>
                  </ul>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
