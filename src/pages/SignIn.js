import React  from "react";
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from "react-router-dom"

// import {login as loginAction} from '../redux/reducers/auth';
import {loginAction} from './redux/action/auth'

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const [showAlert, setShowAlert] = React.useState(false);

    const loginReq = (event) => {
        event.preventDefault()
        const { value: email } = event.target.email
        const { value: password } = event.target.password
        dispatch(loginAction({email, password}))
        navigate('/homepage')
    };

    return (
        <div className="grid grid-cols-2">
          {/* Left Side */}
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
                <div className="pt-16 pb-10 pl-20 ">
                    <img 
                    src={require('../assets/images/logo-eastick.png')} 
                    alt="logo" 
                    className="hidden max-[768px]:block max-[768px]:w-[180px] max-[375px]:w-[150px]" />
                </div>
            <div>
                <div className="pl-20 pb-0 font-inter font-semibold text-5xl">Sign In</div>
                <div className="w-4/5 pl-20 pb-0 pt-3 font-inter text-[#AAAAAA] text-lg ">Sign in with your data that you entered during
                    your registration</div>
            </div>

            {/* {showAlert && (<div className="bg-red-400 border border-red-700 rounded w-2/4 h-10 mt-3 ml-20 pl-5 text-center pt-1">
                <span>wrong email or password!</span>
            </div>)} */}

            <form onSubmit={loginReq}>
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
                        <button className="border rounded-2xl bg-[#61876E] hover:bg-[#3C6255] h-12 w-3/4 text-base font-inter text-white " type="submit">Sign In</button>
                    </div>
                    <div  className="flex justify-center items-center flex-col pt-5 pr-20 ">
                        <span className="text-base text-[#8692A6]">Forgot your password ? {" "} <Link to="/Forgotpwd"
                        className="underline underline-offset-4 text-[#61876E] hover:text-[#3C6255] font-medium">Reset Now</Link></span>
                        <span className="text-base text-[#8692A6]">Don't have an account ? {" "} <Link to="/SignUp"
                        className="underline underline-offset-4 text-[#61876E] hover:text-[#3C6255] font-medium">Sign Up</Link></span>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}



export default SignIn;