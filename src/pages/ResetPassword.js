import React from 'react'


const Resetpwd = () => {
    return (
        <div className="grid grid-cols-2">
            {/* Left Side */}
            <div className=" max-[768px]:hidden">
                <div className="w-full h-full bg-background bg-cover relative">
                    <div className="bg-[#61876E]/50 w-full h-full">
                        <div className="h-screen flex-col pl-20 pt-20">
                            {/* <div className="pt-28">
                                <img src={require('../assets/images/logo-eastick.png')} alt="logo" width="600" height="600"/>
                            </div>
                            <div className="text-5xl text-white font-inter">order, watch, well!</div> */}
                            <div className="mb-2.5">
                                <img 
                                  src={require('../assets/images/logo-eastick.png')} 
                                  alt="logo" 
                                  width="200"
                                  height="200"/>
                            </div>  
                            <div className="font-bold text-4xl leading-10	mb-[20px] pt-10">
                            Lets reset your password
                            </div>
                            <div className="leading-8	font-normal	text-2xl mb-[20px]">
                              To be able to use your account again, please complete the
                              following steps.
                            </div>
                            <div className="text-black font-bold pt-20">
                              <div className="flex items-center text-2xl mt-8 relative">
                                <div className="bullet flex items-center justify-center mr-12 border-2 border-black rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-black after:absolute after:bottom-[-33px] bg-[#3C6255]">
                                  1
                                </div>
                                <p>Fill your complete email</p>
                              </div>
                              <div className="flex items-center text-2xl mt-8 relative">
                                <div className="bullet flex items-center justify-center mr-12 border-2 border-black rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-black after:absolute after:bottom-[-33px]">
                                  2
                                </div>
                                <p>Check your email</p>
                              </div>
                              <div className="flex items-center text-2xl mt-8 relative">
                                <div className="bullet flex items-center justify-center mr-12 border-2 border-black rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-black after:absolute after:bottom-[-33px]">
                                  3
                                </div>
                                <p>Enter your new password</p>
                              </div>
                              <div className="flex items-center text-2xl mt-8">
                                <div className="bullet flex items-center justify-center mr-12 border-2 border-black rounded-full w-12 h-12">
                                  4
                                </div>
                                <p>Done</p>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="max-[768px]:w-screen max-[768px]:py-[50px] max-[375px]:pt-[15px]">
                <div className="pt-16 pb-10 pl-20 ">
                    <img 
                    src={require('../assets/images/logo-eastick.png')} 
                    alt="logo" 
                    className="hidden max-[768px]:block max-[768px]:w-[180px] max-[375px]:w-[150px]" />
                </div>
            <div>
                <div className="pl-20 pb-0 py-20 font-inter font-semibold text-4xl">Fill your complete password</div>
                <div className="w-4/5 pl-20 pb-0 pt-3 font-inter text-[#AAAAAA] text-lg ">set your new password</div>
            </div>
            <form >
                <div className="pl-20 pb-0 pt-12 text-base">
                    <label for="code">Code</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="code" id="code" placeholder="Write your code"/>
                </div>
                <div className="pl-20 pb-0 pt-8 text-base">
                    <label for="password">Password</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="password" name="password" id="password" placeholder="Write your password"/>
                </div>
                <div className="pl-20 pb-0 pt-8 text-base">
                    <label for="confirmPassword">Confirm Password</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <input className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="confirmPassword" name="confirmPassword" id="confirmPassword" placeholder="Write your confirm password"/>
                </div>
                <div>
                    <div className="pl-20 pb-0 pt-8 ">
                        <button className="border rounded-2xl bg-[#61876E] hover:bg-[#3C6255] h-12 w-3/4 text-base font-inter text-white " type="submit">Submit</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
};


export default Resetpwd;