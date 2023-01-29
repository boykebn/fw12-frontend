import React  from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from "react-router-dom"
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import YupPasword from 'yup-password';
import {registerAction} from './redux/action/auth'
import { Eye, EyeOff } from "react-feather";
YupPasword(Yup);

const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNUm: Yup.string()
    .min(10, "Min numbers is 10")
    .max(13, "Max numbers is 13")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .password()
    .min(8, "Min length 8")
    .minLowercase(1, "Min Lowecase 1")
    .minUppercase(1, "Min Uppercase 1")
    .minSymbols(1, "Min Symbols 1")
    .minNumbers(1, "Min Numbers 1")
    .required("Required"),
});

const SignUp = () => {
  const {isloading} = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerHandle = (value) => {
    dispatch(registerAction({value, cb}))
  };

  const cb = () => {
    navigate("/");
  };
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

            {message && (
              <div className="p-4 bg-red-200 border-2 border-red-300 rounded-xl mb-5 text-center">
                {message}
              </div>
            )}

            <Formik 
            initialValues={{
              firstName: "",
              lastName: "",
              phoneNUm: "",
              email: "",
              password: "",
            }}
            validationSchema={signUpSchema}
            onSubmit={registerHandle}
            >
              {({errors, touched, dirty}) => (
              <Form>
              <div className="pl-20 pb-0 pt-12 text-base">
                  <label htmlFor="firstName">First Name</label>
              </div>
              <div className="pl-20 pb-0 pt-3">
                  <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="firstName" placeholder="Write your first name"/>
                  {errors.firstName && touched.firstName ? (
                  <div className="text-red-500">{errors.firstName}</div>
                ) : null}
              </div>
              <div className="pl-20 pb-0 pt-2 text-base">
                  <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="pl-20 pb-0 pt-3">
                  <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="lastName" placeholder="Write your last name"/>
                  {errors.lastName && touched.lastName ? (
                  <div className="text-red-500">{errors.lastName}</div>
                ) : null}
              </div>
              <div className="pl-20 pb-0 pt-2 text-base">
                  <label htmlFor="phoneNum">Phone Number</label>
              </div>
              <div className="pl-20 pb-0 pt-3">
                  <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="phoneNUm" placeholder="Write your phone Number"/>
                  {errors.phoneNUm && touched.phoneNUm ? (
                  <div className="text-red-500">{errors.phoneNUm}</div>
                ) : null}
              </div>
              <div className="pl-20 pb-0 pt-2 text-base">
                  <label htmlFor="email">Email</label>
              </div>
              <div className="pl-20 pb-0 pt-3">
                  <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="email" placeholder="Write your email"/>
                  {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <div className="pl-20 pb-0 pt-2 text-base">
                  <label htmlFor="password">Password</label>
              </div>
              <div className="pl-20 pb-0 pt-3">
                  <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type={showPassword ? "text" : "password"} name="password" placeholder="Write your password"/>
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
              <div>
                  <div className="pl-20 pb-0 pt-5 ">
                      <button 
                      className="border rounded-2xl bg-[#61876E] h-12 w-3/4 text-base font-inter text-white hover:bg-[#3C6255]" 
                      type="submit"
                      // disabled={!dirty || isloading}
                      >
                        Sign Up
                      </button>
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
              </Form>
              )}
            </Formik>
            </div>
        </div>
    )
}



export default SignUp;