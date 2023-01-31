import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import http from "../helpers/http";
import {logoutAction} from '../pages/redux/reducers/auth'

// import { Search } from "react-feather";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  // get data Profile
  const [getProfile, setGetProfile] = React.useState({});
  // console.log(`https://192.168.1.9:8888/assets/uploads/${getProfile?.picture}`);
  const token = useSelector(state => state.auth.token);
  const getDataProfile = async () => {
    try {
      const response = await http(token).get('/profile');
      setGetProfile(response?.data?.results);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  React.useEffect(() => {
    if (token) {
      getDataProfile();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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

            <div className="hidden md:block hover:">
              <div className="group relative">
                {getProfile?.picture ? (
                <a href="/" className="flex-shrink-0">
                  <img
                    className="md:w-[50px] w-[50px] rounded-full"
                    src={getProfile?.picture}
                    alt="logo"
                  />
                </a>
                ) : (
                <a href="/" className="flex-shrink-0">
                  <img
                    className="md:w-[50px] w-[50px] rounded-full"
                    src={require("../assets/images/dummyAvatar.jpg")}
                    alt="logo"
                  />
                </a>
              )}
                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                <div className="hidden group-hover:block absolute right-0 border-2 rounded border-[#dedede] bg-[#FEFCF3] py-2 pl-4 pr-8">
                  <div className="hover:bg-gray-200 rounded w-[60px] text-center">
                    <Link to="/ProfilePage">Profile</Link>
                  </div>
                  <div className="hover:bg-gray-200 rounded w-[60px] text-center">
                    <button type="button" onClick={() => dispatch(logoutAction())}>
                      Logout
                    </button>
                  </div>
                </div>
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
                  <FontAwesomeIcon icon={faBars} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faClose} size="lg" />
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
            <div className="flex justify-start items-center text-center p-3">
              <input
                type="text"
                placeholder=""
                className="input w-full max-w-xs font-mulish"
              />
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-mulish">
              <div className="flex justify-center items-center p-5 text-base font-normal hover:font-semibold border-b border-gray-700">
                <Link to="/">Home</Link>
              </div>
              <div className="flex justify-center items-center p-5 text-base font-normal hover:font-semibold border-b border-gray-700">
                <Link to="/">List Movie</Link>
              </div>
              <div className="flex justify-center items-center p-5 text-base font-normal hover:font-semibold border-b border-gray-700">
                <Link to="/ProfilePage">Profile</Link>
              </div>
              <div className="flex justify-center items-center p-5 text-base font-normal hover:font-semibold border-b border-gray-700">
                <Link to="/">Logout</Link>
              </div>
              <span className="flex justify-center items-center text-center py-5">
                <p>@2020 Tickitz. All Right Reserved</p>
              </span>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
