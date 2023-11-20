import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tours from './Tours'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])  


  const fetchTours = async()=> {
      setIsLoading(true)
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        const tours = await response.json();
        // console.log(tours);
        setTours(tours)
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(()=>{
    fetchTours()
  },[])

  const removeTour = (id)=> {
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)
  }

  const refetchTours = ()=> {
    fetchTours()
    console.log(tours);
  }

  return (
    <>
    <Tours tours={tours} removeTour={removeTour} refetchTours = {refetchTours}/>
      
    </>
  )
}

export default App
