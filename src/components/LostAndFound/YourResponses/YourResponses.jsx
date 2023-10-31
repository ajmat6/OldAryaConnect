import React, {useEffect} from 'react'
import LFLayout from '../LFLayout/LFLaoyout'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { generatePublicURL } from '../../../urlConfig'
import { deleteResponsee, getAllItems } from '../../../reducers/itemReducer'

const YourResponses = () => {
    const item = useSelector((state) => state.item)
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllItems());
    }, [item.deletingItem]) 

    let lostItemReponses = [];
    let foundItemResponses = [];

    item.items.map((item) => 
        item.responses.map((response) => {
            if(item.itemType === 'lost' && response.resUserId === auth.userInfo._id) lostItemReponses.push({itemId: item._id, responseId: response._id, image: item.itemImages[0], itemName: item.itemName, response:response.response, status:response.status, question:item.question})
            else if(item.itemType === 'found' && response.resUserId === auth.userInfo._id) foundItemResponses.push({itemId: item._id, responseId: response._id, image: item.itemImages[0], itemName: item.itemName, response:response.response, status:response.status, question:item.question});
        })
    )

    console.log(foundItemResponses, "found")

    const deleteResponse = (itemId, responseId) => {
        const form = {
            itemId: itemId,
            id: responseId
        }

        dispatch(deleteResponsee(form));
    }

    const showOwnerEmail = (itemId) => {
        const thisItem = item.items.find(itemm => itemm._id === itemId);
        alert(`The Owner of this item is '${thisItem.userId.email}'. You can contact the owner with this Email`)
    }

    return (
        <LFLayout>
            <section id='notes'>
                <h5>Your Items</h5>
                <h2>Do Share with your friends!</h2>

                <h2>LOST ITEM RESPONSES</h2>
                <div className="container note-container">
                    {
                        lostItemReponses.length > 0 ?
                        lostItemReponses.map((itemm, index) => {
                            return (
                                <article key={index} className="note-item">
                                    <div className="note-item-image">
                                        <img className='note-photo' src={generatePublicURL(itemm.image.img)} alt={itemm.itemName} />
                                    </div>
                                    <h3 className='mb-2'>{itemm.itemName}</h3>
                                    <p><strong className='text-[#4db5ff]'>Question: </strong>{itemm.question}</p>
                                    <p><strong className='text-[#4db5ff]'>Your Answer: </strong>{itemm.response}</p>
                                    <p><strong className='text-[#4db5ff]'>Status: </strong>{itemm.status}</p>
                                    {
                                        itemm.status === 'Pending' ?
                                        <button className='btn btn-primary mt-3' onClick={() => deleteResponse(itemm.itemId, itemm.responseId)}>Delete</button> 
                                        :
                                        itemm.status === 'Accepted' &&
                                        <button className='btn btn-primary mt-3' onClick={() => showOwnerEmail(itemm.itemId)}>Show Owner Email</button>
                                    }
                                </article>
                            )
                        }) :
                        <div>No Responses!!</div>
                    }
                </div>

                <h2 className='mt-5'>FOUND ITEM RESPONSES</h2>
                <div className="container note-container">
                    {
                        foundItemResponses.length > 0 ?
                        foundItemResponses.map((itemm, index) => {
                            return (
                                <article key={index} className="note-item">
                                    <div className="note-item-image">
                                        <img className='note-photo' src={generatePublicURL(itemm.image.img)} alt={itemm.itemName} />
                                    </div>
                                    <h3 className='mb-2'>{itemm.itemName}</h3>
                                    <p><strong className='text-[#4db5ff]'>Question: </strong>{itemm.question}</p>
                                    <p><strong className='text-[#4db5ff]'>Your Answer: </strong>{itemm.response}</p>
                                    <p><strong className='text-[#4db5ff]'>Status: </strong>{itemm.status}</p>
                                    {
                                        itemm.status === 'Pending' ?
                                        <button className='btn btn-primary mt-3' onClick={() => deleteResponse(itemm.itemId, itemm.responseId)}>Delete</button>
                                        :
                                        itemm.status === "Accepted" &&
                                        <button className='btn btn-primary mt-3' onClick={() => showOwnerEmail(itemm.itemId)}>Show Owner Email</button>
                                    }
                                </article>
                            )
                        }) :
                        <div>No Responses!!</div>
                    }
                </div>
            </section>
        </LFLayout>
    )
}

export default YourResponses