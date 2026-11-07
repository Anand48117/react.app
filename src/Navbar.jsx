import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="add-doctor">Add Doctor</Link>
      <Link to="patients">Patients</Link>
    </div>
  )
}