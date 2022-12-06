import React  from "react";
// import images from '../assets/images/

const SignIn = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="h-screen bg-background bg-cover">
                <div className="bg-[#E97777]/50 w-full h-full">
                    <div className="h-screen flex justify-center items-center flex-col">
                        <div>
                            <img src={require('../assets/images/logo.png')} alt="logo"/>
                        </div>
                        <div className="text-5xl text-white font-inter">wait, watch, wow!</div>
                    </div>
                </div>
            </div>

            <div className="">
            <div>
                <h2>Sign In</h2>
                <p>Sign in with your data that you entered during
                    your registration</p>
            </div>
            <form >
                <div>
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Write your email"/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Write your password"/>
                </div>
                <div>
                    <button type="submit">Sign In</button>
                    <div>
                        <span>Forgot your password ? <a href="forgotpwd.html">Reset Now</a></span>
                    </div>
                    <div>
                        <span>Don't have an account ? <a href="signup.html">Sign Up</a></span>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}



export default SignIn;