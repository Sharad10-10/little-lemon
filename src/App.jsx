import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Reservation from './pages/Reservation'
import HomePage from './components/HomePage'
import Header from './components/Header'
import ConfirmationReservation from './pages/ConfirmationReservation'


const App = () => {
  return (
    <>
      <Header />
       <Routes>
         <Route path='/' element= {<HomePage />}/>
         <Route path='/login' element = {<Login />} />
         <Route path = '/reservations' element = {<Reservation />} />
         <Route path = '/confirmation' element = {<ConfirmationReservation />} />
       </Routes>
     
    </>
  )
}

export default App