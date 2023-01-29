import React  from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from "react-router-dom"
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import YupPasword from 'yup-password';
import {loginAction} from './redux/action/auth'
import { Eye, EyeOff } from "react-feather";
YupPasword(Yup);

// Validation Schema Formik
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .password()
    .min(8, 'Min lenght 8')
    .minLowercase(1, 'Min lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minSymbols(1, 'Min symbol 1')
    .minNumbers(1, 'Min number 1')
    .required('Required'),
});

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isloading } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = React.useState(false);

    const loginReq = (value) => {
        dispatch(loginAction({value, cb}))
    };
    
    const cb = () => {
      navigate("/");
    }

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

            {message && (
              <div className="p-4 bg-red-200 border-2 border-red-300 rounded-xl mb-5 text-center">
                {message}
              </div>
            )}

            <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={loginReq}
            validationSchema={LoginSchema}>
              {({errors, touched, dirty}) => (
                <Form>
                  <div className="pl-20 pb-0 pt-12 text-base">
                      <label for="email">Email</label>
                  </div>
                  <div className="pl-20 pb-0 pt-3">
                      <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="email" placeholder="Write your email" />
                        {errors.email && touched.email ? (
                          <div className="text-red-500">{errors.email}</div>
                        ) : null}
                  </div>
                  <div className="pl-20 pb-0 pt-12 text-base">
                      <label for="password">Password</label>
                  </div>
                  <div className="pl-20 pb-0 pt-3">
                      <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type={showPassword ? "text" : "password"} name="password" placeholder="Write your password"
                      />
                      {showPassword ? (
                          <Eye
                            className="absolute right-48 top-[445px]"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <EyeOff
                            className="absolute right-48 top-[445px]"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                      )}
                      {errors.password && touched.password ? (
                        <div className="text-red-500">{errors.password}</div>
                      ) : null}
                  </div>
                      <div className="pl-20 pb-0 pt-12 ">
                            <button 
                            className="border rounded-2xl bg-[#61876E] hover:bg-[#3C6255] h-12 w-3/4 text-base font-inter text-white" 
                            type="submit"
                            // disabled={!dirty || isloading}
                            >
                            Sign In
                            </button>
                      </div>
                      <div  className="flex justify-center items-center flex-col pt-5 pr-20 ">
                          <span className="text-base text-[#8692A6]">Forgot your password ? {" "} <Link to="/Forgotpwd"
                          className="underline underline-offset-4 text-[#61876E] hover:text-[#3C6255] font-medium">Reset Now</Link></span>
                          <span className="text-base text-[#8692A6]">Don't have an account ? {" "} <Link to="/SignUp"
                          className="underline underline-offset-4 text-[#61876E] hover:text-[#3C6255] font-medium">Sign Up</Link></span>
                      </div>
              </Form>
              )}
            </Formik>
            </div>
        </div>
    )
}



export default SignIn;