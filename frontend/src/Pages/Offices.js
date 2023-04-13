import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import DoctorsPage from "./DoctorsPage";
import {Route, Routes} from 'react-router-dom'

export default function Offices({ offices }) {

  const [ doctors, setDoctors ] = useState(null)
  let navigate = useNavigate();

  const showDoctors = (id) => {
    navigate(`${id}`);
  };

  return (
    <div>
      <Routes>
      <Route path="/doctors/:id" element={<DoctorsPage
      offices={offices}
      doctors={doctors}/>} />
      </Routes>

      {offices && offices.map((office, i) => (
        <div key={i}>
          <div onClick={() => {
              showDoctors(office.id);
            }}
            className="office-container">
            <img className="office-image" src={office.photo_url} />
            <h2>{office.name}</h2>
            <h3>{office.location}</h3>
            <h4>{office.number}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}




// export default function Offices({ offices }) {

//   let navigate = useNavigate();
//   // const [displayOutput, setDisplayOutput] = useState([]);
//   const showDoctors = (id) => {navigate(`/doctors/${id}`);
//   };

//   useEffect(() => {
//     axios.get("https://localhost:8000/offices/")
//       .then((response) => {
//         // displayOutput(response);
//       })
//       .catch((err) => console.log(err));
//   }, []);


//   return (
//     <div>
//       {offices && offices.map((offices, id) => (
//         <div key={id}>
//           <div onClick={() => {
//               showDoctors(id);
//             }}
//             className="office-container">
//             <img className="office-image" src={offices.photo_url} />
//             <h2>{offices.name}</h2>
//             <h3>{offices.location}</h3>
//             <h4>{offices.number}</h4>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }






// class Offices extends React.Component {
//     state = { details: [], }

//     componentDidMount() {

//         let data;
//         axios.get('http://localhost:8000/offices/')
//         .then(res => {
//             data = res.data;
//             this.setState({
//                 details: data
//             });
//         })
//     .catch(err => { })

//     }