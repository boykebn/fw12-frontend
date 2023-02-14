import React from 'react'
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Edit } from "react-feather";
import { logoutAction } from './redux/reducers/auth';
import { useSelector, useDispatch } from 'react-redux';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import http from '../helpers/http';
import * as Yup from 'yup';
import YupPasword from 'yup-password';
import { Field, Form, Formik } from 'formik';
YupPasword(Yup);


// Form Validation
const changePasswordSchema = Yup.object().shape({
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


const ProfilePage = () => {

  const dispatch = useDispatch();

  // Logout action
  // const handleLogout = () => {
  //   dispatch(logoutAction());
  // };

  // handle get data Profile

  const [getProfile, setGetProfile] = React.useState({});
  const token = useSelector(state => state.auth.token);

  const getDataProfile = async () => {
    try {
      const response = await http(token).get('/profile');
      setGetProfile(response?.data?.results);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  React.useEffect(() => {
    if (token) {
      getDataProfile();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);



  // handle update data profile
  const [successMessage, setSuccessMessage] = React.useState('');

  const updateDataUser = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const phoneNUm = e.target.phoneNUm.value;

    try {
      const form = new FormData();
      form.append("firstName", firstName)
      form.append("lastName", lastName)
      form.append("email", email)
      form.append("phoneNUm", phoneNUm)

      const { data } = await http(token).patch('/profile/updated', form);

      setSuccessMessage('Data succes updated!');
      setTimeout(() => {
        setSuccessMessage(false)
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  // handle change password

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [passwordMsgSuccess, setPasswordMsgSuccess] = React.useState('');
  const [samePasswordMessage, setSamePasswordMessage] = React.useState('');


  const changeUpdatePassword = async (value) => {
    
    try {
      if (value.password === value.confirmPassword) {
        const password  = value.password;
        console.log(password)
        const response = await http(token).patch('/profile/updated', {
          password,
        });
        setPasswordMsgSuccess('Password succes updated!');
        setTimeout(() => {
          setPasswordMsgSuccess(false)
        }, 2000);
        return response;
      } else {
        setSamePasswordMessage('Password and confirm password not match');
        setTimeout(() => {
          setSamePasswordMessage(false)
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };


  // handle upload photo

  const [msgSuccessUpload, setMsgSuccessUpload] = React.useState("");
  const [msgErrorUpload, setMsgErrorUpload] = React.useState("");

  const uploadPhoto = async (e) => {
    try {
      const file = e.target.files[0];
      if(file.size > 2000000){
        setMsgSuccessUpload('')
        return setMsgErrorUpload('Maximum file size 2MB')
      }
      const form = new FormData();
      form.append("picture", file);
      const { data } = await http(token).patch("/profile/updated", form);
      setMsgSuccessUpload('Photo profile updated')
      setMsgErrorUpload('')
    } catch (error) {
      console.log(error);
      setMsgErrorUpload(error)
      setMsgSuccessUpload('')
    }
  };

    return (
        <div>
            <div> <Header2></Header2> </div>

            <div className='bg-[#61876E] grid grid-cols-[440px_minmax(1000px,_1fr)_100px] gap-10'>

                <div className='pt-14 pl-28'>
                    <div className='bg-[#EAE7B1] w-[328px] h-[430px] rounded-lg p-10'>
                        <p className='font-mulish'>INFO</p>

                        <div className='flex justify-center items-center'>
                          {getProfile?.picture ? (
                            <img src={getProfile?.picture} alt="profile" className='rounded-full w-[100px] h-[100px]' />
                          ) : (
                            <img src={require('../assets/images/dummyAvatar.jpg')} className="rounded-full w-[100px]" alt="profile" />
                          )}
                        </div>

                        <div className="flex gap-2 items-center justify-center">
                          <label htmlFor="picture" className="hover:cursor-pointer absolute left-[295px] top-[335px]">
                            <Edit className="text-sm w-[20px] h-[20px] bg-[#3C6255] text-[#EAE7B1] rounded" />
                          </label>
                          <input className="hidden" type="file" onChange={uploadPhoto} name="picture" id="picture" />
                        </div>

                        <div className='flex justify-center items-center font-bold'> {getProfile?.firstName} {getProfile?.lastName}</div>
                        <div className='flex justify-center items-center font-mulish text-sm text-[#4E4B66] pt-2 pb-10'>Eastick People</div>

                        <hr className='border-[#A6BB8D]' />

                        <div className='pt-5 flex justify-center'>
                            <button onClick={() => dispatch(logoutAction())} className='border rounded-lg w-[187px] h-[46px] hover:bg-[#61876E] bg-[#A6BB8D]' type='button'>Log Out</button>
                        </div>

                        {msgSuccessUpload && (
                          <div className="alert alert-success shadow-lg mt-5">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{msgSuccessUpload}</span>
                            </div>
                          </div>
                        )}

                        {msgErrorUpload && (
                          <div className="alert alert-error shadow-lg mt-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{msgErrorUpload}</span>
                          </div>
                        </div>
                        )}
                    </div>
                </div>


                <div className='pt-14'>

                    <div className='bg-[#EAE7B1] w-[930px] h-[84px] rounded pl-8 pt-7'>
                        <div className='flex '>
                            <div className='border-b-2 border-[#A6BB8D] pb-6 font-bold'>Account Settings</div>
                            <div className='pl-10'>
                                <Link to="/OrderHistory">Order History</Link>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#EAE7B1] mt-10 w-[930px] rounded-lg p-10'>
                        <p className='font-mulish pb-3'>Details Information</p>
                        <hr className='border-[#A6BB8D]' />

                        <form onSubmit={updateDataUser} className='pt-5'>
                          {successMessage && 
                            <div className="flex justify-center items-center p-4 ml-20 mt-5 h-5 w-[320px] bg-yellow-200 border-2 border-red-300 rounded-xl">
                              {successMessage}
                            </div> 
                          }
                            <div className='inline-block '>
                                <label className='block pb-2' for="firstName">First Name</label>
                                <input className='border  w-[300px] h-[40px] rounded pl-2' type="text" name="firstName" placeholder={getProfile?.firstName}/>
                            </div>

                            <div className='inline-block pl-5'>
                                <label className='block pb-2' for="lastName">Last Name</label>
                                <input className='border w-[300px] h-[40px] rounded pl-2' type="text" name="lastName" placeholder={getProfile?.lastName}/>
                            </div>

                            <div className='inline-block pt-3'>
                                <label className='block pb-2' for="email">Email</label>
                                <input className='border w-[300px] h-[40px] rounded pl-2' type="text" name="email" placeholder={getProfile?.email}/>
                            </div>

                            <div className='inline-block pl-5'>
                                <label className='block pb-2' for="phoneNum">Phone Number</label>
                                <div className='border w-[300px] h-[40px] rounded p-2 bg-white'>
                                    <input className='w-[40px] border-r-2' type="text" placeholder="+62"/>
                                    <input className='pl-2' type="text" name="phoneNUm" placeholder={getProfile?.phoneNUm}/>
                                </div>
                            </div>

                            <div className='pt-5'>
                                <button  className='border rounded-lg w-[320px] h-[46px] bg-[#61876E] hover:bg-[#A6BB8D]' type='submit'>Update changes</button>
                            </div>

                        </form>
                    </div>


                    <div className='bg-[#EAE7B1] mt-10 w-[930px] rounded-lg p-10 mb-10'>
                    <p className='font-mulish pb-3'>Account and Privacy</p>
                    <hr className='border-[#A6BB8D]' />
                    <div className='pt-5'>
                      <Formik
                      initialValues={{password: '', confirmPassword: ''}}
                      validationSchema={changePasswordSchema}
                      onSubmit={changeUpdatePassword}
                      >
                        {({errors, touched}) => (
                        <Form className='flex flex-col'>
                          {passwordMsgSuccess &&
                            <div className="flex justify-center items-center p-4 ml-20 mt-5 h-5 w-[320px] bg-yellow-200 border-2 border-red-300 rounded-xl">
                            {passwordMsgSuccess}
                            </div>
                          }

                          {samePasswordMessage && 
                            <div className="flex justify-center items-center p-4 ml-20 mt-5 h-5 w-[350px] bg-red-200 border-2 border-red-300 rounded-xl">
                            {samePasswordMessage}
                            </div>
                          }
                            <div class="privacy-content1">
                                <label className='block' for="Nwpassword">New Password</label>
                                <Field className='border w-[300px] h-[40px] rounded pl-2' type={showPassword ? "text" : "password"} name="password" placeholder="Write your password"/>
                                {showPassword ? (
                                  <Eye
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-[836px] right-[715px]"
                                  />
                                ) : (
                                  <EyeOff
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-[836px] right-[715px]"
                                  />
                                )}
                                {errors.password && touched.password ? (
                                  <div className="text-red-500">{errors.password}</div>
                                ) : null}
                            </div>
                            <div className='pt-5'>
                                <label className='block' for="confirm-pwd">Confirm Password</label>
                                <Field className='border w-[300px] h-[40px] rounded pl-2' type={showPassword ? "text" : "password"} name="confirmPassword" placeholder="Write your confirm password"/>
                                {showPassword2 ? (
                                  <Eye
                                    onClick={() => setShowPassword2(!showPassword2)}
                                    className="absolute top-[836px] right-[390px]"
                                  />
                                ) : (
                                  <EyeOff
                                    onClick={() => setShowPassword2(!showPassword2)}
                                    className="absolute top-[836px] right-[390px]"
                                  />
                                )}

                                {errors.confirmPassword && touched.confirmPassword ? (
                                  <div className="text-red-500">
                                    {errors.confirmPassword}
                                  </div>
                                ) : null}
                            </div>

                          <div className='pt-5 pb-5'>
                              <button className='border rounded-lg w-[320px] h-[46px] bg-[#61876E] hover:bg-[#A6BB8D]' type='submit'>Update changes</button>
                          </div>
                        </Form>
                        )}
                      </Formik>
                    </div>
                </div>
                </div>

            </div>

            <div> <Footer></Footer> </div>
        </div>
    )
};


export default ProfilePage;