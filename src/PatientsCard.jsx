import React from 'react';
export default function PatientsCard({ patient }) {
    return (
        <div className="patient-card">
            <p><b>ID:</b> {patient.id}</p>
            <p><b>Age:</b> {patient.age}</p>
            <p><b>Gender:</b> {patient.gender}</p>
            <p><b>Weight:</b> {patient.weight} kg</p>
            <p><b>Email:</b> {patient.email}</p>
            <p><b>Disease:</b> {patient.disease}</p>
            <p><b>Doctor Name:</b> {patient.doctor?.name}</p>
            <p><b>Specialization:</b> {patient.doctor?.specialization}</p>
        </div>
    );
}
