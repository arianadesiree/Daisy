import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function OfficeDetails ({doctors ,offices}) {

    const [officeDoctors, setOfficeDoctors] = useState(null);

    let { id } = useParams();
    let navigate = useNavigate();

    const showDoctors = (id) => {
      navigate(`/doctors/${id}`)
    }

    useEffect(() => {
      let array = doctors?.filter(
        (doctor) => doctor.office.id === parseInt(id)
        )
        setOfficeDoctors(array)
      }, [doctors, id]);
  

    return doctors ? (
        <section class="bg-neutral-500 h-screen">
        {officeDoctors ? (
          <div>
            {" "}
            {officeDoctors.map((doctors) => {
              return (
                <div key={doctors.id}>
                <div onClick={()=>{showDoctors(doctors.id)}}>
                   <div class="mb-7 py-8 px-2 max-w-3xl max-h-60 mx-auto bg-white rounded-xl shadow-2xl  shadow-pink-500/40 space-y-2 sm:py-5 sm:flex sm:items-center sm:space-y-0 sm:space-x-5 flex items-center space-x-3">
                    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={doctors.image_url} />
                  
                  <p class="text-md text-black font-semibold">{doctors.name}</p>
                  <p class="text-slate-500 font-small">{doctors.location}</p>
                  <button class="px-4 py-1 text-sm text-black bg-white border-black font-semibold rounded-full border border-purple-200 hover:text-gray-500 hover:bg-pink-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">More Information</button>
                </div>

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



     // useEffect(() => {
    //   let selectedOffices = offices[id];
    //   setOffices(selectedOffices);
    // }, []);



    // useEffect(() => {
    //   setOfficeDoctors([]);
    //   const getOfficeDoctors = async () => {
    //     for (let i = 0; i < offices.doctors.length; i++) {
    //       const res = await axios.get(offices.doctors[i]);
    //       let events = officeDoctors;
    //       console.log(doctors);
    //       events.push(res.data);
    //       console.log(doctors);
    //       setOfficeDoctors([...doctors]);
    //     }
    //   };
    //   getOfficeDoctors();
    // }, [doctors]);