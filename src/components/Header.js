import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#EAE7B1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-10 px-3">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <img
                  className="md:w-[150px] w-[100px]"
                  src={require("../assets/images/logo-eastick.png")}
                  alt="logo"
                />
              </a>
              <div className="hidden md:block md:ml-16">
                <div className="ml-10 flex items-baseline space-x-4">
                  <div className="flex justify-center items-center px-2 text-base font-normal hover:font-semibold hover:border-b border-gray-700">
                    <Link to="/">Home</Link>
                  </div>
                  <div className="flex justify-center items-center px-2 text-base font-normal hover:font-semibold hover:border-b border-gray-700">
                    <Link to="/">Movie List</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
            <div className="flex justify-center items-center gap-3">
                <Link to="/signIn">
                  <button className="border-2 border-[#61876E] rounded-md py-1 px-6 text-[#61876E] hover:bg-[#A6BB8D] hover:text-black hover:border-black">
                    Sign In
                  </button>
                </Link>
                <Link to="/signIn">
                  <button className="border-2 border-[#61876E] rounded-md py-1 px-6 text-[#61876E] hover:bg-[#A6BB8D] hover:text-black hover:border-black">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <FontAwesomeIcon icon={faBars} size="lg"/>
                ) : (
                    <FontAwesomeIcon icon={faClose}  size="lg"/>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex justify-center items-center p-5 text-base font-normal hover:font-semibold border-b border-gray-700">
                <Link to="/">Home</Link>
              </div>
              <div className="flex justify-center items-center p-5 text-base font-normal hover:font-semibold border-b border-gray-700">
                <Link to="/">Movie List</Link>
              </div>
              <div className="flex justify-center items-center gap-3 p-5 border-b border-gray-700">
                <Link to="/signIn">
                  <button className="border-2 border-[#61876E] rounded-md py-1 px-6 text-[#61876E] hover:bg-[#A6BB8D] hover:text-black hover:border-black">
                    Sign In
                  </button>
                </Link>
                <Link to="/signUp">
                  <button className="border-2 border-[#61876E] rounded-md py-1 px-6 text-[#61876E] hover:bg-[#A6BB8D] hover:text-black hover:border-black">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Header;