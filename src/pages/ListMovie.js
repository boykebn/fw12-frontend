import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ListMovie = () => {

    const [ dataMovies, setDataMovies ] = React.useState({});

    React.useEffect (() => {
        getData().then((data) => {
            setDataMovies(data);
        });
    }, [])

    // get data movie tittle and images
    const getData = async () => {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=6984d06ddd66235d316ee35dc44ac611');
        return data;
    };

    return (
        <div className='h-screen'>
        <div> <Header2></Header2> </div>

        <div className='flex flex-1 justify-between pt-10 bg-gray-100'>
                <div className='pl-[120px] font-bold text-xl font-mulish'>List Movie</div>
            <div className='pr-[130px]'>
                <select className='border border-[#DEDEDE] rounded mr-5 w-24 h-10' name="search" id="search"></select>
                <input className='border border-[#DEDEDE] rounded h-10 pl-5 text-sm' type="text" name="search" id="search" placeholder="Search Movie Name ..." />
            </div>
        </div>

        {/* month button */}
        <div className='flex justify-center items center py-10 px-24 bg-gray-100'>
            <div className='flex overflow-x-scroll text-black-500 pb-5 mb-12'>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>September</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>October</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>November</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>December</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>January</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>February</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>March</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>April</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>May</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>June</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>July</button>
                <button className='border border-[#DEDEDE] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>august</button>
            </div>
        </div>
        {/* month button */}

        {/* up coming start */}
            <div className='bg-gray-100 py-16 px-28 pt-0 '>

        {/* card of movies start */}
            <div className='place-content-center flex-col text-black-500 ml-14 pb-5 bg-white'>
                {dataMovies?.results?.map((movies) => (
                    <div className='inline-block text-center border-2 border-gray-300 rounded-lg p-8 mr-6 w-[220px] h-[450]'>
                        <div>   
                            <img className='mb-2' src={'https://image.tmdb.org/t/p/w200' + movies.poster_path} alt="Black Widow"/>
                        </div>
                        <div className='whitespace-normal'>
                            <h4 className='font-bold text-[18px] mb-2'>{movies.title}</h4>
                        </div>
                        <div>
                            <p className='text-[14px] text-center mb-6'>{movies.genre_ids}</p>
                        </div>
                        <Link to='/'>
                            <button className='border-2 border-black-500 rounded-lg py-1 px-9'>Details</button>
                        </Link>
                    </div>
                ))}
            </div>
         {/* card of movies end */}
        </div>
        {/* upcoming end */}

        <div> <Footer></Footer> </div>
    </div>
    )
}


export default ListMovie;