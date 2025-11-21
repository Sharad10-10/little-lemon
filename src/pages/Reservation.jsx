import { useFormik } from 'formik';
import React from 'react';
import { useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

const Reservation = () => {

  const navigate = useNavigate();

const formik = useFormik({
  initialValues: {
    reservationName: '',
    reservationDate: '',
    time: '',
    guests: '',
    specialComments: ''
  },

  validationSchema: Yup.object({
    reservationName: Yup.string().required('Name field is required!'),
    reservationDate: Yup.date().required('Date field is required!').min(new Date(), 'Date must be in future'),
    time: Yup.string().required('Time field is required!'),
    guests: Yup.number().required('Number of guests is required!').min(1, 'At least 1 guest is required'),
    specialComments: Yup.string().max(500, 'Comments mut be less than 500 characters')
  }),

  onSubmit: (values)=> {

    navigate('/confirmation', { state : values})


  }
})

  return (
    <div className='mb-8'>

        <div>
            <h1 className='text-center font-medium text-4xl mt-8'>Reserve Your Table</h1>
        </div>

        <div className='flex justify-center mt-6'>

            <form  onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>

                <div className='flex flex-col gap-2'>
                  <label className='text-xl' htmlFor="reservationName">Enter Your Name</label>
                  <input {...formik.getFieldProps('reservationName')} className='border border-gray-500 px-2 w-100 h-8 rounded' type="text" id='reservationName' />
                  {formik.touched.reservationName && formik.errors.reservationName && (
                    <span className='text-red-500 text-sm'>{formik.errors.reservationName}</span>
                  )}
                </div>   

                <div className='flex flex-col gap-2'>
                  <label className='text-xl' htmlFor="reservationDate">Select a date: </label>
                  <input {...formik.getFieldProps('reservationDate')} className='border border-gray-500 px-2 w-100 h-8 rounded' type="date" id='reservationDate' />
                  {formik.touched.reservationDate && formik.errors.reservationDate && (
                    <span className='text-red-500 text-sm'>{formik.errors.reservationDate}</span>
                  )}
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-xl' htmlFor="time">Time</label> 
                  <input {...formik.getFieldProps('time')} className='border border-gray-500 px-2 w-100 h-8 rounded' type="time" id='time'/> 
                  {formik.touched.time && formik.errors.time && (
                    <span className='text-red-500 text-sm'>{formik.errors.time}</span>
                  )}
                </div>

                <div className='flex flex-col gap-2'> 
                   <label className='text-xl' htmlFor="guests">Number of Guests</label>
                   <input {...formik.getFieldProps('guests')} className='border border-gray-500 px-2 w-100 h-8 rounded' type="number" min={1}/> 
                   {formik.touched.guests && formik.errors.guests && (
                    <span className='text-red-500 text-sm'>{formik.errors.guests}</span>
                  )}
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-xl' htmlFor="specialComments">Any Special Comments</label>
                    <textarea {...formik.getFieldProps('specialComments')} className='border border-gray-500 rounded px-2 text-gray-500' id="specialComments"></textarea>
                </div>
               
                <button className='bg-[rgb(244,206,19)] text-[18px] h-14 rounded-2xl cursor-pointer'>Reserve a table</button>
            </form>
        </div>


    </div>
  )
}

export default Reservation