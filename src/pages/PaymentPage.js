import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";

import { selectPayment } from './redux/reducers/transaction';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import http from '../helpers/http';


const PaymentPage = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector((state) => state.transaction.userId)
  const bookingDate = useSelector((state) => state?.transaction.bookingDate)
  const movieTitle = useSelector((state) => state.transaction.movieTitle)
  const movieId = useSelector((state) => state.transaction.movieId)
  const time = useSelector((state) => state.transaction.time)
  const cinemaName = useSelector((state) => state.transaction.cinemaName)
  const totalPrice = useSelector((state) => state.transaction.totalPrice)
  const price = useSelector((state) => state.transaction.price)
  const movieSchedulesId = useSelector((state) => state.transaction.movieSchedulesId)
  const cinemaId = useSelector((state) => state.transaction.cinemaId)
  const seatNum = useSelector((state) => state.transaction.seatNum)
  // const fullName = useSelector((state) => state.transaction.)

  const date = moment(bookingDate).format("LLLL").split(" ");
  const day = date[0];
  const month = date[1];
  const newDate = date[2];
  const year = date[3];
  const fixDate = `${day} ${month} ${newDate} ${year}`;

  //handle get payment method
  const [paymentMethod, setPaymentMethod] = React.useState(null);
  const [selectPaymentMethod, setSelectPaymentMethod] = React.useState(null);
  // console.log(paymentMethod)

  const getPaymentMethod = async () => {
    try {
      const response = await http(token).get("/paymentMethod?limit=8");
      setPaymentMethod(response?.data?.results);
    } catch (error) {
      if (error){
        console.log(error)
      }
    }
  };

  React.useEffect(() => {
    if (token) {
      getPaymentMethod();
    }
  }, [token]);


  // handle get profile
  const [getProfile, setGetProfile] = React.useState({});
  const fullNames = `${getProfile.firstName} ${getProfile.lastName}`

  const getDataProfile = async () => {
    try {
      const response = await http(token).get('/profile');
      setGetProfile(response?.data?.results);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  React.useEffect(() => {
    if (token) {
      getDataProfile();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);


  const [successMessage, setSuccessMessage] = React.useState(false);
  const [errorPayment, setErrorPayment] = React.useState(false);

  // handle payment order
  const handlePaymentOrdered = (value) => {
    if (!selectPaymentMethod) {
      setErrorPayment("Please select a payment method first");
      setTimeout(() => {
        setErrorPayment(false)
      }, 2000);
    } else {
      dispatch(
        selectPayment({
          paymentMethodId: selectPaymentMethod,
          fullName: fullNames,
          email: getProfile.email,
          phoneNUm: getProfile.phoneNUm,
          statusId: 1,
        })
      );
        createTransaction(value);
    }
  };

  // create transaction
  const createTransaction = async () => {
    try {
      const response = await http(token).post("/transaction/orderTransaction", {
        userId,
        bookingDate,
        movieId,
        cinemaId,
        movieSchedulesId,
        fullName: fullNames,
        email: getProfile.email,
        phoneNUm: getProfile.phoneNUm,
        statusId: 1,
        paymentMethodId: selectPaymentMethod,
        seatNum,
        time,
        totalPrice,
      });
      setSuccessMessage("Order has been succes");
      setTimeout(() => {
        setSuccessMessage(false);
        navigate("/OrderHistory");
      }, 2000);
      return response;
    } catch (error) {
      if (error) {
        console.log(error)
      };
    };
  };

    return (
        <div>
            <div> <Header2></Header2> </div>

            <div className='bg-[#61876E] grid grid-cols-[1000px_minmax(440px,_1fr)_100px]'>
                <div class="right">
                    <div className='pl-28 pt-7 pb-10'>
                        <h2 className='text-xl font-mulish font-bold pb-5'>Payment Info</h2>
                        <div className='rounded-lg bg-[#EAE7B1] w-[820px] h-[413x] p-7'>
                            <div className='flex justify-between pt-5'>
                                <div className='text-[#6B6B6B] font-mulish text-md'>Date & time</div>
                                <div className='font-mulish text-lg font-bold'>{fixDate} at {time} WIB </div>
                            </div>
                            <div className='border border-b-0 rounded mt-5 border-[#A6BB8D]'></div>
                            <div className='flex justify-between pt-5'>
                                <div className='text-[#6B6B6B] font-mulish text-md'>Movie title</div>
                                <div className='font-mulish text-lg font-bold'>{movieTitle}</div>
                            </div>
                            <div className='border border-b-0 rounded mt-5 border-[#A6BB8D]'></div>
                            <div className='flex justify-between pt-5'>
                                <div className='text-[#6B6B6B] font-mulish text-md'>Cinema name</div>
                                <div className='font-mulish text-lg font-bold'>{cinemaName}</div>
                            </div>
                            <div className='border border-b-0 rounded mt-5 border-[#A6BB8D]'></div>
                            <div className='flex justify-between pt-5'>
                                <div className='text-[#6B6B6B] font-mulish text-md'>Number of tickets</div>
                                <div className='font-mulish text-lg font-bold'>{totalPrice / price} pieces{" "}</div>
                            </div>
                            <div className='border border-b-0 rounded mt-5 border-[#A6BB8D]'></div>
                            <div className='flex justify-between pt-5'>
                                <div className='text-[#6B6B6B] font-mulish text-md'>Total payment</div>
                                <div className='font-mulish text-lg font-bold'>Rp.{Number(totalPrice).toLocaleString("id")}</div>
                            </div>
                        </div>
                    </div>

                    <div className='pl-28 pt-7 pb-10'>
                        <h2 className='text-xl font-mulish font-bold pb-5'>Choose a Payment Method</h2>
                        <div className='rounded-lg bg-[#EAE7B1] w-[820px] h-[413x] p-7 '>
                        <div className='pl-9 pt-5 flex md:flex-row justify-center flex-wrap gap-3'>

                        {paymentMethod?.map((item) => {
                            return (
                              <button
                                key={String(item.id)}
                                onClick={() => setSelectPaymentMethod(item?.id)}
                                className={
                                  selectPaymentMethod === item?.id
                                    ? "border-2 md:w-[150px] w-[115px] border-black flex items-center justify-center py-2 rounded-md bg-[#A6BB8D] cursor-pointer"
                                    : "border-2 md:w-[150px] w-[115px] border-black flex items-center justify-center py-2 rounded-md bg-white cursor-pointer"
                                }
                              >
                                <img
                                  src={item.picture}
                                  alt={`${item.name}`}
                                  className="w-[60px] h-[50px]"
                                ></img>
                              </button>
                            );
                          })}

                        </div>
                            <div className='flex pb-[20px]'>
                                <div className='flex-1 pt-[10px] pl-[55px]'> <hr className='border-[#A6BB8D]' /> </div>
                                <div className='font-mulish text-sm text-[#A0A3BD] pl-5 pr-5'>or</div>
                                <div className='flex-1 pt-[10px] pr-[60px]'> <hr className='border-[#A6BB8D]' /> </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className='font-mulish'>Pay via cash. See how it wor</div>
                            </div>

                            {errorPayment && (
                                  <div className="mt-5 md:block hidden font-bold text-red-500 text-center text-lg">
                                    {errorPayment}{" "}
                                  </div>
                                )}
                                {successMessage && (
                                  <div className="mt-5 md:block hidden font-bold text-green-500 text-center text-lg">
                                    {successMessage}
                                  </div>
                                )}
                        </div>

                        <div className=' pt-7 pb-10'>
                            <div className='flex justify-between'>
                                <Link to="/OrderPage">
                                  <button className='border rounded-lg font-mulish font-bold text-sm w-[300px] h-[56px] bg-[#EAE7B1] hover:bg-[#A6BB8D]'>Previous Step</button>
                                </Link>

                                  <button onClick={() => handlePaymentOrdered()} className='mr-[65px] font-mulish text-sm font-bold border rounded-lg w-[300px] h-[56px] bg-[#EAE7B1] hover:bg-[#A6BB8D]'>Pay your order</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="left">
                <div >
            <div class="personal-info-heading">
                <h2 className='pt-7 pb-5 font-mulish text-xl font-bold'>Personal Info</h2>
                <div className='bg-[#EAE7B1] w-[410px] h-[390px] p-10 rounded-lg'>
                    <form class="form-pi">
                        <div>
                            <label className='block pb-3' for="fullName">Full Name</label>
                            <input className='border rounded w-[330px] h-[50px] px-5 ' type="text" name="fullName" id='fullName' placeholder={fullNames}/>
                        </div>
                        <div className='pt-5'>
                            <label className='block pb-3' for="email">Email</label>
                            <input className='border rounded w-[330px] h-[50px] px-5' type="text" name="email" id="email" placeholder={getProfile.email}/>
                        </div>
                        <div className='pt-5'>
                            <label for="phone-numb">Phone Number</label>
                            <div className='border rounded w-[330px] h-[50px] p-3 bg-white'>
                                <input className='w-[40px] border-r-2' type="text" name="phone-numb" id="phone-numb" placeholder="+62"/>
                                <input className='pl-5 px-5'  type="text" name="phoneNUm" id="phone-numb" placeholder={getProfile.phoneNUm}/>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 pt-4'>
                            <div>
                                <img src={require('../assets/images/warning.png')} alt="warning" />
                            </div>
                            <div className='font-bold'>Fill your data correctly.</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                </div>

            </div>

            <div> <Footer></Footer> </div>
        </div>
    )
};


export default PaymentPage;