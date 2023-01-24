import React from 'react'
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const OrderHistory = () => {
    return (
        <div>
            <div> <Header2></Header2> </div>

            <div className='bg-[#61876E] grid grid-cols-[440px_minmax(1000px,_1fr)_100px] gap-10'>

            <div className='pt-14 pl-28'>
                    <div className='bg-[#EAE7B1] w-[328px] h-[430px] rounded-lg p-10'>
                        <p className='font-mulish'>INFO</p>
                        <div className='flex justify-center items-center'>
                            <img src={require('../assets/images/profile.png')} alt="profile" />
                        </div>
                        <div className='flex justify-center items-center font-bold'>Boyke Berry Nugraha</div>
                        <div className='flex justify-center items-center font-mulish text-sm text-[#4E4B66] pt-2 pb-10'>Eastick People</div>
                        <hr className='border-[#A6BB8D]' />
                        <div className='pt-5 flex justify-center'>
                            <button className='border rounded-lg w-[187px] h-[46px] hover:bg-[#61876E] bg-[#A6BB8D]' type='button'>Log Out</button>
                        </div>
                    </div>
                </div>


                <div className='pt-14'>

                    <div className='bg-[#EAE7B1] w-[930px] h-[84px] rounded pl-8 pt-7'>
                        <div className='flex '>
                            <div className='pr-10'><Link to="/ProfilePage">Account Settings</Link></div>
                            <div className='border-b-2 border-[#A6BB8D] pb-6 font-bold'>Order History</div>
                        </div>
                    </div>

                    <div className='bg-[#EAE7B1] mt-10 w-[930px] rounded-lg p-10'>
                        <div>
                            <h3 className='font-mulish text-xs text-[#AAAAAA]'>Tuesday, 07 July 2020 - 04:30pm</h3>
                            <div className='flex justify-between pb-10'>
                                <h2 className='font-mulish font-bold text-xl pt-2'>Spider-Man: Homecoming</h2>
                                <div class="img-history">
                                    <img src={require('../assets/images/cine-logo.png')} alt="cine-logo" />
                                </div>
                            </div>
                            <hr className='border-[#A6BB8D]' />
                            <div className='flex justify-between pt-5'>
                                <div className='bg-[#00BA88] border rounded-lg w-[190px] h-[40px] text-xs p-3 font-mulish text-center text-white'>Ticket in active</div>
                                <div className='text-[#AAAAAA] pr-10 font-mulish'>
                                    <a href="ticket.html">See Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#EAE7B1] mt-10 w-[930px] rounded-lg p-10'>
                        <div>
                            <h3 className='font-mulish text-xs text-[#AAAAAA]'>Monday, 14 June 2020 - 02:00pm</h3>
                            <div className='flex justify-between pb-10'>
                                <h2 className='font-mulish font-bold text-xl pt-2'>Avengers: End Game</h2>
                                <div class="img-history">
                                    <img src={require('../assets/images/ebv-logo.png')} alt="ebv-logo" />
                                </div>
                            </div>
                            <hr className='border-[#A6BB8D]' />
                            <div className='flex justify-between pt-5'>
                                <div className='bg-[#6E7191] border rounded-lg w-[190px] h-[40px] text-xs p-3 font-mulish text-center text-white'>Ticket used</div>
                                <div className='text-[#AAAAAA] pr-10 font-mulish'>
                                    <a href="ticket.html">See Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#EAE7B1] mt-10 w-[930px] rounded-lg p-10 mb-10'>
                        <div>
                            <h3 className='font-mulish text-xs text-[#AAAAAA]'>Monday, 10 March 2020 - 04:00pm</h3>
                            <div className='flex justify-between pb-10'>
                                <h2 className='font-mulish font-bold text-xl pt-2'>Thor: Ragnarok</h2>
                                <div class="img-history">
                                    <img src={require('../assets/images/ebv-logo.png')} alt="ebv-logo" />
                                </div>
                            </div>
                            <hr className='border-[#A6BB8D]' />
                            <div className='flex justify-between pt-5'>
                                <div className='bg-[#6E7191] border rounded-lg w-[190px] h-[40px] text-xs p-3 font-mulish text-center text-white'>Ticket used</div>
                                <div className='text-[#AAAAAA] pr-10 font-mulish'>
                                    <a href="ticket.html">See Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div> <Footer></Footer> </div>
        </div>
    )
};


export default OrderHistory;