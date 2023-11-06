import React, {useState} from 'react'
import Layout from '../../Layout/Layout'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { forgotPassword, resetPassword, signinCredentials, verifyEmail } from '../../../reducers/userAuthReducer';
import {useSelector, useDispatch} from 'react-redux'


const ForgotPasswordUser = () => {
    const auth = useSelector((state) => state.auth);
    const mode = useSelector((state) => state.mode)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');

    const params = useParams();
    // console.log(params.token, params.userId, params.token.split('=')[1], params.userId.split('=')[1])
    const token = params.token.split('=')[1];
    const userId = params.userId.split('=')[1]

    const forgotPasswordd = (e) => {
        e.preventDefault();
        if(password !== confirmPassword)
        {
            // show some message:
        }

        else
        {
            const form = {
                token, userId, password
            }

            dispatch(resetPassword(form));
        }
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
                        <div className='text-[#4db5ff]'>Hey! this time</div>
                        <h1 className={`${mode.mode === 'dark' ? 'text-white' : 'text-black'}`}>Memorize it OK!</h1>
                    </div>

                    <form action="" className='flex flex-col justify-start mt-4 md:w-[376px] w-[298px]'>
                        <div className='w-full'>
                            <div>
                                <label htmlFor="" className='text-gray-500 pb-1 text-sm '>
                                    Enter New Password
                                    <strong className='text-red-600 font-normal m-[1px]'>*</strong>
                                </label>
                            </div>
                            <div className='mt-1'>
                                <input type="password" placeholder='Enter Passoword' className={`h-14 text-[11px] ${mode.mode === 'dark' ? 'text-white' : 'text-black'}`} value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div>
                                <label htmlFor="" className='text-gray-500 pb-1 text-sm '>
                                    Add One More Time (So that you remember it well!)
                                    <strong className='text-red-600 font-normal m-[1px]'>*</strong>
                                </label>
                            </div>
                            <div className='mt-1'>
                                <input type="password" placeholder='Confirm Passoword' className={`h-14 text-[11px] ${mode.mode === 'dark' ? 'text-white' : 'text-black'}`} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>
                        </div>
                        <button className='btn btn-primary md:w-[376px] sm:w-[298px]' onClick={forgotPasswordd}>Set Password</button>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default ForgotPasswordUser