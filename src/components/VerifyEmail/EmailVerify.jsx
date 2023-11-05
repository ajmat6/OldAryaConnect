import React, {useState} from 'react'
import Layout from '../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { signinCredentials, verifyEmail } from '../../reducers/userAuthReducer';
import {useSelector, useDispatch} from 'react-redux'


const EmailVerify = () => {
    const auth = useSelector((state) => state.auth);
    const mode = useSelector((state) => state.mode)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [otp, setOtp] = useState('')

    const verifyotp = (e) => {
        e.preventDefault();
        console.log("hit")
        const form = {
            otp,
            userId: auth.userInfo._id
        }

        dispatch(verifyEmail(form));
    }

    if(auth.authenticate)
    {
        navigate('/myProfile')
    }

  return (
    <Layout footer>
        <div className='text-white md:flex'>
            <div className='w-[50%] bg-[#8F00FF] h-[92vh] hidden md:block'>
                
            </div>
            <div className='md:w-[50%]'>
                <div className='flex flex-col col-span-1 justify-center items-center md:p-8 mt-8 p-4'>
                    <div className='flext flex-col justify-start md:w-96'>
                        <div className='text-[#4db5ff]'>Hey!</div>
                        <h1 className={`${mode.mode === 'dark' ? 'text-white' : 'text-black'}`}>Verify Email!</h1>
                    </div>

                    <form action="" className='flex flex-col justify-start mt-4 md:w-[376px] w-[298px]'>
                        <div className='w-full'>
                            <div>
                                <label htmlFor="" className='text-gray-500 pb-1 text-sm '>
                                    Enter OTP Recieved on the Entered Email
                                    <strong className='text-red-600 font-normal m-[1px]'>*</strong>
                                </label>
                            </div>
                            <div className='mt-1'>
                                <input type="text" placeholder='Enter OTP' className={`h-14 text-[11px] ${mode.mode === 'dark' ? 'text-white' : 'text-black'}`} value={otp} onChange={(e) => setOtp(e.target.value)}/>
                            </div>
                        </div>

                        <button className='btn btn-primary md:w-[376px] sm:w-[298px]' onClick={verifyotp}>Verify</button>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default EmailVerify