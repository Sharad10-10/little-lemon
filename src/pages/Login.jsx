import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const Login = () => {


  const navigate = useNavigate();

const formik = useFormik({

  initialValues : {
    email: '',
    password: ''
  },

  validationSchema: Yup.object({

    email: Yup.string().email().required("Valid email is required"),
    password: Yup.string().required("Valid password is required")
    .min(6, "Minimum of 6 characters required!!")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "password must contain at least one lowercase letter")
  }),

  onSubmit: (values)=> {
    navigate('/')
    
  }

})


  return (
    <div>
      <h1 className='text-4xl text-center mt-8'>
        Login
      </h1>

      <div className='mt-4 flex justify-center'>

        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>

            <div>
              <label className='text-lg' htmlFor="email">Email</label> <br />
              <input {...formik.getFieldProps('email')} className='border border-gray-400 w-80 mt-2 rounded px-2 h-8' type='email' id='email'></input> 
              {formik.touched.email && formik.errors.email && (
                <p className='text-sm text-red-800'> {formik.errors.email} </p>
              )}
            </div>

            <div>
              <label className='text-lg'  htmlFor="password">Password</label> <br />
              <input {...formik.getFieldProps('password')}  className='border border-gray-400 w-80 mt-2 rounded px-2 h-8' type='password' id='password'></input>
              {formik.touched.password && formik.errors.password && (
                <p className='text-red-800 text-sm'>{formik.errors.password}</p>
              )}
            </div>

            <div>
              <p className='text-lg cursor-pointer'>Create an account?</p>
              <p className='text-lg cursor-pointer'>Forgot Password?</p>
            </div>

            <button className='bg-[rgb(244,206,19)] mt-8 text-[18px] px-8 h-14 rounded-2xl cursor-pointer'>Login</button>

        </form>

      </div>


    </div>
  )
}

export default Login