import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function DoctorDetails ({doctor}) {

    const [doctorDetails, setDoctorDetails] = useState(null);

    let { id } = useParams();
    let navigate = useNavigate();

      useEffect(() => {
        // Fetch details of the doctor with the given id
        const fetchDoctorDetails = async () => {
            const response = await axios.get(`http://localhost:8000/doctors/${id}`);
            const data = response.data
            console.log(data)
            setDoctorDetails(data);
        };
        fetchDoctorDetails();
    }, [id]);

    return doctorDetails ? (
                <div key={doctorDetails.id} className="office-doctor-card">
                <div className="office-doctor-rows">
                   <div className="div-image">
                    <img className="office-doctor-img" src={doctorDetails.image_url} />
                  </div>
                  <p>{doctorDetails.name}</p>
                  <p>{doctorDetails.location}</p>
                  <p>{doctorDetails.description}</p>


                </div>
                </div>
       ) : (
         <h2 className="loading">Loading . . . </h2>
       );
     }