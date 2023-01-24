import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
    const [ dataUpcoming, setDataUpcoming ] = React.useState({});
    const [ dataNowshowing, setDataNowshowing ] = React.useState({});

    React.useEffect (() => {
        getUpcoming().then((data) => {
            setDataUpcoming(data);
        });
        getNowshowing().then((data) => {
            setDataNowshowing(data);
        });
    }, [])

    // get data movie Up Coming
    const getUpcoming = async () => {
        const { data } = await axios.get('http://localhost:8888/movies/upcoming?page=1&limit=10');
        return data;
    };

    const getNowshowing = async () => {
        const { data } = await axios.get('http://localhost:8888/movies/nowShowing');
        return data;
    };

    return (
    <div className='h-screen'>
        <div> <Header2></Header2> </div>        
        <div className='flex  items-center  py-16 px-28 bg-white'>
            <div className='flex flex-1 justify-center'>
                <div className=''>
                    <p className='text-xl text-gray-400 font-mulish'>Nearest Cinema, Newest Movie,</p>
                    <p className='text-5xl font-bold font-mulish text-black-500'>Find out now!</p>
                </div>
            </div>
            <div className='flex-1'>
                <div className='flex justify-center'>
                    <img src={require('../assets/images/heading1.png')} alt="poster" />
                </div>
            </div>
        </div>

        {/* now showing start */}
        <div className='bg-zinc-100 py-16 px-28' >
            <div className='flex mb-20'>
                <div className='border-b-2 border-black-500 pb-4'>
                    <span className='text-[24px] font-bold text-black-500'>Now Showing</span>
                </div>
                <div className='flex-1'></div>
                <div className='text-black-500'>
                    <Link to='/' >view all</Link>
                </div>
            </div>
            <div className='text-black-500 whitespace-nowrap overflow-scroll pb-5 overflow-y-hidden'>
                {dataNowshowing?.results?.map((movies) => (
                    <div className='inline-block text-center border-2 border-gray-300 rounded-lg p-8 mr-6 w-[220px] h-[450]'>
                        <div>   
                            <img className='mb-2' src={movies.pictures} alt="Black Widow"/>
                        </div>
                        <div className='whitespace-normal'>
                            <h4 className='font-bold text-[18px] mb-2'>{movies.MovieTitle}</h4>
                        </div>
                        <div>
                            <p className='text-[14px] text-center mb-6'>{movies.genre}</p>
                        </div>
                        <Link to='/'>
                            <button className='border-2 border-black-500 rounded-lg py-1 px-9'>Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        {/* now showing end */}

            {/* up coming start */}
            <div className='bg-white py-16 px-28 '>
            <div className='flex mb-20'>
                <div className=''>
                    <span className='text-[24px] font-bold text-black-500'>Upcoming Movies</span>
                </div>
                <div className='flex-1'></div>
                <div className='text-black-500'>
                    <Link to='/' >view all</Link>
                </div>
            </div>

            {/* month button */}
            <div className='flex overflow-x-auto text-black-500 mb-12'>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>September</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>October</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>November</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>December</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>January</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>February</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>March</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>April</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>May</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>June</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>July</button>
                <button className='border-2 border-black-500 rounded-lg py-2 px-5 mr-3'>august</button>
            </div>
            {/* month button */}

            {/* card of movies */}

            <div className='text-black-500 whitespace-nowrap overflow-scroll pb-5 overflow-y-hidden'>
                {dataUpcoming?.results?.map((movies) => (
                    <div className='inline-block text-center border-2 border-gray-300 rounded-lg p-8 mr-6 w-[220px] h-[450]'>
                        <div>   
                            <img className='mb-2' src={movies.pictures} alt="Black Widow"/>
                        </div>
                        <div className='whitespace-normal'>
                            <h4 className='font-bold text-[18px] mb-2'>{movies.MovieTitle}</h4>
                        </div>
                        <div>
                            <p className='text-[14px] text-center mb-6'>{movies.genre}</p>
                        </div>
                        <Link to='/'>
                            <button className='border-2 border-black-500 rounded-lg py-1 px-9'>Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        {/* upcoming end */}

        <div className='flex justify-center bg-white pb-24 pt-32'>
            <div className='w-1/2 text-center text-black-500 text-[14px] border rounded-2xl bg-[#FFFFFF] shadow-lg shadow-[#BABABA]'>
                <div className='mb-8'>
                    <p className='text-[22px] text-black-700 font-mulish pt-10'>Be the vanguard of the</p>
                    <h3 className='font-bold text-[40px] font-mulish '>Eastick People</h3>
                </div>
                <div className='mb-8'>
                    <form  action="">
                        <input className='border-2 border-zinc-900 rounded h-[40px] w-[300px] py-1 pl-3' type="text" id="new-member" name="new-member" placeholder="Type your email"/>
                        <button className='bg-zinc-300 border border  rounded-md p-2 text-black ml-4 font-inter'>Join Now</button>
                    </form>
                </div>
                <div className='font-mulish pb-10 text-[#6E7191]'>
                    <p>By joining you as a Eastick member,</p>
                    <p>we will always send you the latest updates via email .</p>
                </div>
            </div>
        </div>
        <div> <Footer></Footer> </div>
    </div>
    )
}

export default HomePage;