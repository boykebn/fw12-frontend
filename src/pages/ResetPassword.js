import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Eye, EyeOff } from "react-feather";
import http from '../helpers/http'
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import YupPasword from 'yup-password';
YupPasword(Yup);

// Form Validation
const ResetPasswordSchema = Yup.object().shape({
  codeUnique: Yup.string().required("Code is required"),
  password: Yup.string()
    .password()
    .min(8, 'Min lenght 8')
    .minLowercase(1, 'Min lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minSymbols(1, 'Min symbol 1')
    .minNumbers(1, 'Min number 1')
    .required('Required'),
  confirmPassword: Yup.string().required('Required'),
});

const Resetpwd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);
  const [succesMessage, setSuccesMessage] = React.useState("");
  const [failedMessage, setFailedMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const email = useSelector((state) => state.auth.email.email);
  console.log(email)

  const handleResetPwd = async (form) => {
    try {
      if (form.password === form.confirmPassword) {
        const {codeUnique, password, confirmPassword} = form;
        setIsLoading(true);
        const {data} = await http().post('/auth/resetPassword', {
          email,
          codeUnique,
          password,
          confirmPassword,
        });
        setSuccesMessage('Password has been updated, please relogin');
        setIsLoading(false);
        setTimeout(() => {
          navigate('/Signin');
          setSuccesMessage("");
        }, 2000)
      } else {
        setFailedMessage('Password and confirm password not match');
      }
    } catch (error) {
      setFailedMessage(error?.response?.data?.message);
    }
  };

  const reqResetPwd = (value) => {
    handleResetPwd(value);
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
                <div className="pl-20 pb-0 py-20 font-inter font-semibold text-4xl">Fill your complete password</div>
                <div className="w-4/5 pl-20 pb-0 pt-3 font-inter text-[#AAAAAA] text-lg ">set your new password</div>
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
              initialValues={{
                codeUnique: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={ResetPasswordSchema}
              onSubmit={reqResetPwd}
              >
                {({errors, touched, dirty}) => (
                  <Form >
                <div className="pl-20 pb-0 pt-12 text-base">
                    <label for="code">Code</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="text" name="codeUnique" placeholder="Write your code"/>
                    {errors.codeUnique && touched.codeUnique ? (
                          <div className="text-red-500">{errors.codeUnique}</div>
                        ) : null}
                </div>
                <div className="pl-20 pb-0 pt-8 text-base">
                    <label for="password">Password</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="password" name="password" placeholder="Write your password"/>
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
                <div className="pl-20 pb-0 pt-8 text-base">
                    <label for="confirmPassword">Confirm Password</label>
                </div>
                <div className="pl-20 pb-0 pt-3">
                    <Field className="border border-[#DEDEDE] rounded-2xl h-12 w-3/4 pl-5" type="confirmPassword" name="confirmPassword" placeholder="Write your confirm password"/>
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
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <div className="text-red-500">{errors.confirmPassword}</div>
                      ) : null}
                </div>
                <div>
                    <div className="pl-20 pb-0 pt-8 ">
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


export default Resetpwd;