import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
    const [ dataMovies, setDataMovies ] = React.useState({});
    const [ dataGenre, setDataGenre ] = React.useState({});
    React.useEffect (() => {
        getData().then((data) => {
            setDataMovies(data);
            console.log(data)
        });
        // getGenre().then((data) => {
        //     setDataGenre(data);
        //     console.log(data)
        // })
    }, [])

    // get data movie tittle and images
    const getData = async () => {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=6984d06ddd66235d316ee35dc44ac611');
        return data;
    };

    // // get data movie genre
    // const getGenre = async () => {
    //     const { data } = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6984d06ddd66235d316ee35dc44ac611');
    //     return data;
    // }

    return (
    <div className='h-screen'>
        <div> <Header></Header> </div>        
        <div className='flex  items-center  py-16 px-28 bg-white'>
            <div className='flex flex-1 justify-center'>
                <div className=''>
                    <p className='text-black-700'>Nearest Cinema, Newest Movie,</p>
                    <p className='text-[35px] font-bold text-black-500'>Find out now!</p>
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
            <div className='flex'>
                <div className='border-2 border-black p-8 rounded-lg mr-6'>
                    <img src={require('../assets/images/spiderman.png')} alt="Spiderman"/>
                </div>
                <div className='border-2 border-black p-8 rounded-lg mr-6'>
                    <img src={require('../assets/images/lion-king.png')} alt="lion-king"/>
                </div>
                <div className='border-2 border-black p-8 rounded-lg mr-6'>
                    <img src={require('../assets/images/john-wick-3.png')} alt="john-wick-3"/>
                </div>
                <div className='border-2 border-black p-8 rounded-lg mr-6'>
                    <img src={require('../assets/images/spiderman.png')} alt="Spiderman"/>
                </div>
                <div className='border-2 border-black p-8 rounded-lg mr-6'>
                    <img src={require('../assets/images/lion-king.png')} alt="lion-king"/>
                </div>
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
            {dataMovies?.results?.map((movies) => (
                
            <div className='flex overflow-x-auto text-black-500 whitespace-nowrap '>
            <div className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6 w-[220px] h-[450]'>
                <img className='mb-6' src={'https://image.tmdb.org/t/p/w200' + movies.poster_path} alt="Black Widow"/>
                <h4 className='font-bold text-[18px] mb-2'>{movies.title}</h4>
                <p className='text-[14px] text-center mb-6 h-[50px]'>{}</p>
                <Link to='/'>
                    <button className='border-2 border-black-500 rounded-lg py-1 px-9'>Details</button>
                </Link>
            </div>
            {/* <div className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6'>
            <img className='mb-6' src={'https://image.tmdb.org/t/p/w200' + movies.poster_path} alt="Black Widow"/>
                <h4 className='font-bold text-[18px] mb-2'>{movies.title}</h4>
                <p className='text-[14px] text-center mb-6 h-[50px]'>Adventure, Comedy, Family</p>
                <Link to='/'>
                    <button className='border-2 border-black-500 rounded-lg py-1 px-9'>Details</button>
                </Link>
            </div>
            <div className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6'>
            <img className='mb-6' src={'https://image.tmdb.org/t/p/w200' + movies.poster_path} alt="Black Widow"/>
                <h4 className='font-bold text-[18px] mb-2'>{movies.title}</h4>
                <p className='text-[14px] text-center mb-6 h-[50px]'>Action, Sci-Fi</p>
                <Link to='/'>
                    <button className='border-2 border-black-500 rounded-lg py-1 px-9'>Details</button>
                </Link>
            </div>
            <div className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6'>
            <img className='mb-6' src={'https://image.tmdb.org/t/p/w200' + movies.poster_path} alt="Black Widow"/>
                <h4 className='font-bold text-[18px] mb-2'>{movies.title}</h4>
                <p className='text-[14px] text-center mb-6 h-[50px]'>Action, Adventure, Sci-Fi</p>
                <Link to='/'>
                    <button className='border-2 border-black-500 rounded-lg py-1 px-9'>Details</button>
                </Link>
            </div>
            <div className='flex-1 flex flex-col items-center border-2 border-zinc-900 rounded-lg p-8 mr-6'>
            <img className='mb-6' src={'https://image.tmdb.org/t/p/w200' + movies.poster_path} alt="Black Widow"/>
                <h4 className='font-bold text-[18px] mb-2'>{movies.title}</h4>
                <p className='text-[14px] text-center mb-6 h-[50px]'>Adventure, Comedy, Family</p>
                <Link to='/'>
                    <button className='border-2 border-black-500 rounded-lg py-1 px-9'>Details</button>
                </Link>
            </div> */}
        </div>
            ))}
        </div>
        {/* upcoming end */}

        <div className='flex justify-center bg-white'>
            <div className='w-1/2 text-center text-black-500 text-[14px] border rounded-2xl bg-[#FFFFFF] shadow-lg shadow-[#BABABA]'>
                <div className='mb-8'>
                    <p className='text-[22px] text-black-700 font-mulish pt-10'>Be the vanguard of the</p>
                    <h3 className='font-bold text-[40px] font-mulish '>Moviegoers</h3>
                </div>
                <div className='mb-8'>
                    <form  action="">
                        <input className='border-2 border-zinc-900 rounded h-[40px] w-[300px] py-1 pl-3' type="text" id="new-member" name="new-member" placeholder="Type your email"/>
                        <button className='bg-zinc-300 border border  rounded-md p-2 text-black ml-4 font-inter'>Join Now</button>
                    </form>
                </div>
                <div className='font-mulish pb-10 text-[#6E7191]'>
                    <p>By joining you as a Tickitz member,</p>
                    <p>we will always send you the latest updates via email .</p>
                </div>
            </div>
        </div>
        <div> <Footer></Footer> </div>
    </div>
    )
}

export default HomePage;