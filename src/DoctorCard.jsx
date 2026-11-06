import React from 'react'
import "./Home.css"


export default function DoctorCard(props) {
  return (
    <div className='card'>
      <p>Name:{props.name}</p>
      <p>Age: {props.salary}</p>
      <p>Gender:{props.gender}</p>
      <p>Salary:{props.age}</p>
      <p>Specialization:{props.specialization}</p>
    </div>
  )
}
