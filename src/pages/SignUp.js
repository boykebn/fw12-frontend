import React  from "react";
import { Link } from "react-router-dom";
// import images from '../assets/images/

const SignUp = () => {
    return (
        <div className="grid grid-cols-2">
          {/* left Side */}
            <div className=" max-[768px]:hidden">
                <div className="w-full h-full bg-background bg-cover relative">
                    <div className="bg-[#61876E]/50 w-full h-full">
                        <div className="h-screen flex justify-center items-center flex-col">
                            <div className="pt-28">
                                <img src={require('../assets/images/logo-eastick.png')} alt="logo" width="600" height="600"/>
                            </div>
                            <div className="text-5xl text-white font-inter">order, watch, well!</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Right Side */}
            <div className="max-[768px]:w-screen max-[768px]:py-[50px] max-[375px]:pt-[15px]">
                <div className="pt-16 pl-20">
                    <img 
                    src={require('../assets/images/logo-eastick.png')} 
                    alt="logo" 
                    className="hidden max-[768px]:block max-[768px]:w-[180px] max-[375px]:w-[150px]" />
                </div>
            <div>
                <div className="pl-20 pb-0 py-20 font-inter font-semibold text-5xl">Sign Up</div>
                <div className="w-4/5 pl-20 pb-0 pt-3 font-inter text-[#AAAAAA] text-lg ">Fill your additional details</div>
            </div>
            <form >
                <div className="pl-20 pb-0 pt-12 text-base">
                    <label for="fname">First Name</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="fname" id="fname" placeholder="Write your first name"/>
                </div>
                <div className="pl-20 pb-0 pt-2 text-base">
                    <label for="lname">Last Name</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="lname" id="lname" placeholder="Write your last name"/>
                </div>
                <div className="pl-20 pb-0 pt-2 text-base">
                    <label for="phoneNum">Phone Number</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="phoneNum" id="phoneNum" placeholder="Write your phone Number"/>
                </div>
                <div className="pl-20 pb-0 pt-2 text-base">
                    <label for="email">Email</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="email" id="email" placeholder="Write your email"/>
                </div>
                <div className="pl-20 pb-0 pt-2 text-base">
                    <label for="password">Password</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="password" name="password" id="password" placeholder="Write your password"/>
                </div>
                <div>
                    <div className="pl-20 pb-0 pt-5 ">
                        <button className="border rounded-2xl bg-[#61876E] h-12 w-3/4 text-base font-inter text-white hover:bg-[#3C6255]" type="submit">Sign Up</button>
                    </div>
                    <div className="pb-5 pt-7 pr-16 flex justify-center items-center">
                        <span className="text-base text-[#8692A6]">Already have Account ? {" "}
                        <Link 
                        to="/Signin"
                        className="underline underline-offset-4 text-[#61876E] hover:text-[#3C6255] font-medium">
                          Sign In
                          </Link>
                        </span>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}



export default SignUp;