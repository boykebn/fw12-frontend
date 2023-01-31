import React from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-feather";
// import axios from 'axios';
import http from "../helpers/http";
import Skeleton from "../components/Skeleton";

const ListMovie = () => {
  const [dataMovies, setDataMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState('');
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    // get data movie tittle and images
    const getDataMovies = async () => {
      try {
        const response = await http().get(`/movies?page=${page}&limit=5&sort=${sort}&sortBy=title&search=${search}`);
        setDataMovies(response?.data?.results);
        console.log(response?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    getDataMovies();
  }, [page, sort, search]);

  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };


  return (
    <div className="h-screen">
      <div>
        {" "}
        <Header2></Header2>{" "}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-24 py-10 bg-[#A6BB8D]">
        <div className="basis-1/4 text-3xl font-bold font-mulish md:py-0 py-10">
          <span>List Movie</span>
        </div>
        <div className="basis-1/2 flex flex-col md:flex-row justify-between gap-2">
          <select name="sort" onChange={(e) => setSort(e.target.value)} className="select w-full max-w-xs">
                <option value="sort" className="hidden font-normal">
                  Sort
                </option>
                <option value="ASC">A - Z</option>
                <option value="DESC">Z - A</option>
          </select>

          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movie name..."
            className="input w-full max-w-xs font-mulish outline-none"
          />
        </div>
      </div>

      {/* month button */}
      <div className="flex justify-center items center py-10 px-5 md:px-24 bg-[#A6BB8D]">
        <div className="flex overflow-x-scroll text-black-500 pb-5 mb-12">
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            September
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            October
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            November
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            December
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            January
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            February
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            March
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            April
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            May
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            June
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            July
          </button>
          <button className="bg-[#EAE7B1] hover:bg-[#3C6255] rounded-lg h-10 w-36 pl-5 pr-5 ml-5">
            august
          </button>
        </div>
      </div>
      {/* month button */}

        {/* card of movies start */}
      <div className="w-full p-5 bg-[#A6BB8D]">
        <div className="flex flex-col justify-center items-center py-7 bg-[#EAE7B1] rounded-lg">
          {dataMovies[0] ? (
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              {dataMovies.map((item) => (
                <div
                  key={item.id}
                  className="inline-block text-center border-2 border-gray-300 rounded-lg p-6 m-4 w-[220px] h-[450] hover:bg-[#047857] hover:border-gray-900 transition-all duration-700"
                >
                <div>
                  <img className="mb-2 rounded-lg" src={item.pictures} alt="Black Widow" />
                </div>
                <div className="whitespace-normal">
                  <h4 className="font-bold text-[18px] mb-2">
                  {item.movieTitle}
                  </h4>
                </div>
                <div>
                  <p className="text-[14px] text-center mb-6">...</p>
                </div>
              <Link to={"/MovieDetails/" + item.id}>
                  <button className="border-2 border-black rounded-lg py-1 px-9 hover:bg-green-600 transition-all duration-500">
                    Details
                  </button>
                </Link>
              </div>
                ))}
            </div>
          ) : (
            <Skeleton />
          )}
        <div className="flex justify-around mt-8 mb-3 gap-5">
            {page > 1 ? (
              <button
                onClick={prevPage}
                className="btn bg-[#3C6255] flex gap-3"
              >
                <ArrowLeft />
                <div>Prev</div>
              </button>
            ) : (
              <button
                onClick={prevPage}
                disabled={true}
                className="btn bg-[#3C6255] flex gap-3"
              >
                <ArrowLeft />
                <div>Prev</div>
              </button>
            )}
            <button
              onClick={nextPage}
              disabled={dataMovies.length < 5}
              className="btn bg-[#3C6255] flex gap-3"
            >
              <div>Next</div>
              <ArrowRight />
            </button>
          </div>
        {/* <nav aria-label="Page navigation example">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <div className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Previous</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              </div>
            </li>
            <li>
              <div className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</div>
            </li>
            <li>
              <div className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</div>
            </li>
            <li>
              <div aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</div>
            </li>
            <li>
              <div className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</div>
            </li>
            <li>
              <div className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</div>
            </li>
            <li>
              <div className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Next</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </div>
            </li>
          </ul>
        </nav> */}

        </div>
        {/* card of movies end */}
      </div>
      {/* <div className="bg-[#A6BB8D] py-16 px-5 md:px-28">
        
      </div> */}
      {/* upcoming end */}

      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
};

export default ListMovie;
