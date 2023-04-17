import "./styles.css";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Offices from "./Pages/Offices"
import Doctors from "./Pages/Doctors";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from 'react'
import OfficeDetails from "./Pages/OfficeDetails";
import DoctorDetails from "./Pages/DoctorDetails";
import Appointment from "./Pages/Appointment";


function App () {

  const [ offices, setOffices] = useState(null)
  const [ doctors, setDoctors ] = useState(null)
  const BASE_URL = "http://localhost:8000"

  useEffect(()=>{
    const getOffices = async () => {
      const res = await axios.get(`${BASE_URL}/offices/`)
      console.log(res.data)
      setOffices(res.data)
    }
    getOffices()
  }, [])
  useEffect(()=>{
    const getDoctors = async () => {
      const res = await axios.get(`${BASE_URL}/doctors/`)
      console.log(res.data)
      setDoctors(res.data)
    }
    getDoctors()
  }, [])

 
  return (
   <>
    <Nav />
    <div class="bg-neutral-500 max-h-full">
    <Routes>
      <Route path="/" element={<Home
      offices={offices}
      doctors={doctors}/>} />

      <Route path="/:id" element={<OfficeDetails
      doctors={doctors}
      offices={offices} />} />

      <Route path="/offices" element={<Offices
      offices={offices}
      doctors={doctors}/>} />

      <Route path="/doctors" element={<Doctors
      doctors={doctors}
      offices={offices}/>} />

      <Route path="/offices/:id" element={<OfficeDetails
      doctors={doctors}
      offices={offices} />} />

      <Route path="/doctors/:id" element={<DoctorDetails
      doctors={doctors}
      offices={offices} />} />

      <Route path="/make-an-appointment" element={<Appointment
      doctors={doctors}
      offices={offices} />} />

    </Routes>
    </div>


    </>
  );
}

export default App;
