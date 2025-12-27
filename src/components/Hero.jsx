import React from 'react'
import HeroImage from '../assets/Hero-Image-chef.jpg'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = ()=> {
    navigate('/reservations')
  }

  return (
   <>
     <div className='bg-[rgba(72,94,88)] mt-8 flex sm:flex-row flex-col items-center justify-center lg:gap-60 md:gap-30'>

        <div className='max-w-100'>
            <h1 className='text-6xl font-medium text-[rgb(244,206,9)]'>Little Lemon</h1>
            <h2 className='text-2xl font-medium text-white'>Chicago</h2>
            <p className='text-white text-[20px] mt-8'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button onClick={handleClick} className='bg-[rgb(244,206,19)] mt-8 text-[18px] px-8 h-14 rounded-2xl cursor-pointer mb-2'>Reserve a table</button>
        </div>


        <div className='rounded-xl overflow-hidden relative sm:top-16 sm:right-0 right-26 sm:0 my-4'>
            <img src={HeroImage} alt="Hero Section Image Chef" className='h-50 max-w-50 md:h-70 md:max-w-70 lg:h-102 lg:max-w-90' />
        </div>

    </div>

    
   
   
   </>

    
  )
}

export default Hero