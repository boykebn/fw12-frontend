import React from 'react'
const Footer = () => {
  return (
    <footer className='flex-col pt-24 px-28 pb-12 text-black-500 bg-white'>
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
                <div className='mb-6'>
                    <i data-feather="facebook">i</i>
                    <span>Tickitz Cinema id</span>
                </div >
                <div className='mb-6'>
                    <i data-feather="instagram">i</i>
                    <span>tickitz.id</span>
                </div>
                <div className='mb-6'>
                    <i data-feather="twitter">i</i>
                    <span>tickitz.id</span>
                </div>
                <div className='mb-6'>
                    <i data-feather="youtube">i</i>
                    <span>Tickitz Cinema id</span>
                </div>
            </div>
        </div>
        <div className='flex justify-center align-center pt-10' >
            <span>© 2022 Eastick. All Rights Reserved.</span>
        </div>
    </footer>
    )
}

export default Footer