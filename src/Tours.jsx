import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour, refetchTours}) => {


  if(tours.length === 0){
    return(
      <section>
        <h1>No Tours Found</h1>
        <button onClick={refetchTours} className='bg-green-500 px-2 py-1 text-white rounded-md mt-4' type ="button">Refetch Tours</button>
      </section>
    )
  }

  return (
    <section className=''>
      <h1 className='text-xl font-semibold pb-2 mb-2 text-center'>Our Tours</h1>
      <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {tours.map((tour)=>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </section>
    </section>
    
  )
}

export default Tours