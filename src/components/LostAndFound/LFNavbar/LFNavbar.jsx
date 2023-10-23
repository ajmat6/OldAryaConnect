import React from 'react'
import {Link} from 'react-router-dom'

const LFNavbar = () => {
    return (
        <div>
            <ul className='md:flex md:flex-row md:justify-center md:items-center gap-40 md:h-20 bg-[#3e4245] text-[#1f1f38] font-medium hidden'>
                <li><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#post">Post Item</button></li>
                <li><Link to={'/lost-and-found/allItems'}>All Items</Link></li>
                <li><Link to={'/lost-and-found/yourItems'}>Your Items</Link></li>
                <li><Link to={'/lost-and-found/your-responses'}>Your Responses</Link></li>
            </ul>
        </div>
    )
}

export default LFNavbar