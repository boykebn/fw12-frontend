import React from 'react'
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const ProfilePage = () => {
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
                            <div className='border-b-2 border-[#A6BB8D] pb-6 font-bold'>Account Settings</div>
                            <div className='pl-10'>
                                <Link to="/OrderHistory">Order History</Link>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#EAE7B1] mt-10 w-[930px] rounded-lg p-10'>
                        <p className='font-mulish pb-3'>Details Information</p>
                        <hr className='border-[#A6BB8D]' />
                        <form className='pt-5'>
                            <div className='inline-block '>
                                <label className='block pb-2' for="fname">First Name</label>
                                <input className='border  w-[300px] h-[40px] rounded pl-2 ' type="text" name="fname" id="fname" placeholder="Boyke"/>
                            </div>
                            <div className='inline-block pl-5'>
                                <label className='block pb-2' for="lname">Last Name</label>
                                <input className='border w-[300px] h-[40px] rounded pl-2' type="text" name="lname" id="lname" placeholder="Berry Nugraha"/>
                            </div>
                            <div className='inline-block pt-3'>
                                <label className='block pb-2' for="email">Email</label>
                                <input className='border w-[300px] h-[40px] rounded pl-2' type="text" name="email" id="email" placeholder="boykeberryn@gmail.com"/>
                            </div>
                            <div className='inline-block pl-5'>
                                <label className='block pb-2' for="phone-numb">Phone Number</label>
                                <div className='border w-[300px] h-[40px] rounded p-2 bg-white'>
                                    <input className='w-[40px] border-r-2' type="text" name="phone-numb" id="phone-numb" placeholder="+62"/>
                                    <input className='pl-2' type="text" name="phone-numb" id="phone-numb" placeholder="81388252506"/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='pt-5'>
                        <button className='border rounded-lg w-[320px] h-[46px] bg-[#EAE7B1] hover:bg-[#A6BB8D]' type='button'>Update changes</button>
                    </div>

                    <div className='bg-[#EAE7B1] mt-10 w-[930px] rounded-lg p-10'>
                    <p className='font-mulish pb-3'>Account and Privacy</p>
                    <hr className='border-[#A6BB8D]' />
                    <div className='pt-5'>
                        <form className='flex'>
                            <div class="privacy-content1">
                                <label className='block' for="Nwpassword">New Password</label>
                                <input className='border w-[300px] h-[40px] rounded pl-2' type="password" name="Nwpassword" id="Nwpassword" placeholder="Write your password"/>
                            </div>
                            <div className='pl-5'>
                                <label className='block' for="confirm-pwd">Confirm Password</label>
                                <input className='border w-[300px] h-[40px] rounded pl-2' type="password" name="confirm-pwd" id="confirm-pwd" placeholder="Write your confirm password"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='pt-5 pb-5'>
                        <button className='border rounded-lg w-[320px] h-[46px] bg-[#EAE7B1] hover:bg-[#A6BB8D]' type='button'>Update changes</button>
                </div>

                </div>

            </div>

            <div> <Footer></Footer> </div>
        </div>
    )
};


export default ProfilePage;