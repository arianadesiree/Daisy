import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function DoctorsPage () {

    const [offices, setOffices] = useState(null);
    const [doctors, setDoctors] = useState(null);
    const [officeDoctors, setOfficeDoctors] = useState(null);

    let { id } = useParams();
    let navigate = useNavigate();
    const showDoctors = (id) => {
      navigate(`/doctors/${id}`)
    }
    useEffect(() => {
      let selectedOffices = offices[id];
      setOffices(selectedOffices);
    }, []);
  
    useEffect(() => {
      setOfficeDoctors([]);
      const getOfficeDoctors = async () => {
        for (let i = 0; i < offices.doctors.length; i++) {
          const res = await axios.get(offices.doctors[i]);
          let events = officeDoctors;
          console.log(doctors);
          events.push(res.data);
          console.log(doctors);
          setOfficeDoctors([...doctors]);
        }
      };
      getOfficeDoctors();
    }, [doctors]);


    return doctors && officeDoctors ? (
        <section className="office-doctors">
        {officeDoctors ? (
          <div>
            {" "}
            {officeDoctors.map((doctors) => {
              return (
                <div className="office-doctor-card">
                <div onClick={()=>{showDoctors(doctors.id)}}className="office-doctor-rows">
                   <div className="div-image">
                    <img className="office-doctor-img" src={doctors.image_url} />
                  </div>
                  <p>{doctors.name}</p>
                  <p>{doctors.location}</p>
                  <p>{doctors.description}</p>


                </div>
                </div>
              );
            })}{" "}
          </div>
        ) : null}
      </section>
       ) : (
         <h2 className="loading">Loading . . . </h2>
       );
     }