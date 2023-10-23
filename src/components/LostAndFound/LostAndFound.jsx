import React, { useState, useEffect } from 'react'
import LFLayout from './LFLayout/LFLaoyout'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { getAllItems } from '../../reducers/itemReducer'
import { generatePublicURL } from '../../urlConfig'
import {AiFillBook} from 'react-icons/ai'
import {HiTemplate} from 'react-icons/hi'

const LostAndFound = () => {
    const auth = useSelector((state) => state.auth);
    const item = useSelector((state) => state.item)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const lostItems = item.items.filter((itemm, index) => {
        return itemm.itemType === 'lost';
    })

    const foundItems = item.items.filter((itemm, index) => {
        return itemm.itemType === 'found';
    })

    // const lostItems = item.items.filter((itemm, index) => {
    //     return itemm.itemType === 'lost';
    // })

    console.log(lostItems)
    console.log(foundItems)

    useEffect(() => {
        dispatch(getAllItems());
    }, [])

  const formatDate = (date) => {
    if(date)
    {
      const d = new Date(date);
      return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
    }
  }

    return (
        <LFLayout>
            <section id='notes'>
                <h5>All Lost and Found Items</h5>
                <h2>Do Share with your friends!</h2>

                <h2>LOST ITEMS</h2>
                <div className="container note-container">
                    {
                        lostItems.map((itemm, index) => {
                            return (
                                <article key={index} className="note-item">
                                    <div className="note-item-image">
                                        <img className='note-photo' src={generatePublicURL(itemm.itemImages[0].img)} alt={item.title} />
                                    </div>
                                    <h3 className='mb-2'>{itemm.itemName}</h3>
                                    <p><strong>Description: </strong>{itemm.description}</p>
                                    <h2 className='mb-2'><strong>Date: </strong>{formatDate(itemm.date)}</h2>
                                    <Link to={`/lost-and-found/items/item=${itemm._id}`} className="btn btn-primary">See Item<span><HiTemplate className="notePhoto" /></span></Link>
                                </article>
                            )
                        })
                    }
                </div>

                <h2 className='mt-5'>FOUND ITEMS</h2>
                <div className="container note-container">
                    {
                        foundItems.length > 0 ? foundItems.map((itemm, index) => {
                            return (
                                <article key={index} className="note-item">
                                    <div className="note-item-image">
                                        <img className='note-photo' src={generatePublicURL(itemm.itemImages[0].img)} alt={item.title} />
                                    </div>
                                    <h3 className='mb-2'>{itemm.itemName}</h3>
                                    <p><strong>Description: </strong>{itemm.description}</p>
                                    <h2 className='mb-2'><strong>Date: </strong>{formatDate(itemm.date)}</h2>
                                    <Link to={`/lost-and-found/items/item=${itemm._id}`} className="btn btn-primary">See Item<span><HiTemplate className="notePhoto" /></span></Link>
                                </article>
                            )
                        }) : <h2 className=''>No Items!!</h2>
                    }
                </div>
            </section>
        </LFLayout>
    )
}

export default LostAndFound