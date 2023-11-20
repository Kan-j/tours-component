import React, { useState } from 'react'

const Tour = ({id, name, info, image, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore)
  }
  
  return (
    <>
    <section className='shadow-lg rounded-lg h-fit'>
      <img src={image} className='w-full h-60 rounded-xl object-cover' alt={name} />
      <section>
        <h1 className='mt-2 text-lg font-semibold'>{name}</h1>
        <p className='text-justify px-4 '>{readMore? info: `${info.substring(0,100)}....`}</p>
        <section className='flex gap-4 px-4'>
          <button type='button' onClick={handleReadMore} className='bg-green-500 px-2 py-1 text-white mb-4 mt-2 rounded-md basis-1/3' >{readMore ? 'Show less' : 'Read More'}</button>
          <button className='border border-green-500 px-2 py-1 text-green-600 mb-4 mt-2 rounded-md basis-2/3 hover:bg-green-500 hover:text-white' onClick={()=>{ removeTour(id)}}>Not Interested</button>
        </section>
        
      </section>
    </section>
    </>
  )
}

export default Tour