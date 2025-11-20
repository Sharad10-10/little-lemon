import React from 'react'
import HeroImage from '../assets/Hero-Image-chef.jpg'

const Home = () => {
  return (
   <>
     <div className='bg-[rgba(72,94,88)] mt-8 flex items-center justify-center gap-60'>

        <div className='max-w-100'>
            <h1 className='text-6xl font-medium text-[rgb(244,206,9)]'>Little Lemon</h1>
            <h2 className='text-2xl font-medium text-white'>Chicago</h2>
            <p className='text-white text-[20px] mt-8'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className='bg-[rgb(244,206,19)] mt-8 text-[18px] px-8 h-14 rounded-2xl cursor-pointer'>Reserve a table</button>
        </div>


        <div className='rounded-xl overflow-hidden relative top-16'>
            <img src={HeroImage} alt="Hero Section Image Chef" className='h-102 max-w-90' />
        </div>

    </div>

    
   
   
   </>

    
  )
}

export default Home