import React from 'react'
import { BiCameraMovie } from "react-icons/bi";
import { Link } from 'react-router-dom'
const Nevbar = () => {
    return (
        <div className='flex border shadow-lg space-x-8 items-center pl-3 py-4 ' >
            <BiCameraMovie className='w-[50px]  h-[50px] ' />
            <Link to="/" className='text-blue-500  hover:text-blue-600 text-3xl font-bold'>Movies</Link>
            <Link to="/watchlist" className='text-blue-500 hover:text-blue-600 text-3xl font-bold'>Watchlist</Link>
        </div>
    )
}

export default Nevbar