import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
function Pagechange({ handleprev, handlenext,pageNO}) {
    return (
        <div className='bg-gray-400 mt-8 p-4 flex justify-center items-center gap-5'>
            <div className='cursor-pointer' onClick={handleprev} ><FaArrowLeftLong /></div>
            <div className='font-bold'>{pageNO}</div>
            <div onClick={handlenext} className='cursor-pointer'><FaArrowRight /></div>
            
        </div>
    )
}

export default Pagechange
