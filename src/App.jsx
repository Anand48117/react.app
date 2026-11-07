import React from 'react'
import Navbar from './Navbar'
import DoctorCard from './DoctorCard'
import AddDoctor from './AddDoctor'
import Patients from './Patients'
import Home from './Home'
import "./Home.css"
import { Routes,Route } from 'react-router-dom'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-doctor' element={<AddDoctor/>}/>
        <Route path='/patients' element={<Patients/>}/>

      </Routes>

      {/* <Home/> */}
      {/* <AddDoctor /> */}
      {/* <DoctorCard 
      name=" Rahamtulla"
      age=" 23" 
      gender=" male"
      salary=" 45000"
      specialization=" Team Lead"
      />
      <DoctorCard
      name=" Anand"
      age=" 20"
      gender=" male"
      salary=" 18000"
      specialization=" Developer"
      />
      <DoctorCard
      name=" Mounika"
      age=" 22"
      gender=" Female"
      salary=" 35000"
      specialization=" Tester"
      /> */}
    </div>
  )
}