import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import http from '../helpers/http';


const ListMovie = () => {

    const [ dataMovies, setDataMovies ] = React.useState([]);

    React.useEffect (() => {
        getDataMovies()
    }, [])

    // get data movie tittle and images
    const getDataMovies = async () => {
      try {
        const response = await http().get('/movies');
        setDataMovies(response?.data?.results)
        console.log(response?.data?.results)
      }catch (error) {
        console.log(error)
      }
    };

    return (
        <div className='h-screen'>
        <div> <Header2></Header2> </div>

        <div className='flex flex-1 justify-between pt-10 bg-[#A6BB8D]'>
                <div className='pl-[120px] font-bold text-xl font-mulish'>List Movie</div>
            <div className='pr-[130px]'>
                <select className='border border-[#DEDEDE] rounded mr-5 w-24 h-10' name="search" id="search"></select>
                <input className='border border-[#DEDEDE] rounded h-10 pl-5 text-sm' type="text" name="search" id="search" placeholder="Search Movie Name ..." />
            </div>
        </div>

        {/* month button */}
        <div className='flex justify-center items center py-10 px-24 bg-[#A6BB8D]'>
            <div className='flex overflow-x-scroll text-black-500 pb-5 mb-12'>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>September</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>October</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>November</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>December</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>January</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>February</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>March</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>April</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>May</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>June</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>July</button>
                <button className='bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5'>august</button>
            </div>
        </div>
        {/* month button */}

        {/* up coming start */}
            <div className='bg-[#A6BB8D] py-16 px-28 pt-0 '>

        {/* card of movies start */}
            <div className='flex justify-center flex-wrap text-black-500 pb-5 bg-[#EAE7B1] py-5 px-5'>
                {dataMovies?.map((movies) => (
                    <div key={movies.id} className='inline-block text-center border-2 border-[#3C6255] rounded-lg p-8 mr-6 mb-7 w-[220px] h-[450px]'>
                        <div>   
                            <img className='mb-2' src={movies.pictures} width="150" height="200" alt="Black Widow"/>
                        </div>
                        <div className='whitespace-normal'>
                            <h4 className='font-bold text-[18px] mb-2'>{movies.movieTitle}</h4>
                        </div>
                        <div>
                            <p className='text-[14px] text-center mb-6'>{movies.genre}</p>
                        </div>
                        <Link to='/'>
                            <button className='border-2 border-[#3C6255] rounded-lg py-1 px-9'>Details</button>
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