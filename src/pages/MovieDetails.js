import React from 'react'
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import BorderListCinemas from '../components/BorderListCinema';

const MovieDetails = () => {
    return (
        <div>
            <div> <Header2></Header2> </div>
            <div className='grid grid-cols-[400px_minmax(900px,_1fr)_100px] pt-[40px] pb-[96px]'>
                <div className=' ml-[110px] h-[160px] border border-2 rounded-2xl w-[320px] h-[440px]'>
                    <div className=''>
                        <img className='p-10' src={require('../assets/images/spiderman.png')} alt="mv-spiderman"/>
                    </div>
                </div>

                <div className='pl-[80px] pr-5'>

                    <div>
                        <div>
                            <h2 className='font-mulish text-xl font-bold pb-2'>Spider-Man: Homecoming</h2>
                            <div className='font-mulish text-sm text-[#4E4B66] pb-10'>Adventure, Action, Sci-Fi</div>
                        </div>

                        <div className='flex flex-1'>
                            <div>
                                <div className='text-xs text-[#4E4B66] font-mulish'>Release date</div>
                                <div className='text-sm font-mulish pb-6'>June 28, 2017</div>
                                <div className='text-xs text-[#4E4B66] font-mulish'>Duration</div>
                                <div className='text-sm font-mulish'>2 hours 13 minutes </div>
                            </div>
                            <div>
                                <div className='text-xs text-[#4E4B66] font-mulish pl-10'>Directed by</div>
                                <div className='text-sm font-mulish pb-6 pl-10'>Jon Watss</div>
                                <div className='text-xs text-[#4E4B66] font-mulish pl-10'>Casts</div>
                                <div className='text-sm font-mulish pl-10 pb-10'>Tom Holland, Michael Keaton, Robert Downey Jr., ...</div>
                            </div>
                        </div>
                            <hr />
                            <div>
                                <p className='pt-5 font-mulish font-bold text-md'>Synopsis</p>
                            </div>
                            <div>
                                <p className='break-all font-mulish text-md'>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. </p>
                            </div>
                    </div>
                </div>
            </div>

            <section className=''>
            <div className=''>
                <div className='bg-[#F5F6F8] '>
                    <h2 className='flex justify-center items-center font-mulish font-bold text-xl pt-[70px] pb-[40px]'>Showtimes and Tickets</h2>
                    <div className='flex justify-center items-center pb-[72px]'>
                        <input className='mr-5 border border-2 rounded-lg w-[200px] h-[35px] p-5' type="date" name="dates" id="dates" placeholder="10/22/2022" />
                        <select className='mr-5 border border-2 rounded-lg w-[200px] h-[35px] p-5' name="city-select" id="city-select">Purwokerto</select>
                    </div>
                    
                    <div className='inline-block'>
                        <div className='rounded-lg w-[320px] h-[300px] bg-white ml-[110px]'>
                            <div className='grid grid-cols-[100px_minmax(150px,_1fr)_100px] p-5'>
                                <div className='pt-3'>
                                    <img src={require('../assets/images/ebv-logo.png')} alt="ebv-logo" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='font-mulish text-xl font-bold pb-1'>ebv.id</h3>
                                    <p className='font-mulish text-xs text-[#6E7191] w-[162px]'>Whatever street No.12, South Purwokerto</p>
                                </div>
                            </div>
                            <hr />
                        <div><BorderListCinemas></BorderListCinemas></div>
                        </div>
                    </div>

                    <div className='inline-block pt-10 pl-7'>
                        <div className='rounded-lg w-[320px] h-[300px] bg-white ml-[110px]'>
                            <div className='grid grid-cols-[100px_minmax(150px,_1fr)_100px] p-5'>
                                <div className='pt-3'>
                                    <img src={require('../assets/images/ebv-logo.png')} alt="ebv-logo" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='font-mulish text-xl font-bold pb-1'>ebv.id</h3>
                                    <p className='font-mulish text-xs text-[#6E7191] w-[162px]'>Whatever street No.12, South Purwokerto</p>
                                </div>
                            </div>
                            <hr />
                        <div><BorderListCinemas></BorderListCinemas></div>
                        </div>
                    </div>

                    <div className='inline-block pt-10 pl-7'>
                        <div className='rounded-lg w-[320px] h-[300px] bg-white ml-[110px]'>
                            <div className='grid grid-cols-[100px_minmax(150px,_1fr)_100px] p-5'>
                                <div className='pt-3'>
                                    <img src={require('../assets/images/ebv-logo.png')} alt="ebv-logo" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='font-mulish text-xl font-bold pb-1'>ebv.id</h3>
                                    <p className='font-mulish text-xs text-[#6E7191] w-[162px]'>Whatever street No.12, South Purwokerto</p>
                                </div>
                            </div>
                            <hr />
                        <div><BorderListCinemas></BorderListCinemas></div>
                        </div>
                    </div>

                    <div className='inline-block pt-10'>
                        <div className='rounded-lg w-[320px] h-[300px] bg-white ml-[110px]'>
                            <div className='grid grid-cols-[100px_minmax(150px,_1fr)_100px] p-5'>
                                <div className='pt-3'>
                                    <img src={require('../assets/images/ebv-logo.png')} alt="ebv-logo" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='font-mulish text-xl font-bold pb-1'>ebv.id</h3>
                                    <p className='font-mulish text-xs text-[#6E7191] w-[162px]'>Whatever street No.12, South Purwokerto</p>
                                </div>
                            </div>
                            <hr />
                        <div><BorderListCinemas></BorderListCinemas></div>
                        </div>
                    </div>

                    <div className='inline-block pt-10 pl-7'>
                        <div className='rounded-lg w-[320px] h-[300px] bg-white ml-[110px]'>
                            <div className='grid grid-cols-[100px_minmax(150px,_1fr)_100px] p-5'>
                                <div className='pt-3'>
                                    <img src={require('../assets/images/ebv-logo.png')} alt="ebv-logo" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='font-mulish text-xl font-bold pb-1'>ebv.id</h3>
                                    <p className='font-mulish text-xs text-[#6E7191] w-[162px]'>Whatever street No.12, South Purwokerto</p>
                                </div>
                            </div>
                            <hr />
                        <div><BorderListCinemas></BorderListCinemas></div>
                        </div>
                    </div>

                    <div className='inline-block pt-10 pl-7'>
                        <div className='rounded-lg w-[320px] h-[300px] bg-white ml-[110px]'>
                            <div className='grid grid-cols-[100px_minmax(150px,_1fr)_100px] p-5'>
                                <div className='pt-3'>
                                    <img src={require('../assets/images/ebv-logo.png')} alt="ebv-logo" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='font-mulish text-xl font-bold pb-1'>ebv.id</h3>
                                    <p className='font-mulish text-xs text-[#6E7191] w-[162px]'>Whatever street No.12, South Purwokerto</p>
                                </div>
                            </div>
                            <hr />
                        <div><BorderListCinemas></BorderListCinemas></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

            <div className='flex bg-[#F5F6F8] pt-[50px] pb-[50px]'>
                <div className='flex-1 pt-[10px] pl-[110px]'><hr /></div>
                <div className='font-mulish text-sm pl-10 pr-10'>view more</div>
                <div className='flex-1 pt-[10px] pr-[110px]'><hr /></div>
            </div>

        <div> <Footer></Footer> </div>
        </div>
    )
};


export default MovieDetails;