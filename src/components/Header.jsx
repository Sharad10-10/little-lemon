import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'


const Header = () => {

  

  return (
    <div className='flex items-center justify-center gap-52 mt-6 border-t-16 border-b-16 border-[rgb(72,94,88)] font-medium'>
        <div>
            <img src={Logo} alt="Logo" className='h-16' />
        </div>

        <div className=''>
            <ul className='flex gap-10 cursor-pointer'>
                <Link to='/'> <li>Home</li></Link>
                <a href="#about"><li>About</li></a>
                <a href="#menu"><li>Menu</li></a>
                <Link to='/reservations'><li>Reservations</li></Link>
                <a href="#testimonials"><li>Testimonials</li></a>
               <Link to='/login'><li>Login</li></Link>
            </ul>
        </div>

    </div>
  )
}

export default Header