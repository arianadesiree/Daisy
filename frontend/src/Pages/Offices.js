import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
// import OfficeDetails from "./OfficeDetails";
import {Route, Routes} from 'react-router-dom'
import OfficeDetails from "./OfficeDetails";

export default function Offices({ offices }) {

  const [ doctors, setDoctors ] = useState(null)
  let navigate = useNavigate();

  const showDoctors = (id) => {
    navigate(`${id}`);
  };

  return (
    <div>
      <Routes>
      <Route path="/doctors/:id" element={<OfficeDetails
      doctors={doctors}/>} />
      </Routes>

      {offices && offices.map((office, i) => (
        <div key={i}>
          <div onClick={() => {
              showDoctors(office.id);
            }}>
            <div class="m-6 py-8 px-2 max-w-4xl mx-auto bg-white rounded-xl shadow-2xl  shadow-pink-500/40 space-y-2 sm:py-5 sm:flex sm:items-center sm:space-y-0 sm:space-x-5 flex items-center space-x-3">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={office.photo_url} />
            <h2 class="text-md text-black font-semibold">{office.name}</h2>
            <h3 class="text-slate-500 font-small">{office.location}</h3>
            <h4 class="text-slate-500 font-medium">{office.number}</h4>
            <button class="px-4 py-1 text-sm text-black bg-white border-black font-semibold rounded-full border border-purple-200 hover:text-gray-500 hover:bg-pink-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Go To Doctors</button>
          </div>
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