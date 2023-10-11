import React, {useState} from 'react'
import './profile.css'
import Me from '../../assets/myphoto.jpg'
import { FaAward } from 'react-icons/fa'
import { IoSchoolOutline } from 'react-icons/io5'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserInfo } from '../../reducers/userAuthReducer'
// import Links from '../Links/Links'

function UserProfile() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [username, setUsername] = useState(auth.userInfo.username);
    const [name, setName] = useState(auth.userInfo.name);
    const [gender, setGender] = useState(auth.userInfo.gender);
    const [email, setEmail] = useState(auth.userInfo.email);
    const [contact, setContact] = useState(auth.userInfo.contact);

    const [editPValue, setEditPValue] = useState('Edit')
    const [editP, setEditP] = useState(false)

    const [editEmailValue, setEditEmailValue] = useState('Edit')
    const [editEmail, setEditEmail] = useState(false)

    const [editMobileValue, setEditMobileValue] = useState('Edit')
    const [editMobile, setEditMobile] = useState(false)

    const [showPersonal, setShowPersonal] = useState(true);
    const [showAddress, setShowAddress] = useState(false);


    const editPersonal = () => {
        if (editPValue === 'Edit') {
            setEditPValue('Cancel');
            setEditP(true)
        }
        else {
            setEditPValue('Edit');
            setEditP(false)
        }
    }

    const editEmailAction = () => {
        if (editEmailValue === 'Edit') {
            setEditEmailValue('Cancel');
            setEditEmail(true)
        }
        else {
            setEditEmailValue('Edit');
            setEditEmail(false)
        }
    }

    const editMobileAction = () => {
        if (editMobileValue === 'Edit') {
            setEditMobileValue('Cancel');
            setEditMobile(true)
        }
        else {
            setEditMobileValue('Edit');
            setEditMobile(false)
        }
    }

    const personal = () => {
        setShowPersonal(true);
        setShowAddress(false)
    }

    const address = () => {
        setShowPersonal(false);
        setShowAddress(true)
    }

    // function to handle personal info edit:
    const personalInfoEdit = () => {
        editPersonal()
        const form = {
            payload: {
                info: {
                    name,
                    username,
                    gender
                }
            }
        }

        dispatch(updateUserInfo(form))
    }

    // function to handle email edit:
    const emailEdit = () => {
        editEmailAction()
        const form = {
            payload: {
                info: {
                    email
                }
            }
        }

        dispatch(updateUserInfo(form))
    }

    // function to handle mobile number edit:
    const contactEdit = () => {
        editMobileAction()
        console.log("edit ho raha")
        const form = {
            payload: {
                info: {
                    contact
                }
            }
        }

        dispatch(updateUserInfo(form))
    }

    return (
        <Layout>
            <section id='about'>
                <h5>Your Profile</h5>
                <h2>Have Notes? <Link to={'/contact'}>Share</Link></h2>

                 <div className="container about-container">
                    <div className="">
                        <div className="">
                            <img className='rounded-full animate-pulse border border-black mb-16 mt-4' src={Me} alt="Me" />
                            <input className='h-17 w-60 ml-12 md:ml-20 text-sm text-center cursor-pointer' type='file' />
                        </div>
                    </div>
                    <div className="about-content mt-8">
                        <div className='rightContainer'>
                            <div style={{ paddingBottom: '24px' }}>
                                <div className='flex flex-row justify-between'>
                                    <span style={{ paddingRight: '24px', fontSize: '18px' }}><strong>Personal Information</strong></span>
                                    <span onClick={editPersonal}><Link to={'#'}>{editPValue}</Link></span>
                                </div>
                            </div>

                            <form>
                                <div className='flex flex-start'>
                                    <div style={{paddingRight: '12px' }}>
                                        <div style={{ marginBottom: '10px', position: 'relative' }}>
                                            <label htmlFor="firstname" className='labell'>First Name</label>
                                            <input
                                                type="text"
                                                className='h-14'
                                                placeholder={auth.userInfo.username}
                                                value={username}
                                                disabled={!editP ? true : false}
                                                onChange={(e) => setUsername(e.target.value)}
                                                />
                                        </div>
                                    </div>

                                    <div style={{ width: '270px', paddingRight: '12px' }}>
                                        <div style={{ marginBottom: '10px', position: 'relative' }}>
                                            <label htmlFor="lastname" className='labell'>Last Name</label>
                                            <input
                                                type="text"
                                                className='h-14'
                                                placeholder={auth.userInfo.name}
                                                value={name}
                                                disabled={!editP ? true : false}
                                                onChange={(e) => setName(e.target.value)}
                                                />
                                        </div>
                                    </div>

                                    {/* {
                                        editP &&
                                        <button
                                        onClick={personalInfoEdit}
                                        >
                                            SAVE
                                        </button>
                                    } */}
                                </div>

                                <div className='flex w-full justify-between'>

                                    <div style={{ padding: '12px 0', fontSize: '14px' }}>
                                        Your Gender
                                    </div>
                                    <div className='flex'>
                                        <div className='flexRow'>
                                            <input type="radio" name='gender' disabled={!editP ? true : false} value="male" onChange={(e) => setGender(e.target.value)} checked={gender === 'male'} />
                                            <div style={{ marginLeft: '10px' }}>Male</div>
                                        </div>
                                        <div className='flexRow' style={{ marginLeft: '30px' }}>
                                            <input type="radio" name='gender' disabled={!editP ? true : false} value="female" onChange={(e) => setGender(e.target.value)} checked={gender === 'female'} />
                                            <div style={{ marginLeft: '10px' }}>Female</div>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            editP &&
                                            <button
                                            onClick={personalInfoEdit}
                                            className='btn btn-primary h-12'
                                            >
                                                SAVE
                                            </button>
                                        }
                                    </div>  
                                </div>

                                {/* {
                                        editP &&
                                        <button
                                        onClick={personalInfoEdit}
                                        >
                                            SAVE
                                        </button>
                                    } */}

                                    {/*
                                <div style={{ marginTop: '50px' }}>
                                    <div>
                                        <div style={{ paddingBottom: '24px' }}>
                                            <div className='flex flex-row justify-between w-[570px]'>
                                                <span style={{ paddingRight: '24px', fontSize: '18px' }}><strong>Email Address</strong></span>
                                                <span className='edit' onClick={editEmailAction}>{editEmailValue}</span>
                                            </div>
                                        </div>
                                        <div style={{ width: '270px', paddingRight: '12px' }}>
                                        <div style={{ position: 'relative', display: 'flex' }}>
                                            <label htmlFor="lastname" className='labell'>Email</label>
                                            <input
                                                className='inputField'
                                                style={{ width: '250px' }}
                                                type="email" placeholder={auth.userInfo.email}
                                                value={email}
                                                disabled={!editEmail ? true : false}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {
                                                editEmail &&
                                                <button
                                                    style={{
                                                        width: '130px',
                                                        marginLeft: '15px'
                                                    }}
                                                    onClick={emailEdit}
                                                >
                                                    SAVE
                                                </button>
                                            }
                                        </div>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '50px' }}>
                                        <div style={{ paddingBottom: '24px' }}>
                                            <div className='flex flex-row justify-between'>
                                                <span style={{ paddingRight: '24px', fontSize: '18px' }}><strong>Mobile Number</strong></span>
                                                <span className='edit' onClick={editMobileAction}>{editMobileValue}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="lastname" className=''>Mobile Number</label>
                                            <input
                                                className='inputField'
                                                style={{ width: '250px' }}
                                                type="number"
                                                placeholder={auth.userInfo.contact ? auth.userInfo.contact : "ADD MOBILE NUMBER"}
                                                disabled={!editMobile ? true : false}
                                                value={contact}
                                                onChange={(e) => setContact(e.target.value)}
                                            />
                                            {
                                                editMobile &&
                                                <button
                                                    onClick={contactEdit}
                                                >
                                                    SAVE
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>*/}
                            </form>
                        </div>
                    </div>
                </div> 
            </section>
        </Layout>
    )
}

export default UserProfile
