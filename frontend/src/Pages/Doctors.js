import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
  
export default function Doctors({ doctors }) {

  let navigate = useNavigate();
  
  const showDoctors = (id) => {
    navigate(`${id}`);
  };

  const updateDoctors = (doctor) => {
    navigate(`/updatedoctor/${doctor.id}`,{state: { doctor: doctor }})
  }

  return (
    <div>

      {doctors && doctors.map((doctor, i) => (
        <div key={i}>
          <div>
              <div class="mb-7 py-8 px-3 max-w-3xl mx-auto bg-white rounded-xl shadow-2xl shadow-pink-500/40 space-y-2 sm:py-5 sm:flex sm:items-center sm:space-y-0 sm:space-x-5 flex items-center space-x-3">
              <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={doctor.image_url} />
            <h2 class="text-md text-black font-semibold">{doctor.name}</h2>
            <h3 class="text-slate-500 font-small">{doctor.location}</h3>
            <button onClick={() => {showDoctors(doctor.id)}} class="px-4 py-1 text-sm text-black bg-white border-black font-semibold rounded-full border border-purple-200 hover:text-gray-500 hover:bg-pink-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">More Information</button>
            <button onClick={() => {updateDoctors(doctor)}} class="px-4 py-1 text-sm text-black bg-white border-black font-semibold rounded-full border border-purple-200 hover:text-gray-500 hover:bg-pink-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit</button>
            
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}