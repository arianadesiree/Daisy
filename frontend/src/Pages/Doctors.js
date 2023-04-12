import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function Doctors({ doctors }) {

  let navigate = useNavigate();
  
  const showDoctors = (id) => {
    navigate(`${id}`);
  };


  return (
    <div>
      {doctors && doctors.map((doctors, id) => (
        <div key={id}>
          <div onClick={() => {
              showDoctors(id);
            }} className="doctor-container">
            <img className="doctor-image" src={doctors.image_url} />
            <h2>{doctors.name}</h2>
            <h3>{doctors.location}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}