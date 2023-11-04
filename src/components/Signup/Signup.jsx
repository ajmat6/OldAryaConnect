import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useSelector, useDispatch } from 'react-redux'
import { signUpCredentials } from '../../reducers/userAuthReducer';
import jwt_decode from 'jwt-decode';

const Signup = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useSelector((state) => state.auth);
    const mode = useSelector((state) => state.mode)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUp = () => {
        const payload = {
            name,
            username,
            email,
            password
        }

        dispatch(signUpCredentials(payload));
    }

    const credentialResponse = (response) => {
        console.log(response)
        const details = jwt_decode(response.credential);
        console.log(details, "details")
        const email = details.email;
        const username = details.email.split('@')[0];
        const name = details.name;
        const password = email + name;

        const payload = {
            name,
            username,
            email,
            password,
        }

        dispatch(signUpCredentials(payload))
    }

    if(auth.authenticate)
    {
        navigate('/notes')
    }

    return (
        <Layout footer>
            <div className='text-white md:flex'>
                <div className='w-[50%] bg-[#8F00FF] h-[92vh] hidden md:block'>

                </div>
                <div className='md:w-[50%]'>
                    <div className='flex flex-col col-span-1 justify-center items-center md:p-8 mt-8 p-4'>
                        <div className='flext flex-col justify-start md:w-96'>
                            <div className='text-[#4db5ff]'>Welcome!</div>
                            <h1 className={`text-[30px] ${mode.mode === 'dark' ? 'text-white' : 'text-black'}`}>Create New Account</h1>
                        </div>

                        <form action="" className='flex flex-col justify-start mt-4 md:w-[376px] w-[298px]'>
                            <div className='w-full'>
                                <div>
                                    <label htmlFor="" className='text-gray-500 pb-1 text-sm '>
                                        Name
                                        <strong className='text-red-600 font-normal m-[1px]'>*</strong>
                                    </label>
                                </div>
                                <div className='mt-1'>
                                    <input type="email" placeholder='Enter your name' className={`h-14 text-[11px] ${mode.mode === 'dark' ? 'text-white' : 'text-black'}`} value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div>
                                    <label htmlFor="" className='text-gray-500 pb-1 text-sm '>
                                        Username
                                        <strong className='text-red-600 font-normal m-[1px]'>*</strong>
                                    </label>
                                </div>
                                <div className='mt-1'>
                                    <input type="email" placeholder='Enter your username' className={`h-14 text-[11px] ${mode.mode === 'dark' ? 'text-white' : 'text-black'}`} value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>

                                <div>
                                    <label htmlFor="" className='text-gray-500 pb-1 text-sm '>
                                        Email
                                        <strong className='text-red-600 font-normal m-[1px]'>*</strong>
                                    </label>
                                </div>
                                <div className='mt-1'>
                                    <input type="email" placeholder='Enter your email' className={`h-14 text-[11px] ${mode.mode === 'dark' ? 'text-white' : 'text-black'}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className='mt-4'>
                                    <label htmlFor="" className='text-gray-500 pb-1 text-sm '>
                                        Password
                                        <strong className='text-red-600 font-normal m-[1px]'>*</strong>
                                    </label>
                                </div>
                                <div className='mt-1'>
                                    <input type="password" placeholder='Enter your password' className={`h-14 text-[11px] ${mode.mode === 'dark' ? 'text-white' : 'text-black'}`} value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>

                            <button className='btn btn-primary md:w-[376px] sm:w-[298px]' onClick={signUp}>Sign Up</button>

                            <div className='flex flex-row justify-between items-center text-[10px] md:w-[376px] w-[298px]'>
                                <div></div>
                                <div className={`${mode.mode === 'dark' ? 'text-white' : 'text-black'}`}>Already have an account? <Link to={'/signin'}>Sign In</Link></div>
                            </div>

                            <p className={`text-[12.5px] md:text-[16px] ${mode.mode === 'dark' ? 'text-white' : 'text-black'}`}>-------------------- or -------------------</p>

                            <div >
                                <GoogleLogin
                                    onSuccess={credentialResponse}
                                    buttonText="Sign up with Google"
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                    style={{ width: '376px' }} className={'w-[298px] md:w-[376px]'}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signup