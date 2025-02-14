import React from 'react'

function Banner() {
  return (
    <div className='md:h-[75vh] bg-center flex  items-end ' style={{backgroundImage : `url(https://cdn.marvel.com/content/1x/avengersendgame_lob_mas_dsk_01.jpg)`}}>
        <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>Avengers: Infinity War</div>
     
    </div>
  )
}

export default Banner
