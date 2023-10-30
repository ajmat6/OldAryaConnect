import React, { useState, useEffect } from 'react'
import LFLayout from './../LFLayout/LFLaoyout'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { generatePublicURL } from '../../../urlConfig'
import { HiTemplate } from 'react-icons/hi'
import { getItemsByUser } from '../../../reducers/itemReducer'

const YourItems = () => {
    const auth = useSelector((state) => state.auth);
    const item = useSelector((state) => state.item)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemsByUser());
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

    return (
        <LFLayout>
            <section id='notes'>
                <h5>Your Items</h5>
                <h2>Do Share with your friends!</h2>

                {/* <h2>LOST ITEMS</h2> */}
                <div className="container note-container">
                    {
                        item.userItems.map((itemm, index) => {
                            return (
                                <article key={index} className="note-item">
                                    <div className="note-item-image">
                                        <img className='note-photo' src={generatePublicURL(itemm.itemImages[0].img)} alt={itemm.itemName} />
                                    </div>
                                    <h3 className='mb-2'>{itemm.itemName}</h3>
                                    <p><strong className='text-[#4db5ff]'>Description: </strong>{itemm.description}</p>
                                    <p><strong className='text-[#4db5ff]'>Type: </strong>{capitalize(itemm.itemType)}</p>
                                    <h2 className='mb-2'><strong className='text-[#4db5ff]'>Date: </strong>{formatDate(itemm.date)}</h2>
                                    <Link to={`/lost-and-found/items/itemId=${itemm._id}`} className="btn btn-primary">See Item<span><HiTemplate className="notePhoto" /></span></Link>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </LFLayout>
    )
}

export default YourItems