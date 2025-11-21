import React from 'react'
import ConfirmationImage from '../assets/confirmation.jpg'
import { useLocation } from 'react-router-dom'

const ConfirmationReservation = () => {

    const {state} = useLocation();
    console.log(state)
   


  return (
    <div className='flex justify-center items-center flex-col mt-2 mb-16'>
        
        <div className='max-w-100'>
            <img src={ConfirmationImage} alt='confirmation image' className='w-full' />
        </div>

        <div className=''>
            <h1 className='text-4xl'>YOUR TABLE HAS BEEN RESERVED!</h1>
        </div>

        <div className='text-xl font-medium mt-4 flex flex-col gap-2'>
            <p>Name: <span className='ml-40'>{state.reservationName}</span> </p>
            <p>Date of Reservation: <span className='ml-9'>{state.reservationDate}</span></p>
            <p>Time of Reservation: <span className='ml-9'>{state.time}</span></p>
            <p>Total number of guests: <span className='ml-3'>{state.guests}</span></p>
            {state.specialComments ? <p>Special Comments: <span className='ml-12'>{state.specialComments}</span></p> : ""}
            
        </div>


    </div>
  )
}

export default ConfirmationReservation