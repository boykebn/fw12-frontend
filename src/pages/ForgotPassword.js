import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import YupPasword from 'yup-password';
import http from '../helpers/http'
import {setEmail} from "./redux/reducers/auth"
YupPasword(Yup);

const forgotSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});


const Forgotpwd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);
  const [succesMessage, setSuccesMessage] = React.useState("");
  const [failedMessage, setFailedMessage] = React.useState("");


  const handleForgotPwd = async (value) => {
    try {
      const {email} = value;
      setIsLoading(true);
      const data  = await http().post('/auth/forgotPassword', {email});
      dispatch(setEmail(email))
      console.log('masuk')
      setSuccesMessage('Request Succes, Please Chek your Email.');
      setIsLoading(false);
      setTimeout(() => {
        navigate('/Resetpwd');
        setSuccesMessage("");
      }, 2000)
    } catch (error) {
      setFailedMessage("User Not Found");
    }
  };

  const reqForgotPwd = (value) => {
    handleForgotPwd(value);
  }
    return (
        <div className="grid grid-cols-2">
            {/* Left Side */}
            <div className=" max-[768px]:hidden">
                <div className="w-full h-full bg-background bg-cover relative">
                    <div className="bg-[#61876E]/50 w-full h-full">
                        <div className="h-screen flex-col pl-20 pt-20">
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
                <div className="pl-20 pb-0 py-20 font-inter font-semibold text-4xl">Fill your complete email</div>
                <div className="w-4/5 pl-20 pb-0 pt-3 font-inter text-[#AAAAAA] text-lg ">we'll send a link to your email shortly</div>
            </div>

            {succesMessage && (
              <div className="flex justify-center items-center h-12 w-[300px] ml-20 bg-green-200 border-2 border-green-300 rounded-xl">
                {succesMessage}
              </div>
            )}

            {failedMessage && (
              <div className="flex justify-center items-center h-12 w-[300px] ml-20 mt-2   bg-red-200 border-2 border-red-300 rounded-xl">
                {failedMessage}
              </div>
            )}

            <Formik 
              initialValues={{email: ''}}
              validationSchema={forgotSchema}
              onSubmit={reqForgotPwd}
              >
                {({errors, touched, dirty}) => (
                  <Form >
                <div className="pl-20 pb-0 pt-12 text-base">
                      <label htmlFor="email">Email</label>
                  </div>
                  <div className="pl-20 pb-0 pt-3">
                      <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="email" placeholder="Write your email" />
                        {errors.email && touched.email ? (
                          <div className="text-red-500">{errors.email}</div>
                        ) : null}
                  </div>
                <div>
                    <div className="pl-20 pb-0 pt-12 ">
                        <button 
                        className={`${ isLoading && "btn loading"} border rounded-2xl bg-[#61876E] hover:bg-[#3C6255] h-12 w-3/4 text-base font-inter text-white`} 
                        type="submit"
                        disabled={!dirty || isLoading}
                        >
                          Submit
                          </button>
                    </div>
                </div>
                </Form>
                )}
            </Formik>
            
            </div>
        </div>
    )
};


export default Forgotpwd;