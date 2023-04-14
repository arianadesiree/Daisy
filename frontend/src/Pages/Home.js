import React from "react";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import quote from "../assets/quote.png";

const Home = () => {

    const [specialty, setSpecialty] = useState('');
    const [results, setResults] = useState([]);
    // const BASE_URL = "http://localhost:8000"
  
    const handleChange = (event) => {
      setSpecialty(event.target.value);
    };

  
    const handleSubmit = (event) => {
      event.preventDefault();

  
      axios.get(`http://localhost:8000/offices?specialty=${specialty}`)
        .then((response) => {
          setResults(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
 
        return (
            <div>
                <img className="logo" src={logo}/>
                <img className="quote" src={quote}/>
            <form onSubmit={handleSubmit}>
              <label>
                Search by Specialty:
                <input type="text" value={specialty} onChange={handleChange} />
              </label>
              <button type="submit">Search</button>
            </form>
      
            {results.map((result) => (
              <div key={result.id}>
                <h2>{result.name}</h2>
                <p>{result.specialty}</p>
                <p>{result.location}</p>
              </div>
            ))}
          </div>
        );
      };

export default Home;


// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import logo from "../assets/logo.png";
// import quote from "../assets/quote.png"

// export default function Home () {

 
//         return (
//             <div>
//             <img className="logo" src={logo}/>
//             <img className="quote" src={quote}/>

//             <section className="search-container">
                        
//             <input type="text"
//             className="search-bar"
//             placeholder="Type Specialty Here" name='searchBar'
//             />
//             <button type='button'
//             className="searchbtn"> Search </button>

//             </section>
//             </div>
//         )

// }