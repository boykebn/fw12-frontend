import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import axios from 'axios';
import http from "../../src/helpers/http";

const HomePage = () => {
  const [dataUpcoming, setDataUpcoming] = React.useState([]);
  const [dataNowshowing, setDataNowshowing] = React.useState([]);

  const token = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    getUpcoming();
    getNowshowing();
  }, []);

  // get data movie Up Coming
  const getUpcoming = async () => {
    try {
      const response = await http().get("/movies/upcoming");
      setDataUpcoming(response?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getNowshowing = async () => {
    try {
      const response = await http().get("/movies/nowShowing");
      setDataNowshowing(response?.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen">
      {token ? <Header2 /> : <Header />}
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 bg-[#EAE7B1]">
        <div className="flex flex-1 justify-center">
          <div className="w-full flex flex-col justify-center py-5 md:items-center">
            <p className="md:text-xl text-[#61876E] font-mulish py-5">
              Nearest Cinema, Newest Movie,
            </p>
            <p className="text-2xl md:text-5xl font-extrabold font-mulish text-black">
              Find out now!
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-center hover:grayscale transition-all duration-700">
            <img src={require("../assets/images/heading1.png")} alt="poster" />
          </div>
        </div>
      </div>

      {/* now showing start */}
      <div className="bg-[#A6BB8D] md:py-16 md:px-28">
        <div className="flex-1 md:flex justify-between items-center text-center p-5 mb-10">
          <div className="py-2">
            <span className="text-3xl font-semibold font-mulish">Now Showing</span>
          </div>
          <div className="py-2">
            <Link to="/ListMovie" className="text-lg font-semibold hover:font-bold hover:border-b border-gray-700">
                View All
            </Link>
          </div>
        </div>
        <div className="text-black whitespace-nowrap overflow-scroll pb-5 overflow-y-hidden">
          {dataNowshowing?.map((movies) => (
            <React.Fragment key={movies.id}>
            <div className="w-[290px] h-[370px] hover:h-[530px] transition-all duration-1000 cursor-pointer m-5 py-5 inline-block rounded overflow-hidden shadow-lg">
            <div className="flex justify-center items-center p-6"> 
            <img className="w-[200px] rounded-lg" src={movies.pictures} alt="movie" />
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-3 whitespace-normal">
                <h4 className="text-lg font-semibold">{movies.movieTitle}</h4>
                <span className="text-md">Genre: {movies.genre}</span>
                <Link to="/MovieDetails">
                <button className="btn btn-outline btn-primary">Details</button>
              </Link>
            </div>
          </div>          
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* now showing end */}

      {/* up coming start */}
      <div className="bg-[#A6BB8D] py-10 md:py-16 md:px-28 ">
      <div className="flex-1 md:flex justify-between items-center text-center p-5 mb-10">
          <div className="py-2">
            <span className="text-3xl font-semibold font-mulish">Upcoming Movies</span>
          </div>
          <div className="py-2">
            <Link to="/ListMovie" className="text-lg font-semibold hover:font-bold hover:border-b border-gray-700">
                View All
            </Link>
          </div>
        </div>

        {/* month button */}
        <div className="flex overflow-x-auto text-black-500 p-5">
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            September
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            October
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            November
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            December
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            January
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            February
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            March
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            April
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            May
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            June
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            July
          </button>
          <button className="border-2 border-[#A6BB8D] bg-[#EAE7B1] hover:bg-[#61876E] rounded-lg py-2 px-5 mr-3">
            august
          </button>
        </div>
        {/* month button */}

        {/* card of movies */}

        <div className="text-black whitespace-nowrap overflow-scroll pb-5 overflow-y-hidden">
          {dataUpcoming?.map((movies) => (
            <div key={movies.id} className="inline-block text-center border-2 border-gray-300 rounded-lg p-6 m-4 w-[220px] h-[450] hover:bg-[#047857] hover:border-gray-900 transition-all duration-700">
              <div>
                <img className="mb-2 rounded-lg" src={movies.pictures} alt="Black Widow" />
              </div>
              <div className="whitespace-normal">
                <h4 className="font-bold text-[18px] mb-2">
                  {movies.movieTitle}
                </h4>
              </div>
              <div>
                <p className="text-[14px] text-center mb-6">{movies.genre}</p>
              </div>
              <Link to="/">
                <button className="border-2 border-black rounded-lg py-1 px-9 hover:bg-green-600 transition-all duration-500">
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* upcoming end */}

      <div className='flex justify-center bg-[#EAE7B1] p-10'>
            <div className='w-full text-center text-black-500 text-[14px] border-[#A6BB8D] rounded-2xl bg-[#A6BB8D] shadow-lg shadow-[#BABABA]'>
                <div className='mb-8 font-mulish'>
                    <p className='text-lg text-black py-5'>Be the vanguard of the</p>
                    <h3 className='font-bold text-xl md:text-4xl'>Eastick People</h3>
                </div>
                <div className='mb-8'>
                    <form  action="" className="px-5">
                        <input className='border-2 border-[#A6BB8D] rounded-lg w-full md:w-[400px] p-2.5 md:p-2 outline-none mb-2 md:mb-0' type="text" id="new-member" name="new-member" placeholder="Type your email" />
                        <button className='w-full md:w-[100px] bg-[#EAE7B1] border-black rounded-md p-2 text-black md:ml-4 font-inter'>Join Now</button>
                    </form>
                </div>
                <div className='font-mulish p-8 text-[#6E7191]'>
                    <p>By joining you as a Eastick member,</p>
                    <p>we will always send you the latest updates via email .</p>
                </div>
            </div>
        </div>
      <div> <Footer /> </div>
    </div>
  );
};

export default HomePage;


