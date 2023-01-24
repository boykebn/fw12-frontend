import React from "react";

const BorderListCinemas = () => {
    return (
        <div>
            <div className='block font-mulish text-xs pl-3 pt-5'>
                <p className='inline-block w-[60px] pl-3 pb-5'>8.30 am</p>
                <p className='inline-block w-[70px] pl-3 pb-5'>10.30 pm</p>
                <p className='inline-block w-[70px] pl-3 pb-5'>12.00 pm</p>
                <p className='inline-block w-[70px] pl-3 pb-5'>02.00 pm</p>
                <p className='inline-block w-[60px] pl-3 pb-5'>4.30 pm</p>
                <p className='inline-block w-[60px] pl-3 pb-5'>7.00 pm</p>
                <p className='inline-block w-[70px] pl-6 pb-5'>8.30 pm</p>
            </div>
            <div className='flex flex-1 justify-between'>
                <p className='pl-6 font-mulish text-[#6B6B6B] text-sm'>Price</p>
                <p className='pr-6 font-mulish text-sm font-bold'>$10.00/seat</p>
            </div>
            <div className='flex justify-center items-center pt-7'>
                <button className='font-mulish block w-9/12 h-10 bg-[#61876E] hover:bg-[#3C6255] border rounded-lg' type="button">Book Now</button>
            </div>
        </div>
    )
}

export default BorderListCinemas;