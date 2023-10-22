import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Modal from '../Modal/Modal'

const LostAndFound = () => {
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [question, setQuestion] = useState('');
    const [itemImages, setItemImages] = useState([]);
    const [itemType, setItemType] = useState('');

    useEffect(() => {
        if (!auth.authenticate) {
            navigate('/signin')
        }
    }, [])

    const handlePostItemSubmit = () => {

    }

    const handleItemImages = (e) => {
        setItemImages([...itemImages, e.target.files[0]])
    }

    const renderPostItemModel = () => {
        return (
            <Modal
                modaltitle="Post Lost Item"
                add="Post Item"
                handleSubmit={handlePostItemSubmit}
                modalId="post"
            >
                <input
                    type="text"
                    placeholder='Add Item Name'
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
                    onChange={(e) => setItemType(e.target.value)}
                    placeholder='Select Item Type'
                >
                    <option value={'lost'}>Lost Item</option>
                    <option value={'found'}>Found Item</option>
                </select>

                <label className='' style={{ marginLeft: '5px' }}>Add Item Image</label>
                <input
                    type="file"
                    className='form-control mt-1 mb-1 bg-[#636375]'
                    onChange={handleItemImages}
                />

                {/* {
          productPic != '' ? <div>{productPic}</div> : null
        } */}
            </Modal>
        )
    }

    return (
        <Layout>
            <div>
                <div>
                    <ul className='md:flex md:flex-row md:justify-center md:items-center gap-40 md:h-20 bg-[#3e4245] text-[#1f1f38] font-medium hidden'>
                        <li><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#post">Post Item</button></li>
                        <li><Link>All Items</Link></li>
                        <li><Link>Your Items</Link></li>
                        <li><Link>Your Responses</Link></li>
                    </ul>
                </div>
            </div>

            {renderPostItemModel()}
        </Layout>
    )
}

export default LostAndFound