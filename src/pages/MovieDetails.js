import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { useParams, useNavigate } from 'react-router-dom';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
// import BorderListCinemas from '../components/BorderListCinema';
import http from '../helpers/http';
import {selectCinemas} from './redux/reducers/transaction';
import Skeleton from '../components/Skeleton';

const MovieDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // console.log(token)
  const { id } = jwt_decode(token);
  const { id: getId } = useParams();
  const [movieId, setMovieId] = React.useState(null);
  const fetchMovieId = async () => {
    try {
      const response = await http().get(`/movies/${getId}`);
      setMovieId(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    fetchMovieId();
  }, []);

  const Today = new Date().toLocaleDateString("en-ca");

  const [selectDate, setSelectDate] = React.useState("");
  const [selectCity, setSelectCity] = React.useState("");
  const [selectTime, setSelectTime] = React.useState(null);
  const [selectCinema, setSelectCinema] = React.useState(null);
  const [selectPrice, setSelectPrice] = React.useState("")

  //FETCHING CINEMA
  const [cinema, setCinema] = React.useState([]);
  // console.log(cinema)

  const fetchCinema = async () => {
    try {
      const response = await http(token).get(
        `/movieDetails/${getId}/schedules?date=${selectDate}&city=${selectCity}`
      );
      // console.log(response)
      setCinema(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    fetchCinema();
  }, [selectCity, selectDate]);

  //handle select time
  const handleSelectTime = (item, cinemaId, price) => {
    setSelectTime(item);
    setSelectCinema(cinemaId);
    setSelectPrice(price);
  };

  //handle onsubmit book now

  const [errorSelectedTime, setErrorSelectedTime] = React.useState(false);
  const [errorSelectedDate, setErrorSelectedDate] = React.useState(false);
  // const moviesId = movieId?.id;
  const handleSubmitBookNow = async (cinemaName, price, movieSchedulesId, cinemaPicture) => {
    try {
      if (!selectDate) {
        setErrorSelectedDate("Please select date...");
        setTimeout(() => {
          setErrorSelectedDate(false);
        }, 3000);
      } else if (!selectTime) {
        setErrorSelectedTime("Please select time...");
        setTimeout(() => {
          setErrorSelectedTime(false);
        }, 3000);
      } else {
        dispatch(
          selectCinemas({
            movieTitle: movieId.movieTitle,
            bookingDate: selectDate,
            userId: id,
            movieId: getId,
            cinemaId: selectCinema,
            time: selectTime,
            price: selectPrice,
            cinemaName,
            cinemaPicture,
            movieSchedulesId,
          })
          );
          // console.log(cinema.picture)
        navigate("/OrderPage");
      }
    } catch (err) {
      console.log(err);
    }
    console.log("masuk nih")
  };
    return (
        <div>
            <div> <Header2></Header2> </div>

            {movieId ? (
              <div key="" className='flex flex-col md:flex-row pt-[40px] pb-[96px] bg-[#A6BB8D]'>
                  <div className='p-5 ml-[40px] md:ml-[110px] border-2 rounded-2xl w-[200px] md:w-[200px] xl:w-[350px] lg:w-[400px] h-[300px] md:h-[200px] xl:h-[350px] lg:h-[250px]'>
                      <div className='flex justify-center items-center'>
                          <img className='rounded-lg' src={movieId?.pictures} alt="mv-poster" />
                      </div>
                  </div>

                  <div className='pl-[80px] pr-5'>

                    <div>
                        <h2 className='font-mulish text-xl font-bold pb-2'>{movieId?.movieTitle}</h2>
                        <div className='font-mulish text-sm text-[#4E4B66] pb-10'>{movieId?.genre}</div>
                    </div>

                    <div className='flex flex-1'>
                      <div>
                        <div className='text-xs text-[#4E4B66] font-mulish'>Release date</div>
                        <div className='text-sm font-mulish pb-6'>{new Date(movieId?.releaseDate).toDateString()}</div>
                        <div className='text-xs text-[#4E4B66] font-mulish'>Duration</div>
                        <div className='text-sm font-mulish'>{movieId?.duration}</div>
                      </div>
                      <div>
                        <div className='text-xs text-[#4E4B66] font-mulish pl-10'>Directed by</div>
                        <div className='text-sm font-mulish pb-6 pl-10'>{movieId?.director}</div>
                        <div className='text-xs text-[#4E4B66] font-mulish pl-10'>Casts</div>
                        <div className='text-sm font-mulish pl-10 pb-10'>{movieId?.casts},...</div>
                      </div>
                    </div>
                    <hr />
                    <div>
                        <p className='pt-5 font-mulish font-bold text-md'>Synopsis</p>
                    </div>
                    <div>
                      <p className='break-all font-mulish text-md'>{movieId?.synopsis}</p>
                    </div>
                  </div>
              </div>
            ) : (
              <Skeleton />
            )}

            <section>
            <div>
                <div key="" className='bg-[#EAE7B1]'>
                    <h2 className='flex justify-center items-center font-mulish font-bold text-xl pt-[70px] pb-[40px]'>Showtimes and Tickets</h2>
                    <div className='flex justify-center items-center pb-[72px]'>
                        <input 
                        className='p-5 rounded-md w-[220px] mr-5' 
                        type="date" 
                        name="dates"
                        onChange={(e) => setSelectDate(e.target.value)} 
                        min={Today} />
                        <select className='p-5 rounded-md w-[220px]' name="city-select" id="city-select" onChange={(e) => setSelectCity(e.target.value)}>
                          <option value="" className="hidden">
                              Select city
                          </option>
                          <option value="Karawang">Karawang</option>
                          </select>
                    </div>
                    
                    <div className='inline-block'>
                      {cinema?.map((cinema) => ( 
                        <div className='rounded-lg w-[320px] h-[320px] bg-[#A6BB8D] ml-[0px] md:ml-[110px]'>
                            <div className='grid grid-cols-[100px_minmax(150px,_1fr)_100px] p-5'>
                                <div className='pt-3'>
                                    <img src={cinema?.picture} className="W-[50px] h-[50px]" alt="logo-cinemas" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='font-mulish text-xl font-bold pb-1'>{cinema?.name}</h3>
                                    <p className='font-mulish text-xs text-[#6E7191] w-[162px]'>{cinema?.address}</p>
                                </div>
                            </div>
                            <hr />
                        {/* <div><BorderListCinemas></BorderListCinemas></div> */}
                        <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
                          {cinema?.time.map((item, index) => (
                            <button
                              onClick={() => handleSelectTime(item, cinema.id,cinema.price)}
                              key={String(index)}
                              className={
                                selectTime === item && selectCinema === cinema.id
                                  ? "text-[#EAE7B1] text-center"
                                  : "text-black font-light text-base"
                              }
                            >
                              {item.split(":")[0] + ":" + item.split(":")[1] + " WIB"}
                            </button>
                          ))}
                        </div>
                            <div className="grid grid-cols-2">
                              <div className="">Price</div>
                              <div className="text-right font-bold">
                                Rp {Number(cinema.price).toLocaleString("id")}/seat
                              </div>
                            </div>
                        <div className='flex justify-center items-center pt-5'>
                          <button
                            onClick={() =>
                              handleSubmitBookNow(
                                cinema?.name,
                                cinema?.price,
                                cinema?.movieschedulesid,
                                cinema?.picture
                              )
                            }
                            className="font-mulish block w-9/12 h-10 bg-[#61876E] w-[200px] hover:bg-[#3C6255] border rounded-lg"
                          >
                            Book Now
                          </button>
                        </div>
                        {errorSelectedTime && (
                          <div className="text-red-500 text-center font-bold text-lg">
                            {errorSelectedTime}
                          </div>
                        )}
                        {errorSelectedDate && (
                          <div className="text-red-500 text-center font-bold text-lg">
                            {errorSelectedDate}
                          </div>
                        )}
                        </div>
                      ))}
                    </div>
{/* 
                    <div className='inline-block pt-10 pl-0 md:pl-7'>
                        <div className='rounded-lg w-[320px] h-[300px] bg-[#A6BB8D] ml-[30px] md:ml-[110px]'>
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

                    <div className='inline-block pt-10 pl-0 md:pl-7'>
                        <div className='rounded-lg w-[320px] h-[300px] bg-[#A6BB8D] ml-[30px] md:ml-[110px]'>
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
                        <div className='rounded-lg w-[320px] h-[300px] bg-[#A6BB8D] ml-[30px] md:ml-[110px]'>
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

                    <div className='inline-block pt-10 pl-0 md:pl-7'>
                        <div className='rounded-lg w-[320px] h-[300px] bg-[#A6BB8D] ml-[30px] md:ml-[110px]'>
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

                    <div className='inline-block pt-10 pl-0 md:pl-7'>
                        <div className='rounded-lg w-[320px] h-[300px] bg-[#A6BB8D] ml-[30px] md:ml-[110px]'>
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
                    </div> */}

                </div>
            </div>
        </section>

            <div className='flex bg-[#EAE7B1] pt-[50px] pb-[50px]'>
                <div className='flex-1 pt-[10px] pl-[10px] md:pl-[110px]'><hr className='border-[#61876E]' /></div>
                <div className='font-mulish text-sm pl-10 pr-10'>view more</div>
                <div className='flex-1 pt-[10px] pr-[10px] md:pr-[110px]'><hr className='border-[#61876E]' /></div>
            </div>

        <div> <Footer></Footer> </div>
        </div>
    )
};


export default MovieDetails;