import React from 'react'
import Header2 from '../components/Header2';
import Footer from '../components/Footer';

const MovieDetails = () => {
    return (
        <div>
            <div> <Header2></Header2> </div>
            <div className='grid grid-cols-[350px_minmax(900px,_1fr)_100px] pt-[40px] pb-[96px]'>
                <div className=' ml-[70px] h-[160px] border border-2 rounded-2xl w-[320px] h-[440px]'>
                    <div className=''>
                        <img className='p-10' src={require('../assets/images/spiderman.png')} alt="mv-spiderman"/>
                    </div>
                </div>

                <div className='pl-[80px]'>

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

            <section class="showtimes">
            <div>
                <div className='bg-[#F5F6F8]'>
                    <h2>Showtimes and Tickets</h2>
                    <div class="dt-select">
                        <input type="date" name="dates" id="dates" placeholder="" />
                        <select name="city-select" id="city-select">Purwokerto</select>
                    </div>
                    <div class="list-time">
                        <div class="list-time-border">
                            <img src="./asset/assets/ebv-logo.png" alt="ebv-logo" />
                            <div class="title-lt">
                                <h3>ebv.id</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                            <hr />
                            <div class="time-lt">
                                <div class="border-time-lt">
                                    <p>
                                        8.30 am
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        10.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        12.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        02.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        4.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        7.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        8.30 pm
                                    </p>
                                </div>
                            </div>
                            <div class="price">
                                <div class="price-ttl">
                                    <p>Price</p>
                                    <p>$10.00/seat</p>
                                </div>
                            </div>
                            <div class="btn-booknow">
                                <button type="submit">
                                    Book Now</button>
                            </div>
                        </div>
                    </div>

                    <div class="list-time">
                        <div class="list-time-border">
                            <img src="./asset/assets/cine-logo.png" alt="ebv-logo" />
                            <div class="title-lt">
                                <h3>CineOne21</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                            <hr />
                            <div class="time-lt">
                                <div class="border-time-lt">
                                    <p>
                                        8.30 am
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        10.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        12.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        02.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        4.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        7.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        8.30 pm
                                    </p>
                                </div>
                            </div>
                            <div class="price">
                                <div class="price-ttl">
                                    <p>Price</p>
                                    <p>$10.00/seat</p>
                                </div>
                            </div>
                            <div class="btn-booknow">
                                <button type="submit">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="list-time">
                        <div class="list-time-border">
                            <img src="./asset/assets/hiflix-logo.png" alt="ebv-logo" />
                            <div class="title-lt">
                                <h3>hiflix Cinema</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                            <hr />
                            <div class="time-lt">
                                <div class="border-time-lt">
                                    <p>
                                        8.30 am
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        10.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        12.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        02.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        4.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        7.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        8.30 pm
                                    </p>
                                </div>
                            </div>
                            <div class="price">
                                <div class="price-ttl">
                                    <p>Price</p>
                                    <p>$10.00/seat</p>
                                </div>
                            </div>
                            <div class="btn-booknow">
                                <button type="submit">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="list-time">
                        <div class="list-time-border">
                            <img src="./asset/assets/ebv-logo.png" alt="ebv-logo" />
                            <div class="title-lt">
                                <h3>ebv.id</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                            <hr />
                            <div class="time-lt">
                                <div class="border-time-lt">
                                    <p>
                                        8.30 am
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        10.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        12.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        02.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        4.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        7.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        8.30 pm
                                    </p>
                                </div>
                            </div>
                            <div class="price">
                                <div class="price-ttl">
                                    <p>Price</p>
                                    <p>$10.00/seat</p>
                                </div>
                            </div>
                            <div class="btn-booknow">
                                <button type="submit">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="list-time">
                        <div class="list-time-border">
                            <img src="./asset/assets/cine-logo.png" alt="ebv-logo" />
                            <div class="title-lt">
                                <h3>CineOne21</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                            <hr />
                            <div class="time-lt">
                                <div class="border-time-lt">
                                    <p>
                                        8.30 am
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        10.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        12.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        02.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        4.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        7.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        8.30 pm
                                    </p>
                                </div>
                            </div>
                            <div class="price">
                                <div class="price-ttl">
                                    <p>Price</p>
                                    <p>$10.00/seat</p>
                                </div>
                            </div>
                            <div class="btn-booknow">
                                <button type="submit">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="list-time">
                        <div class="list-time-border">
                            <img src="./asset/assets/hiflix-logo.png" alt="ebv-logo" />
                            <div class="title-lt">
                                <h3>hiflix Cinema</h3>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                            <hr />
                            <div class="time-lt">
                                <div class="border-time-lt">
                                    <p>
                                        8.30 am
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        10.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        12.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        02.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        4.30 pm
                                    </p>
                                </div>
                                <div class="border-time-lt actv">
                                    <p>
                                        7.00 pm
                                    </p>
                                </div>
                                <div class="border-time-lt">
                                    <p>
                                        8.30 pm
                                    </p>
                                </div>
                            </div>
                            <div class="price">
                                <div class="price-ttl">
                                    <p>Price</p>
                                    <p>$10.00/seat</p>
                                </div>
                            </div>
                            <div class="btn-booknow">
                                <button type="submit">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bottom-line actived">
                <div class="line"><hr /></div>
                <div>View More</div>
                <div class="line"><hr /></div>
            </div>

        <div> <Footer></Footer> </div>
        </section>
        </div>
    )
};


export default MovieDetails;