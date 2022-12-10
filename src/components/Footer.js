import React from 'react';
import { Instagram } from 'react-feather';
import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';
import { Youtube } from 'react-feather';

const Footer = () => {
    return (
        <footer className='flex-col pt-24 px-28 pb-0 text-black-500 bg-zinc-200'>
            <div className='flex'>
                <div className='flex-1 text-base leading-8 tracking-wide mr-8'>
                    <div className='mb-7'>
                        <img className='' src={require('../assets/images/logo.png')} alt="footer logo"/>
                    </div>
                    <p className=''>Stop waiting in line. Buy tickets</p>
                    <p className=''>conveniently, watch movies quietly.</p>
                </div>
                <div className='flex-1'>
                    <div className='font-bold mb-7 '>Explore</div>
                    <p className='mb-3.5'>Home</p>
                    <p className=''>List Movie</p>
                </div>
                <div className='flex-1'>
                    <div className='font-bold mb-7 '>Our Sponsor</div>                
                    <div className='mb-6'>
                        <img src={require('../assets/images/ebv-logo.png')} alt="ebuid"/>
                    </div>
                    <div className='mb-6' >
                        <img src={require('../assets/images/cine-logo.png')} alt="cineone21"/>
                    </div>
                    <div className='mb-6'>
                        <img src={require('../assets/images/hiflix-logo.png')} alt="hiflix"/>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='font-bold mb-7 '>Follow us</div>                
                    <div className='flex flex-1 mb-6'>
                        <Facebook />
                        <span className='font-inter text-sm pl-2'>Eastick id</span>
                    </div>
                    <div className='flex flex-1 mb-6'>
                        <Instagram />
                        <span className='font-inter text-sm pl-2'>eastick.id</span>
                    </div>
                    <div className='flex flex-1 mb-6'>
                        <Twitter />
                        <span className='font-inter text-sm pl-2'>eastick.id</span>
                    </div>
                    <div className='flex flex-1 mb-6'>
                        <Youtube />
                        <span className='font-inter text-sm pl-2'>Eastick id</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center align-center pt-16 pb-5' >
                <span>© 2022 Eastick. All Rights Reserved.</span>
            </div>
        </footer>
    )
};

export default Footer