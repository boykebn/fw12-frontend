import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import http from "../helpers/http";
import jwt_decode from "jwt-decode";

const BorderListCinemas = () => {
  const token = useSelector((state) => state.auth.token);
  const { id } = jwt_decode(token);
  const { id: getId } = useParams();



  const [selectDate, setSelectDate] = React.useState("");
  const [selectCity, setSelectCity] = React.useState("");
  const [selectTime, setSelectTime] = React.useState(null);
  const [selectCinema, setSelectCinema] = React.useState(null);
  //FETCHING CINEMA
  const [cinema, setCinema] = React.useState([]);
  // console.log(cinema)

  const fetchCinema = async () => {
    try {
      const response = await http(token).get(
        `/movieDetails/${getId}/schedules?date=${selectDate}&city=${selectCity}`
      );
      console.log(response)
      setCinema(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    fetchCinema();
  }, [selectCity, selectDate]);

   //handle select time
  const handleSelectTime = (item, cinemaId) => {
    setSelectTime(item);
    setSelectCinema(cinemaId);
  };
    return (
        <div>
            {/* <div className='block font-mulish text-xs pl-3 pt-5'>
                <p className='inline-block w-[60px] pl-3 pb-5'>8.30 am</p>
                <p className='inline-block w-[70px] pl-3 pb-5'>10.30 pm</p>
                <p className='inline-block w-[70px] pl-3 pb-5'>12.00 pm</p>
                <p className='inline-block w-[70px] pl-3 pb-5'>02.00 pm</p>
                <p className='inline-block w-[60px] pl-3 pb-5'>4.30 pm</p>
                <p className='inline-block w-[60px] pl-3 pb-5'>7.00 pm</p>
                <p className='inline-block w-[70px] pl-6 pb-5'>8.30 pm</p>
            </div> */}
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
            {cinema?.time.map((item, index) => (
                    <button
                      onClick={() => handleSelectTime(item, cinema.id)}
                      key={String(index)}
                      className={
                        selectTime === item && selectCinema === cinema.id
                          ? "text-[#C539B4] font-bold"
                          : "text-black font-light text-base"
                      }
                    >
                      {item.split(":")[0] + ":" + item.split(":")[1] + " WIB"}
                    </button>
                  ))}
            </div>
            <div className='flex flex-1 justify-between'>
                <p className='pl-6 font-mulish text-[#6B6B6B] text-sm'>Price</p>
                <p className='pr-6 font-mulish text-sm font-bold'>$10.00/seat</p>
            </div>
            <div className='flex justify-center items-center pt-7'>
              <Link to="/OrderPage">
                <button className='font-mulish block w-9/12 h-10 bg-[#61876E] w-[200px] hover:bg-[#3C6255] border rounded-lg' type="button">Book Now</button>
              </Link>
            </div>
        </div>
    )
}

export default BorderListCinemas;