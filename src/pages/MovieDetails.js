import React from 'react'
import { useParams } from 'react-router-dom';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import BorderListCinemas from '../components/BorderListCinema';
import http from '../helpers/http';

const MovieDetails = () => {
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
    return (
        <div>
            <div> <Header2></Header2> </div>
            <div className='flex flex-col md:flex-row pt-[40px] pb-[96px] bg-[#A6BB8D]'>
                <div className='ml-[40px] md:ml-[110px] border-2 rounded-2xl w-[320px] h-[390px] md:h-[200px] xl:h-[380px] lg:h-[250px]'>
                    <div className='flex justify-center items-center'>
                        <img className='px-5 py-5 md:px-2 py-2 pr-0 w-[240px] rounded-lg' src={movieId?.pictures} alt="mv-poster" />
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
                      <div className='text-sm font-mulish pb-6'>{movieId?.releaseDate}</div>
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

            <section className=''>
            <div className=''>
                <div className='bg-[#EAE7B1]'>
                    <h2 className='flex justify-center items-center font-mulish font-bold text-xl pt-[70px] pb-[40px]'>Showtimes and Tickets</h2>
                    <div className='flex justify-center items-center pb-[72px]'>
                        <input className='mr-5 border border-2 rounded-lg w-[200px] h-[35px] p-5' type="date" name="dates" id="dates" placeholder="10/22/2022" />
                        <select className='mr-5 border border-2 rounded-lg w-[200px] h-[35px] p-5' name="city-select" id="city-select">Purwokerto</select>
                    </div>
                    
                    <div className='inline-block'>
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
                    </div>

                </div>
            </div>
        </section>

            <div className='flex bg-[#EAE7B1] pt-[50px] pb-[50px]'>
                <div className='flex-1 pt-[10px] pl-[110px]'><hr className='border-[#61876E]' /></div>
                <div className='font-mulish text-sm pl-10 pr-10'>view more</div>
                <div className='flex-1 pt-[10px] pr-[110px]'><hr className='border-[#61876E]' /></div>
            </div>

        <div> <Footer></Footer> </div>
        </div>
    )
};


export default MovieDetails;