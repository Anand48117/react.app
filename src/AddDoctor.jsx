import React, {useState} from 'react'

export default function AddDoctor() {
  const [name,setName] = useState()
  const [salary,setSalary] = useState()
  const [gender,setGender] = useState()
  const [age,setAge] = useState()
  const [specialization,setSpecialization] = useState()
  function handleSubmit(){
    console.log(name,age,salary,gender,specialization)
  }
  return (
    <div>
      <input type="text" placeholder="Enter Name"
      onChange={(e)=>setName(e.target.value)} /> 
      <br />
      <input type="text" placeholder="Enter Salary"
      onChange={(e)=>setSalary(e.target.value)} /> 
      <br />
      <input type="text" placeholder="Enter Age"
      onChange={(e)=>setAge(e.target.value)} /> 
      <br />
      <input type="text" placeholder="Enter Gender"
      onChange={(e)=>setGender(e.target.value)} /> 
      <br />
      <input type="text" placeholder="Enter Specialization"
      onChange={(e)=>setSpecialization(e.target.value)} /> 
      <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
