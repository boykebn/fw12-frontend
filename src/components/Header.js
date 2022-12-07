import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex justify-center items-center py-8 px-32 text-black-300 bg-zinc-200'>
        <div className='mr-20'>
            <img className='' src={require('../assets/images/logo.png')} alt='logo' />
        </div>
        <div className='flex-1'>
            <Link to='/' className='mr-16'>Home</Link>
            <Link to='/' className='mr-16'>List Movie</Link>
        </div>
        <div>
            <Link to='/signIn'>
                <button className='border-2 rounded-md py-1 px-6 border-black'>Sign In</button>
            </Link>  
        </div>
    </nav>
  )
}

export default Header