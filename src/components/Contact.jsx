import React from 'react'
import Logo from '../assets/LogoFooter.png'

const Contact = () => {
  return (
    <div className='bg-[rgb(72,94,88)] flex justify-around text-[18px] mt-4'>

        <div className='my-8'>
            <img src={Logo} alt="Logo" className='h-80 w-40 bg-white' />
        </div>

        <div className='pt-20'>
            <ul className='flex flex-col gap-2 cursor-pointer' >
                <li>Home</li>
                <li>About</li>
               <li> Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </div>

        <div className='pt-20'>
            <ul className='flex flex-col gap-2 cursor-pointer'>
                <li>Contact</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>

        <div className='pt-20'>
            <ul className='flex flex-col gap-2 cursor-pointer'>
                <li>Social Media</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>

    </div>
  )
}

export default Contact