import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from "moment/moment"

import { chooseSeat } from './redux/reducers/transaction';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';


const OrderPage = () => {
const token = useSelector((state) => state.auth.token)
const navigate = useNavigate();
const dispatch = useDispatch();
const bookingDate = useSelector((state) => state.transaction.bookingDate);
const price = useSelector((state) => state.transaction.price);
const movieTitle = useSelector((state) => state.transaction.movieTitle);
const time= useSelector((state) => state.transaction.time);
const cinemaName = useSelector((state) => state.transaction.cinemaName)
const cinemaPicture = useSelector((state) => state.transaction.cinemaPicture)
const movieSchedulesId = useSelector((state) => state.transaction.movieSchedulesId)
// const price = 75000;
// console.log(movieSchedulesId)

//set date
const date = moment(bookingDate).format("LLLL").split(" ");
const day = date[0];
const month = date[1];
const newDate = date[2];
const year = date[3];
const fixDate = `${day} ${month} ${newDate} ${year}`;


//set seatnum
const alphabet = ["A", "B", "C", "D", "E", "F", "G"];
const column1 = [1, 2, 3, 4, 5, 6, 7];
const column2 = [8, 9, 10, 11, 12, 13, 14];

const [selectSeat, setSelectSeat] = React.useState([]);
const [errorMessage, setErrorMessage] = React.useState(null);

const handleChooseSeat = (seat) => {
  if (!selectSeat.includes(seat)) {
    setSelectSeat([...selectSeat, seat].sort());
  } else {
    setSelectSeat(selectSeat.filter((e) => e !== seat));
  }
};
const totalPrice = Number(selectSeat.length * price).toLocaleString("id");
// const movieTitle = movieId.movieTitle
// console.log(movieTitle)

// handle for choose seat to payment
const handleChekOut = () => {
  try {
    if (selectSeat.length) {
      dispatch(
        chooseSeat({
          movieTitle: movieTitle,
          seatNum: selectSeat,
          totalPrice: selectSeat.length * price,
        })
      )
      navigate("/PaymentPage")
    } else {
      setErrorMessage("Please choose your seat");
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  }
}

    return (
        <div>
            <div> <Header2></Header2> </div>

            <div className='bg-[#61876E] grid grid-cols-[1000px_minmax(440px,_1fr)_100px]'>
                <div class="right">

                        <div className='pl-28 pt-7 pb-10 '>
                            <h2 className='text-xl font-mulish font-bold pb-5'>Movie Selected</h2>
                            <div className='rounded-lg bg-[#EAE7B1] w-[820px] h-[90px] flex justify-between p-7'>
                                <h2 className='font-mulish text-lg font-bold'>{movieTitle}</h2>
                                <Link to="/ListMovie">
                                  <button className='bg-[#A6BB8D] hover:bg-[#61876E] font-mulish font-bold text-xs text-center p-2 rounded ' type='button'>
                                    Change Movie
                                  </button>
                                </Link>
                            </div>
                        </div>

                <div className='pl-28 pt-7 pb-5'>
                    <div className='text-xl font-mulish font-bold '>Choose Your Seat</div>
                </div>
            <div className=' ml-28 pt-7 pb-5 bg-[#EAE7B1] w-[820px] rounded-lg'>
                <div className='flex justify-center items-center pl-7 pb-2'>Screen</div>
                <div className='border h-2 rounded bg-[#A6BB8D] mr-[175px] ml-[175px]'></div>
                <div className="flex justify-center items-center flex-row gap-6 pt-5">
                  <div>
                    {alphabet.map((alpha, i) => {
                      return (
                        <div key={String(i)} className="flex-row flex">
                          {column1.map((num, index) => {
                            const seat = alpha + num;
                            return (
                              <button
                                onClick={() => handleChooseSeat(seat)}
                                key={String(index)}
                                className={
                                  selectSeat.includes(seat)
                                    ? "rounded-md m-0.5 h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem] max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 bg-[#A6BB8D]"
                                    : "rounded-md m-0.5 h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem] max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 bg-[#F5F6F8]"
                                }
                              ></button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    {alphabet.map((alp, i) => {
                      return (
                        <div key={String(i)} className="flex-row flex">
                          {column2.map((num, index) => {
                            const seat = alp + num;
                            return (
                              <button
                                onClick={() => handleChooseSeat(seat)}
                                key={String(index)}
                                className={
                                  selectSeat.includes(seat)
                                    ? "rounded-md m-0.5 h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem] max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 bg-[#A6BB8D]"
                                    : "rounded-md m-0.5 h-7 w-7 max-[768px]:h-[1rem] max-[768px]:w-[1rem] max-[425px]:h-5 max-[425px]:w-5 max-[375px]:h-3.5 max-[375px]:w-3.5 bg-[#F5F6F8]"
                                }
                              ></button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className='pl-28 pt-7 pb-5'>
                    <div className='font-mulish text-sm pb-3'>Seating Key</div>
                    <div className='flex'>
                        <div className='flex'>
                            <div className='bg-[#F5F6F8] hover:bg-[#A6BB8D] cursor-pointer rounded w-[25px] h-[25px]'></div>
                            <div className='pl-3 font-mulish text-sm'>Availabe</div>
                        </div>
                        <div className='flex pl-3'>
                            <div className='bg-[#A6BB8D] rounded w-[25px] h-[25px]'></div>
                            <div className='pl-3 font-mulish text-sm'>Selected</div>
                        </div>
                        <div className='flex pl-3'>
                            <div className='bg-zinc-400 rounded w-[25px] h-[25px]'></div>
                            <div className='pl-3 font-mulish text-sm'>Sold</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pl-28 pt-7 pb-10'>
                <div className='flex justify-between'>
                  <Link to="/Listmovie">
                    <button className='border rounded-lg font-mulish font-bold  text-sm w-[300px] h-[56px] bg-[#EAE7B1] hover:bg-[#A6BB8D]'>Change Your Movie</button>
                  </Link>

                    <button 
                    onClick={() => handleChekOut(totalPrice)} 
                    className='mr-[65px] font-mulish text-sm  font-bold border rounded-lg w-[300px] h-[56px] bg-[#EAE7B1] hover:bg-[#A6BB8D]'>
                      Checkout Now
                      </button>
                </div>
                {errorMessage && (
                <div className="font-bold text-red-500 text-center text-lg md:block hidden">
                  {errorMessage}
                </div>
              )}
            </div>
                
                </div>

                <div>
                    <div class="order-info">
                            <h2 className='pt-7 pb-4 font-mulish text-xl font-bold'>Order Info</h2>
                        <div className='bg-[#EAE7B1] w-[410px] h-[390px] p-10 rounded-lg'>
                          <div className='flex justify-center items-center'>
                            <img className='w-[60px] h-[50px] ' src={cinemaPicture} alt="cine-logo" />
                          </div>
                            <h2 className='flex justify-center items-center text-xl font-mulish'>{cinemaName}</h2>

                        <div className='flex justify-between pt-8 pb-5'>
                            <div className='text-zinc-500 font-mulish text-sm'>Movie selected</div>
                            <div className=' font-mulish text-sm font-bold'>{movieTitle}</div>
                        </div>
                        <div className='flex justify-between pb-5'>
                            <div className='text-zinc-500 font-mulish text-sm'>{fixDate}</div>
                            <div className=' font-mulish text-sm font-bold'>
                              {time} WIB
                            </div>
                        </div>
                        <div className='flex justify-between pb-5'>
                            <div className='text-zinc-500 font-mulish text-sm'>One ticket price</div>
                            <div className=' font-mulish text-sm font-bold'>Rp {Number(price).toLocaleString("id")}</div>
                        </div>
                        <div className='flex justify-between pb-5'>
                            <div className='text-zinc-500 font-mulish text-sm'>Seat choosed</div>
                            <div className=' font-mulish text-sm font-bold'>{selectSeat.length ? selectSeat.join(", ") : "-"}</div>
                        </div>
                        <div className='border border-[#A6BB8D] p-0'></div>
                        <div className='flex justify-between pt-5'>
                            <div className='font-mulish text-lg'>Total Payment</div>
                            <div className='font-mulish text-lg font-bold '>Rp {totalPrice}</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div> <Footer></Footer> </div>
        </div>
    )
};


export default OrderPage;