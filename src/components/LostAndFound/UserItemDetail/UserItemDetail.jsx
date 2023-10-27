import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, getItemById } from '../../../reducers/itemReducer';
import { useParams, useNavigate } from 'react-router-dom'
import LFLayout from '../LFLayout/LFLaoyout';
import { generatePublicURL } from '../../../urlConfig';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Modal from '../../Modal/Modal'


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

    const deleteItemm = () => {
        console.log("delete")
        dispatch(deleteItem(id))
            .then(() => {
                navigate('/lost-and-found/yourItems')
            })
    }

    const [itemName, setItemName] = useState(item.length > 0 ? item[0].itemName : "");
    console.log(itemName)
    const [description, setDescription] = useState(item.length > 0 ? item[0].itemName : "");
    const [question, setQuestion] = useState(item.length > 0 ? item[0].question : "");
    const [itemImages, setItemImages] = useState(item.length > 0 ? item[0].itemImages : []);
    const [itemType, setItemType] = useState(item.length > 0 ? item[0].itemType : "");

    const handleEditItemSubmit = () => {
        const form = new FormData();

        form.append('itemName', itemName);
        form.append('description', description);
        form.append('itemType', itemType);
        form.append('question', question);

        for (let image of itemImages) {
            form.append('itemImages', image);
        }

        // dispatch(addItem(form));
    }

    const handleItemImages = (e) => {
        setItemImages([...itemImages, e.target.files[0]])
    }

    const renderEditItemModel = () => {
        return (
            <Modal
                modaltitle="Edit Item"
                add="Edit Item"
                handleSubmit={handleEditItemSubmit}
                modalId="edit"
            >
                <input
                    type="text"
                    // placeholder='Add Item Name'
                    className='form-control bg-[#636375]'
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='Add Description'
                    className='form-control mt-3 bg-[#636375]'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='Add a question you want to ask who claims item found/lost'
                    className='form-control mt-3 bg-[#636375]'
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />

                <select
                    className="form-control my-3 bg-[#636375]"
                    value={itemType}
                    onChange={(e) => { setItemType(e.target.value); console.log(itemType) }}
                    placeholder='Select Item Type'
                >
                    <option value='0'>Select Item Type</option>
                    <option value='lost'>Lost Item</option>
                    <option value='found'>Found Item</option>
                </select>

                <label className='' style={{ marginLeft: '5px' }}>Add Item Image</label>
                <input
                    type="file"
                    className='form-control mt-1 mb-1 bg-[#636375]'
                    onChange={handleItemImages}
                />

                {
                    itemImages.length > 0 ? itemImages.map((image, index) => (<div key={index}>{image.name}</div>)) : null
                }
            </Modal>
        )
    }

    return (
        <LFLayout>
            <section id='notes'>
                <h5>Item Details</h5>
                <h2>Do Share with your friends!</h2>

                {
                    item.length > 0 ? (
                        <div className='md:flex note-container container'>
                            <div className="md:flex">
                                <article className="note-item">
                                    <h3 className='mb-2'>{item[0].itemName}</h3>
                                    <p><strong className='text-[#4db5ff]'>Description: </strong>{item[0].description}</p>
                                    <p><strong className='text-[#4db5ff]'>Type: </strong>{capitalize(item[0].itemType)}</p>
                                    <h2 className='mb-2'><strong className='text-[#4db5ff]'>Date: </strong>{formatDate(item[0].date)}</h2>
                                    {
                                        auth.userInfo._id === item[0].userId &&
                                        <div className='flex justify-center items-center gap-3 mt-3'>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#edit">Edit</button>
                                            <button className='btn bg-[#d19494] text-black' onClick={deleteItemm}>Delete</button>
                                        </div>
                                    }
                                </article>
                            </div>
                            <div className=''>
                                <article className="note-item h-[450px]">
                                    <div className="note-item-image">
                                        <div>
                                            <Carousel
                                                renderThumbs={() => { }} // to remove the small pics of the large one at bottom
                                                autoPlay={true} // or just autoPlay (true is the default value)
                                                infinite={true}
                                                mobileFirst={true}
                                            >
                                                {
                                                    item[0].itemImages.map((image, index) =>
                                                        <div key={index} className='max-w-[100%] max-h-[100%] object-contain'>
                                                            <img src={generatePublicURL(image.img)} />
                                                        </div>
                                                    )
                                                }
                                            </Carousel>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>

                    ) :
                        (
                            <div>Loading...</div>
                        )
                }

                {renderEditItemModel()}
            </section >
        </LFLayout >
    )
}

export default UserItemDetail