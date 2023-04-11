import axios from "axios";
import { useState, useEffect } from "react";
import React from "react"

export default function Offices({ offices }) {

  const [displayOutput, setDisplayOutput] = useState([]);


  useEffect(() => {
    axios
      .get("https://localhost:8000/offices/")
      .then((response) => {
        displayOutput(response);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <header>Offices</header>
      {offices && offices.map((offices, id) => (
        <div key={id}>
          <div>
            <h2>{offices.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}




// import axios from "axios";
// import React from "react"

// export default function Offices (props) {
//     const displayOutput = ([])

//     axios
//   .get("https://localhost:8000/offices/")
//   .then((response) => {
//     displayOutput(response);
//   })
//   .catch((err) => console.log(err));
    
    
//         return (
//             <div>
//             <header> Offices </header>
//             {props.offices.map((offices, id) => (
//                 <div key={id}>
//                     <div>
//                     <h2>{offices.name}</h2>
//                     </div>
//                 </div>
//             ))}
//             </div>
//         )
//     }





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