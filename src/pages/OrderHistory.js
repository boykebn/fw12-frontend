import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Edit } from 'react-feather';
import moment from 'moment';


import { cancelTransaction } from './redux/reducers/transaction';
import { logoutAction } from './redux/reducers/auth';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import http from '../helpers/http';


const OrderHistory = () => {
  const dispatch = useDispatch();

  // handle get data Profile

  const [getProfile, setGetProfile] = React.useState({});
  const token = useSelector(state => state.auth.token);

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

  // handle upload photo

  const [msgSuccessUpload, setMsgSuccessUpload] = React.useState("");
  const [msgErrorUpload, setMsgErrorUpload] = React.useState("");

  const uploadPhoto = async (e) => {
    try {
      const file = e.target.files[0];
      if(file.size > 2000000){
        setMsgSuccessUpload('')
        return setMsgErrorUpload('Maximum file size 2MB')
      }
      const form = new FormData();
      form.append("picture", file);
      const { data } = await http(token).patch("/profile/updated", form);
      setMsgSuccessUpload('Photo profile updated')
      setMsgErrorUpload('')
    } catch (error) {
      console.log(error);
      setMsgErrorUpload(error)
      setMsgSuccessUpload('')
    }
  };

   //FETCHING history transaction ID
  const [history, setHistory] = React.useState([]);
  const fetchHistory = async () => {
    try {
      const response = await http(token).get("/transaction/history");
      setHistory(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    dispatch(cancelTransaction());
    if (token) {
      fetchHistory();
    }
  }, [token]);

    return (
        <div>
            <div> <Header2></Header2> </div>

            <div className='bg-[#61876E] grid grid-cols-[440px_minmax(1000px,_1fr)_100px] gap-10'>

            <div className='pt-14 pl-28'>
                    <div className='bg-[#EAE7B1] w-[328px] h-[430px] rounded-lg p-10'>
                        <p className='font-mulish'>INFO</p>

                        <div className='flex justify-center items-center'>
                          {getProfile?.picture ? (
                            <img src={getProfile?.picture} alt="profile" className='rounded-full w-[100px]' />
                          ) : (
                            <img src={require('../assets/images/dummyAvatar.jpg')} className="rounded-full w-[100px]" alt="profile" />
                          )}
                        </div>

                        <div className="flex gap-2 items-center justify-center">
                          <label htmlFor="picture" className="hover:cursor-pointer absolute left-[295px] top-[335px]">
                            <Edit className="text-sm w-[20px] h-[20px] bg-[#3C6255] text-[#EAE7B1] rounded" />
                          </label>
                          <input className="hidden" type="file" onChange={uploadPhoto} name="picture" id="picture" />
                        </div>

                        <div className='flex justify-center items-center font-bold'> {getProfile?.firstName} {getProfile?.lastName}</div>
                        <div className='flex justify-center items-center font-mulish text-sm text-[#4E4B66] pt-2 pb-10'>Eastick People</div>

                        <hr className='border-[#A6BB8D]' />

                        <div className='pt-5 flex justify-center'>
                            <button onClick={() => dispatch(logoutAction())} className='border rounded-lg w-[187px] h-[46px] hover:bg-[#61876E] bg-[#A6BB8D]' type='button'>Log Out</button>
                        </div>

                        {msgSuccessUpload && (
                          <div className="alert alert-success shadow-lg mt-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{msgSuccessUpload}</span>
                            </div>
                          </div>
                        )}

                        {msgErrorUpload && (
                          <div className="alert alert-error shadow-lg mt-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{msgErrorUpload}</span>
                          </div>
                        </div>
                        )}
                    </div>
                </div>


                <div className='pt-14'>

                    <div className='bg-[#EAE7B1] w-[930px] h-[84px] rounded pl-8 pt-7'>
                        <div className='flex '>
                            <div className='pr-10'><Link to="/ProfilePage">Account Settings</Link></div>
                            <div className='border-b-2 border-[#A6BB8D] pb-6 font-bold'>Order History</div>
                        </div>
                    </div>
                    

                    {history?.map((item) => {
                      <div key={String(item.id)} className='bg-[#EAE7B1] mt-10 w-[930px] rounded-lg p-10'>
                          <h3 className='font-mulish text-xs text-[#AAAAAA]'>
                          {moment(item?.bookingDate)
                            .format("LLLL")
                            .slice(0, 25)}{" "}
                          -{" "}
                          {item.time.split(":")[0] +
                            ":" +
                            item.time.split(":")[1] +
                            " WIB"}
                          </h3>
                          <div className='flex justify-between pb-10'>
                            <h2 className='font-mulish font-bold text-xl pt-2'>{item?.movieTitle}</h2>
                            <div class="img-history">
                              <img className='w-[60px] h-[50px]' src={item?.picture} alt="cine-logo" />
                            </div>
                          </div>
                          
                          <hr className='border-[#A6BB8D]' />

                          <div className='flex justify-between pt-5'>
                            <Link to={"/TicketResult/" + item.id}>
                              <div className='bg-[#00BA88] border rounded-lg w-[190px] h-[40px] text-xs p-3 font-mulish text-center text-white'>
                                Ticket in active
                              </div>
                            </Link>
                            <Link to={"/TicketResult/" + item.id}>
                              <div className='text-[#AAAAAA] pr-10 font-mulish'>
                                See Details
                              </div>
                            </Link>
                          </div>
                      </div>
                    })}

                </div>

            </div>

            <div> <Footer></Footer> </div>
        </div>
    )
};


export default OrderHistory;