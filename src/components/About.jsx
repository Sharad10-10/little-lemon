import React from 'react'
import aboutImage1 from '../assets/bruchetta.svg'
import aboutImage2 from '../assets/restauranfood.jpg'


const About = () => {
  return (
    <div className='flex justify-around mt-40 px-24' id='about'>

        <div className='max-w-100'>
            <h1 className='text-6xl font-medium'>Little Lemon</h1>
            <h2 className='text-3xl mt-2 font-medium'>Chicago</h2>
            <p className='text-[18px] mt-8 font-medium'>Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea, dolor sit amet. Lorem ipsum dolor sit amet, illum vituperata id mea, eius phaedrum eu duo. Te maiorum gloriatur sea, dolor sit amet. dolor sit amet.</p>
        </div>

        <div className='flex rounded-2xl'>
            <img src={aboutImage1} alt="About image first" className='pt-20'/>
            <img className='max-w-80 relative h-100 right-24 bottom-20' src={aboutImage2} alt="About image second" />
        </div>


    </div>
  )
}

export default About