import React from "react";
import { Instagram } from "react-feather";
import { Facebook } from "react-feather";
import { Twitter } from "react-feather";
import { Youtube } from "react-feather";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#A6BB8D] justify-center items-center text-center lg:text-start md:p-24">
      <div className="container p-6">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 pt-10 md:pt-0 font-mulish">
            <div className="flex md:justify-start justify-center md:items-start items-center text-center mb-10">
              <img
                className="md:w-[250px] w-[150px]"
                src={require("../assets/images/logo-eastick.png")}
                alt="footer logo"
              />
            </div>
            <p className="text-lg">Stop waiting in line. Buy tickets</p>
            <p className="text-lg">conveniently, watch movies quietly.</p>
          </div>

          <div className="mb-6 font-mulish">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800">
              Explore
            </h5>
            <ul className="list-none mb-0">
              <li>
                <Link to="/" className="text-gray-800">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-800">
                  <span>Movie List</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 font-mulish">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800">
              Our Sponsor
            </h5>
            <ul className="list-none mb-0 flex flex-col justify-center items-center md:items-start text-center">
              <Link>
                <img
                    className="py-2"
                  src={require("../assets/images/ebv-logo.png")}
                  alt="ebuid"
                />
              </Link>
              <Link>
                <img
                  className="py-2"
                  src={require("../assets/images/cine-logo.png")}
                  alt="cineone21"
                />
              </Link>
              <Link>
                <img
                  className="py-2"
                  src={require("../assets/images/hiflix-logo.png")}
                  alt="hiflix"
                />
              </Link>
            </ul>
          </div>
          <div className="mb-6 font-mulish">
            <h5 className="uppercase font-bold mb-2.5 text-gray-800">
              Follow Us
            </h5>
            <ul className="list-none mb-0 flex flex-col justify-center items-center md:items-start text-center">
              <li className="flex py-3">
                <Facebook />
                <span className="font-inter text-sm pl-2">Eastick id</span>
              </li>
              <li className="flex py-3">
                <Instagram />
                <span className="font-inter text-sm pl-2">Eastick id</span>
              </li>
              <li className="flex py-3">
                <Twitter />
                <span className="font-inter text-sm pl-2">Eastick id</span>
              </li>
              <li className="flex py-3">
                <Youtube />
                <span className="font-inter text-sm pl-2">Eastick id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    // <footer className='pt-24 px-28 pb-0 text-black-500 bg-[#A6BB8D]'>
    //     <div className='flex gap-44'>
    //         <div className='text-base leading-8 tracking-wide mr-8'>
    //             <div className='mb-7'>
    //                 <img className='' src={require('../assets/images/logo-eastick.png')} alt="footer logo" width="150" height="150" />
    //             </div>
    //             <p className=''>Stop waiting in line. Buy tickets</p>
    //             <p className=''>conveniently, watch movies quietly.</p>
    //         </div>
    //         <div className=''>
    //             <div className='font-bold mb-7 '>Explore</div>
    //             <p className='mb-3.5'>Home</p>
    //             <p className=''>List Movie</p>
    //         </div>
    //         <div className=''>
    //             <div className='font-bold mb-7 '>Our Sponsor</div>
    //             <div className='mb-6'>
    //                 <img src={require('../assets/images/ebv-logo.png')} alt="ebuid"/>
    //             </div>
    //             <div className='mb-6' >
    //                 <img src={require('../assets/images/cine-logo.png')} alt="cineone21"/>
    //             </div>
    //             <div className='mb-6'>
    //                 <img src={require('../assets/images/hiflix-logo.png')} alt="hiflix"/>
    //             </div>
    //         </div>
    //         <div className='flex-1'>
    //             <div className='font-bold mb-7 '>Follow us</div>
    //             <div className='flex flex-1 mb-6'>
    //                 <Facebook />
    //                 <span className='font-inter text-sm pl-2'>Eastick id</span>
    //             </div>
    //             <div className='flex flex-1 mb-6'>
    //                 <Instagram />
    //                 <span className='font-inter text-sm pl-2'>eastick.id</span>
    //             </div>
    //             <div className='flex flex-1 mb-6'>
    //                 <Twitter />
    //                 <span className='font-inter text-sm pl-2'>eastick.id</span>
    //             </div>
    //             <div className='flex flex-1 mb-6'>
    //                 <Youtube />
    //                 <span className='font-inter text-sm pl-2'>Eastick id</span>
    //             </div>
    //         </div>
    //     </div>
    //     <div className='flex justify-center align-center pt-16 pb-5' >
    //         <span>© 2023 Eastick. All Rights Reserved.</span>
    //     </div>
    // </footer>
  );
};

export default Footer;
