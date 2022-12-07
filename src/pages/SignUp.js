import React  from "react";
// import images from '../assets/images/

const SignUp = () => {
    return (
        <div className="grid grid-cols-2 gap-44">
            <div className="w-[50rem] h-screen bg-background bg-cover">
                <div className="bg-[#E97777]/50 w-full h-full">
                    <div className="h-screen flex justify-center items-center flex-col">
                        <div>
                            <img src={require('../assets/images/logo1.png')} alt="logo"/>
                        </div>
                        <div className="text-5xl text-white font-inter">wait, watch, wow!</div>
                    </div>
                </div>
            </div>

            <div className="">
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
                <div className="pl-20 pb-0 pt-12 text-base">
                    <label for="lname">Last Name</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="lname" id="lname" placeholder="Write your last name"/>
                </div>
                <div className="pl-20 pb-0 pt-12 text-base">
                    <label for="phoneNum">Phone Number</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="phoneNum" id="phoneNum" placeholder="Write your phone Number"/>
                </div>
                <div className="pl-20 pb-0 pt-12 text-base">
                    <label for="email">Email</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="email" id="email" placeholder="Write your email"/>
                </div>
                <div className="pl-20 pb-0 pt-12 text-base">
                    <label for="password">Password</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="password" name="password" id="password" placeholder="Write your password"/>
                </div>
                <div>
                    <div className="pl-20 pb-0 pt-12 ">
                        <button className="border rounded-2xl bg-[#E97777] h-12 w-3/4 text-base font-inter text-white " type="submit">Sign In</button>
                    </div>
                    <div  className="pl-44 pb-0 pt-7 ">
                        <span className="text-base text-[#8692A6]">Already have Account ? <a href="forgotpwd.html">Sign In</a></span>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}



export default SignUp;