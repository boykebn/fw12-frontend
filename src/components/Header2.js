import React from 'react';
import {Link} from 'react-router-dom';
import { Search } from 'react-feather';

const Header = () => {
    return (
        <nav className='flex justify-center items-center py-16 px-28 pt-9 pb-9 text-black-300 bg-[#EAE7B1]'>
            <div className='mr-20'>
                <img className='' src={require('../assets/images/logo-eastick.png')} alt='logo' width="150" height="150"/>
            </div>
            <div className='flex-1'>
                <Link to='/' className='pr-5 text-[#61876E] hover:text-[#3C6255] hover:font-bold'>Home</Link>
                <Link to='/' className='text-[#61876E] hover:text-[#3C6255] hover:font-bold'>List Movie</Link>
            </div>
            <div className='flex'>
                <div className='pr-12 pt-5'>
                    <Search/>
                </div>
                <div>
                    <img className='pl-2' src={require('../assets/images/profile-logo.png')} alt='foto profile'/>
                </div>
            </div>
        </nav>
    )
};

export default Header