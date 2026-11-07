
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PatientsCard from './PatientsCard';

export default function Patients() {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchPatients();
    }, []);

    async function fetchPatients() {
        try {
            const res = await axios.get(
                'https://doc-back1.onrender.com/patients'
            );
            setPatients(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const filteredPatients = patients.filter((i) => {
        return i.doctor?.name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Enter a doctor name"
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                />
            </div>

            {filteredPatients.length === 0 ? (
                <h3>No Patients Found...</h3>
            ) : (
                <div className="card-container">
                    {filteredPatients.map((patient) => (
                        <PatientsCard
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
