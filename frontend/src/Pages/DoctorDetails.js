import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Client from "../services/api";

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

    const makeAppointment = (id) => {
      navigate(`/make-an-appointment`)
    }

    const handleDeleteDoctor = () => {
      console.log(`deleted Doctor ${id}`);
      Client.delete(`/doctors/${id}`).then(() => {
        navigate(`/doctors`);
        window.location.reload();
      });
    };

    // function Doctor({ officeNumber }) {
    //   if (!officeNumber) {
    //     return 0;
    //   }
  
    return doctorDetails ? (
      <div class="bg-neutral-500 h-screen">
                <div key={doctorDetails.id} className="office-doctor-card">
                <div onClick={() => {
                makeAppointment(doctorDetails.id);
                  }}>
                <div class="max-h-full px-14 max-w-6xl mx-auto bg-white rounded-xl shadow-2xl  shadow-pink-500/40 sm:py-14 sm:flex sm:items-center sm:space-x-1 flex-wrap">
                   <div className="div-image">
                    <img class="block h-80 rounded-full sm:mx-0 sm:shrink-0" src={doctorDetails.image_url} />
                  </div>
                  <p class="px-20 text-lg text-black font-semibold">{doctorDetails.name}</p>
                  <p class="text-slate-500 font-small">{doctorDetails.location}</p>
                  <p class="text-slate-500 font-medium">{doctorDetails.office && doctorDetails.office.number ? doctorDetails.office.number : 0}</p>
                  <p class="px-52 text-md text-black font-semibold">Office specialization: {doctorDetails.office && doctorDetails.office.specialty ? doctorDetails.office.specialty : 0}</p>
                  <p class="pt-6 pb-6 px-52 text-md text-black font-semibold">{doctorDetails.description}</p>
                  <div class="px-96 mx-10">
                  <button class="px-8 py-3 text-sm text-black bg-white border-black font-bold italic rounded-full border border-purple-200 hover:text-gray-500 hover:bg-pink-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Contact Now</button>
                  <button onClick={handleDeleteDoctor} class="px-8 py-1 text-sm text-red-500 bg-white border-black font-semibold rounded-full border border-purple-200 hover:text-gray-500 hover:bg-pink-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Delete Doctor</button>
                  </div>
              </div>
                </div>
                </div>
                </div>
       ) : (
         <h2 className="loading">Loading . . . </h2>
       );
     }