import React from 'react'
import { Form, Link } from 'react-router-dom';
import { Eye, EyeOff } from "react-feather";
import { logoutAction } from './redux/reducers/auth';
import { useSelector, useDispatch } from 'react-redux';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import http from '../helpers/http';
import * as Yup from 'yup';
import YupPasword from 'yup-password';
import { Field, Formik } from 'formik';
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

  // get data Profile
  const [getProfile, setGetProfile] = React.useState({});
  // console.log(`https://192.168.1.9:8888/assets/uploads/${getProfile?.picture}`);
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

  // update data profile
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  // const firstName = String(fullName).split(' ')[0];
  // const lastName = String(fullName).split(' ').slice(1).join(' ');
  const [email, setEmail] = React.useState('');
  const [phoneNUm, setPhoneNUm] = React.useState('');

  const [successMessage, setSuccessMessage] = React.useState('');

  const updateDataUser = async () => {
    try {
      const response = await http(token).patch('/profile/updated', {
        firstName,
        lastName,
        email,
        phoneNUm,
      });
      setSuccessMessage('Data succes updated!');
      setTimeout(() => {}, 2000);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // change password

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [passwordMsgSuccess, setPasswordMsgSuccess] = React.useState('');
  const [samePasswordMessage, setSamePasswordMessage] = React.useState('');
  const changeUpdatePassword = async values => {
    try {
      if (values.password === values.confirmPassword) {
        const {password, confirmPassword} = values;
        const response = await http(token).patch('/profile/updated', {
          password,
          confirmPassword,
        });
        setPasswordMsgSuccess('Password succes updated!');
        setTimeout(() => {}, 2000);
        return response;
      } else {
        setSamePasswordMessage('Password and confirm password not match');
      }
    } catch (error) {
      console.log(error);
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
                            <img src={getProfile?.picture} alt="profile" />
                        </div>
                        <div className='flex justify-center items-center font-bold'> {getProfile?.firstName} {getProfile?.lastName}</div>
                        <div className='flex justify-center items-center font-mulish text-sm text-[#4E4B66] pt-2 pb-10'>Eastick People</div>
                        <hr className='border-[#A6BB8D]' />
                        <div className='pt-5 flex justify-center'>
                            <button onClick={() => dispatch(logoutAction())} className='border rounded-lg w-[187px] h-[46px] hover:bg-[#61876E] bg-[#A6BB8D]' type='button'>Log Out</button>
                        </div>
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
                        <form className='pt-5'>
                            <div className='inline-block '>
                                <label className='block pb-2' for="fname">First Name</label>
                                <input onChange={value => setFirstName(value)} className='border  w-[300px] h-[40px] rounded pl-2' type="text" name="firstName" placeholder={getProfile?.firstName}/>
                            </div>
                            <div className='inline-block pl-5'>
                                <label className='block pb-2' for="lname">Last Name</label>
                                <input onChange={value => setLastName(value)} className='border w-[300px] h-[40px] rounded pl-2' type="text" name="lastName" placeholder={getProfile?.lastName}/>
                            </div>
                            <div className='inline-block pt-3'>
                                <label className='block pb-2' for="email">Email</label>
                                <input onChange={value => setEmail(value)} className='border w-[300px] h-[40px] rounded pl-2' type="text" name="email" placeholder={getProfile?.email}/>
                            </div>
                            <div className='inline-block pl-5'>
                                <label className='block pb-2' for="phone-numb">Phone Number</label>
                                <div className='border w-[300px] h-[40px] rounded p-2 bg-white'>
                                    <input className='w-[40px] border-r-2' type="text" name="phoneNUm" placeholder="+62"/>
                                    <input onChange={value => setPhoneNUm(value)} className='pl-2' type="text" name="phoneNUm" placeholder={getProfile?.phoneNUm}/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='pt-5'>
                        <button onSubmit={updateDataUser} className='border rounded-lg w-[320px] h-[46px] bg-[#EAE7B1] hover:bg-[#A6BB8D]' type='button'>Update changes</button>
                    </div>

                    <div className='bg-[#EAE7B1] mt-10 w-[930px] rounded-lg p-10'>
                    <p className='font-mulish pb-3'>Account and Privacy</p>
                    <hr className='border-[#A6BB8D]' />
                    <div className='pt-5'>
                      <Formik
                      initialValues={{password: '', confirmPassword: ''}}
                      validationSchema={changePasswordSchema}
                      onSubmit={changeUpdatePassword}
                      >
                        {({errors, touched}) => (
                        <Form className='flex'>
                            <div class="privacy-content1">
                                <label className='block' for="Nwpassword">New Password</label>
                                <Field className='border w-[300px] h-[40px] rounded pl-2' type="password" name="password" placeholder="Write your password"/>
                                {showPassword ? (
                                  <Eye
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-[50px] right-[10px]"
                                  />
                                ) : (
                                  <EyeOff
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-[50px] right-[10px]"
                                  />
                                )}
                                {errors.password && touched.password ? (
                                  <div className="text-red-500">{errors.password}</div>
                                ) : null}
                            </div>
                            <div className='pl-5'>
                                <label className='block' for="confirm-pwd">Confirm Password</label>
                                <Field className='border w-[300px] h-[40px] rounded pl-2' type="password" name="confirmPassword" placeholder="Write your confirm password"/>
                                {showPassword2 ? (
                                  <Eye
                                    onClick={() => setShowPassword2(!showPassword2)}
                                    className="absolute top-[50px] right-[10px]"
                                  />
                                ) : (
                                  <EyeOff
                                    onClick={() => setShowPassword2(!showPassword2)}
                                    className="absolute top-[50px] right-[10px]"
                                  />
                                )}

                                {errors.confirmPassword && touched.confirmPassword ? (
                                  <div className="text-red-500">
                                    {errors.confirmPassword}
                                  </div>
                                ) : null}
                            </div>

                          <div className='pt-5 pb-5'>
                              <button className='border rounded-lg w-[320px] h-[46px] bg-[#EAE7B1] hover:bg-[#A6BB8D]' type='submit'>Update changes</button>
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