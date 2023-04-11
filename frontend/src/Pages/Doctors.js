import axios from "axios";
import { useState, useEffect } from "react";
import React from "react"

export default function Doctors({ doctors }) {

  const [displayOutput, setDisplayOutput] = useState([]);


  useEffect(() => {
    axios
      .get("https://localhost:8000/doctors/")
      .then((response) => {
        displayOutput(response);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      {doctors && doctors.map((doctors, id) => (
        <div key={id}>
          <div className="doctor-container">
            <img className="doctor-image" src={doctors.image_url} />
            <h2>{doctors.name}</h2>
            <h3>{doctors.location}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}