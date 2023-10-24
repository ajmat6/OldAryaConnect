import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, getItemById } from '../../../reducers/itemReducer';
import { useParams, useNavigate } from 'react-router-dom'
import LFLayout from '../LFLayout/LFLaoyout';
import { generatePublicURL } from '../../../urlConfig';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const UserItemDetail = () => {
    const item = useSelector((state) => state.item.itemDetails);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.itemId.split('=')[1];
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(getItemById(id))
    }, [])

    const formatDate = (date) => {
        if (date) {
            const d = new Date(date);
            return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
        }
    }

    const capitalize = (word) => {
        let character = word.charAt(0).toUpperCase();
        return character + word.slice(1)
    }

    const swiper = new Swiper('.swiper', {
        // // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        autoplay: {
            delay: 4000,
        }
    });

    const deleteItemm = () => {
        console.log("delete")
        dispatch(deleteItem(id))
        .then(() => {
            navigate('/lost-and-found/yourItems')
        })
    }

    return (
        <LFLayout>
            <section id='notes'>
                <h5>Item Details</h5>
                <h2>Do Share with your friends!</h2>

                {
                    item.length > 0 ? (
                    <div className='md:flex note-container container'>
                        <div className="md:flex md:justify-center md:item-center">
                            <article className="note-item">
                                <h3 className='mb-2'>{item[0].itemName}</h3>
                                <p><strong className='text-[#4db5ff]'>Description: </strong>{item[0].description}</p>
                                <p><strong className='text-[#4db5ff]'>Type: </strong>{capitalize(item[0].itemType)}</p>
                                <h2 className='mb-2'><strong className='text-[#4db5ff]'>Date: </strong>{formatDate(item[0].date)}</h2>
                                {
                                    auth.userInfo._id === item[0].userId && 
                                    <div className='flex justify-center items-center gap-3 mt-3'>
                                        <button className='btn btn-primary'>Edit</button>
                                        <button className='btn bg-[#d19494] text-black' onClick={deleteItemm}>Delete</button>
                                    </div>
                                }
                            </article>
                        </div>
                        <div className=''>
                            <article className="note-item h-[450px]">
                                <div className="note-item-image">
                                    <div class="swiper-wrapper autoplay-play">
                                        {
                                            item[0].itemImages.map((image, index) => {
                                                return (
                                                <img key={index} class="swiper-slide rounded-lg aspect-auto" src={generatePublicURL(image.img)} alt='' />
                                                )
                                            })
                                        }
                                    </div>
                                    <div class="swiper-pagination"></div>
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-scrollbar"></div>
                                </div>
                            </article>
                        </div>
                    </div>

                    ) :
                    (
                        <div>Loading...</div>
                    )
                }


            </section >
        </LFLayout >
    )
}

export default UserItemDetail