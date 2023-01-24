import React from 'react'
import Header2 from '../components/Header2';
import Footer from '../components/Footer';


const PaymentPage = () => {
    return (
        <div>
            <div> <Header2></Header2> </div>

            <div className='bg-[#61876E] grid grid-cols-[1000px_minmax(440px,_1fr)_100px]'>
                <div class="right">
                    <div className='pl-28 pt-7 pb-10'>
                        <h2 className='text-xl font-mulish font-bold pb-5'>Payment Info</h2>
                        <div className='rounded-lg bg-[#EAE7B1] w-[820px] h-[413x] p-7'>
                            <div className='flex justify-between pt-5'>
                                <div className='text-[#6B6B6B] font-mulish text-md'>Date & time</div>
                                <div className='font-mulish text-lg font-bold'>Tuesday, 07 July 2022 at 02:00 pm</div>
                            </div>
                            <div className='border border-b-0 rounded mt-5 border-[#A6BB8D]'></div>
                            <div className='flex justify-between pt-5'>
                                <div className='text-[#6B6B6B] font-mulish text-md'>Movie title</div>
                                <div className='font-mulish text-lg font-bold'>Spider-Man: Homecoming</div>
                            </div>
                            <div className='border border-b-0 rounded mt-5 border-[#A6BB8D]'></div>
                            <div className='flex justify-between pt-5'>
                                <div className='text-[#6B6B6B] font-mulish text-md'>Cinema name</div>
                                <div className='font-mulish text-lg font-bold'>CineOne21 Cinema</div>
                            </div>
                            <div className='border border-b-0 rounded mt-5 border-[#A6BB8D]'></div>
                            <div className='flex justify-between pt-5'>
                                <div className='text-[#6B6B6B] font-mulish text-md'>Number of tickets</div>
                                <div className='font-mulish text-lg font-bold'>3 pieces</div>
                            </div>
                            <div className='border border-b-0 rounded mt-5 border-[#A6BB8D]'></div>
                            <div className='flex justify-between pt-5'>
                                <div className='text-[#6B6B6B] font-mulish text-md'>Total payment</div>
                                <div className='font-mulish text-lg font-bold'>$30,00</div>
                            </div>
                        </div>
                    </div>

                    <div className='pl-28 pt-7 pb-10'>
                        <h2 className='text-xl font-mulish font-bold pb-5'>Choose a Payment Method</h2>
                        <div className='rounded-lg bg-[#EAE7B1] w-[820px] h-[413x] p-7 '>
                        <div className='pl-9 pt-5'>

                            <div className='inline-block border border-[#A6BB8D] rounded-md w-[146px] h-[56px] ml-5 mb-5'>
                                <div className='flex justify-center items-center p-3'>
                                    <img src={require('../assets/images/google-pay.png')} alt="Google-pay" />
                                </div>
                            </div>

                            <div className='inline-block border border-[#A6BB8D] rounded-md w-[146px] h-[56px] ml-5 mb-5'>
                                <div className='flex justify-center items-center p-3'>
                                    <img src={require('../assets/images/google-pay.png')} alt="Google-pay" />
                                </div>
                            </div>

                            <div className='inline-block border border-[#A6BB8D] rounded-md w-[146px] h-[56px] ml-5 mb-5'>
                                <div className='flex justify-center items-center p-3'>
                                    <img src={require('../assets/images/google-pay.png')} alt="Google-pay" />
                                </div>
                            </div>

                            <div className='inline-block border border-[#A6BB8D] rounded-md w-[146px] h-[56px] ml-5 mb-5'>
                                <div className='flex justify-center items-center p-3'>
                                    <img src={require('../assets/images/google-pay.png')} alt="Google-pay" />
                                </div>
                            </div>

                            <div className='inline-block border border-[#A6BB8D] rounded-md w-[146px] h-[56px] ml-5 mb-5'>
                                <div className='flex justify-center items-center p-3'>
                                    <img src={require('../assets/images/google-pay.png')} alt="Google-pay" />
                                </div>
                            </div>

                            <div className='inline-block border border-[#A6BB8D] rounded-md w-[146px] h-[56px] ml-5 mb-5'>
                                <div className='flex justify-center items-center p-3'>
                                    <img src={require('../assets/images/google-pay.png')} alt="Google-pay" />
                                </div>
                            </div>

                            <div className='inline-block border border-[#A6BB8D] rounded-md w-[146px] h-[56px] ml-5 mb-5'>
                                <div className='flex justify-center items-center p-3'>
                                    <img src={require('../assets/images/google-pay.png')} alt="Google-pay" />
                                </div>
                            </div>

                            <div className='inline-block border border-[#A6BB8D] rounded-md w-[146px] h-[56px] ml-5 mb-5'>
                                <div className='flex justify-center items-center p-3'>
                                    <img src={require('../assets/images/google-pay.png')} alt="Google-pay" />
                                </div>
                            </div>

                        </div>
                            <div className='flex pb-[20px]'>
                                <div className='flex-1 pt-[10px] pl-[55px]'> <hr className='border-[#A6BB8D]' /> </div>
                                <div className='font-mulish text-sm text-[#A0A3BD] pl-5 pr-5'>or</div>
                                <div className='flex-1 pt-[10px] pr-[60px]'> <hr className='border-[#A6BB8D]' /> </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className='font-mulish'>Pay via cash. See how it wor</div>
                            </div>
                        </div>

                        <div className=' pt-7 pb-10'>
                            <div className='flex justify-between'>
                                <button className='border rounded-lg font-mulish font-bold text-sm w-[300px] h-[56px] bg-[#EAE7B1] hover:bg-[#A6BB8D]'>Previous Step</button>
                                <button className='mr-[65px] font-mulish text-sm font-bold border rounded-lg w-[300px] h-[56px] bg-[#EAE7B1] hover:bg-[#A6BB8D]'>Pay your order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="left">
                <div >
            <div class="personal-info-heading">
                <h2 className='pt-7 pb-5 font-mulish text-xl font-bold'>Personal Info</h2>
                <div className='bg-[#EAE7B1] w-[410px] h-[390px] p-10 rounded-lg'>
                    <form class="form-pi">
                        <div>
                            <label className='block pb-3' for="full-name">Full Name</label>
                            <input className='border rounded w-[330px] h-[50px] px-5 ' type="text" name="full-name" id="Full-name" placeholder="Boyke Berry Nugraha"/>
                        </div>
                        <div className='pt-5'>
                            <label className='block pb-3' for="email">Email</label>
                            <input className='border rounded w-[330px] h-[50px] px-5' type="text" name="email" id="email" placeholder="boykeberryn@gmail.com"/>
                        </div>
                        <div className='pt-5'>
                            <label for="phone-numb">Phone Number</label>
                            <div className='border rounded w-[330px] h-[50px] p-3 bg-white'>
                                <input className='w-[40px] border-r-2' type="text" name="phone-numb" id="phone-numb" placeholder="+62"/>
                                <input className='pl-5 px-5'  type="text" name="phone-numb" id="phone-numb" placeholder="81388252506"/>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 pt-4'>
                            <div>
                                <img src={require('../assets/images/warning.png')} alt="warning" />
                            </div>
                            <div className='font-bold'>Fill your data correctly.</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                </div>

            </div>

            <div> <Footer></Footer> </div>
        </div>
    )
};


export default PaymentPage;