import React, { useState } from 'react'
import Logo from '/Logo.svg'
import { Link } from 'react-router-dom'
import { IoClose, IoLogIn } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { MdDescription, MdFactCheck, MdFeedback, MdMenu } from 'react-icons/md';
import { BiSolidFoodMenu } from 'react-icons/bi';


const Header = () => {

  

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = ()=> {
    setMenuOpen(false)
  }


  return (
   <>
     <div className='flex items-center justify-around sm:justify-center px-2 gap-30 lg:gap-52 mt-6 border-t-16 border-b-16 border-[rgb(72,94,88)] font-medium'>
        
        
        
        <div>
            <img src={Logo} alt="Logo" className='h-16' />
        </div>

        <div className='text-md lg:text-lg'>
            <ul className='hidden sm:flex sm:flex-row flex-col gap-6 lg:gap-10 cursor-pointer'>
                <Link to='/'> <li>Home</li></Link>
                <a href="#about"><li>About</li></a>
                <a href="#menu"><li>Menu</li></a>
                <Link to='/reservations'><li>Reservations</li></Link>
                <a href="#testimonials"><li>Testimonials</li></a>
               <Link to='/login'><li>Login</li></Link>
            </ul>
        </div>


        <div className='flex sm:hidden gap-8]'>
          <div onClick={()=>setMenuOpen(!menuOpen)}> 
          {menuOpen ? <IoClose className='text-2xl cursor-pointer'/> : <MdMenu className='text-2xl cursor-pointer'/>}
              
          </div>
        
              <div className={`sm:hidden bg-white right-0 h-screen w-80 max-w-[85vw] fixed inset-y-0 transform transition-all z-50 ${menuOpen ? 'translate-x-0': 'translate-x-full'}`} >
                <div className='flex justify-between items-center p-6  bg-[#485E58]'>
                  <h1 className='text-xl text-white'>Menu</h1>
                  <button onClick={closeMenu} className='text-2xl text-white cursor-pointer'><IoClose /></button>
                </div>
        
                <div className='p-6 bg-white'>
                <ul className='sm:hidden flex flex-col gap-6 lg:gap-10 cursor-pointer '>
                      <Link onClick={closeMenu} to='/'> <li className='flex items-center gap-3'> <FaHome /> Home</li></Link>
                      <a onClick={closeMenu} href="#about"><li className='flex items-center gap-3'><MdDescription /> About</li></a>
                      <a onClick={closeMenu} href="#menu"><li className='flex items-center gap-3'><BiSolidFoodMenu /> Menu</li></a>
                      <Link onClick={closeMenu} to='/reservations'><li className='flex items-center gap-3'><MdFactCheck /> Reservations</li></Link>
                      <a onClick={closeMenu} href="#testimonials"><li className='flex items-center gap-3'><MdFeedback /> Testimonials</li></a>
                    <Link onClick={closeMenu} to='/login'><li className='flex items-center gap-3'><IoLogIn /> Login</li></Link>
                  </ul>
                </div>
              </div>
        
        
             
       



      </div>

    </div>

    
   </>
  )
}

export default Header