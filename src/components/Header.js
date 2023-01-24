import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-center items-center py-10 px-32 text-black-300 bg-[#EAE7B1]'>
            <div className='mr-20'>
                <img className='' src={require('../assets/images/logo-eastick.png')} alt='logo' width="150" height="150"/>
            </div>
            <div className='flex-1'>
                <Link to='/' className='pr-5 text-[#61876E] hover:text-[#3C6255] hover:font-bold'>Home</Link>
                <Link to='/' className='text-[#61876E] hover:text-[#3C6255] hover:font-bold'>List Movie</Link>
            </div>
            <div className=''>
            </div>
            <div className=''>
                <Link to='/signIn'>
                    <button className='border-2 border-[#61876E] rounded-md py-1 px-6 text-[#61876E] hover:bg-[#A6BB8D] hover:text-black hover:border-black'>Sign In</button>
                </Link>  
            </div>
        </nav>
    )
};

export default Header