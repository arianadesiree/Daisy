import React from "react";
import { useState } from "react";
import axios from "axios";
import newquote from "../assets/newquote.png";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
 
const Home = ({offices}) => {

    const [specialty, setSpecialty] = useState('');
    const [results, setResults] = useState([]);
    let navigate = useNavigate();
  
    const handleChange = (event) => {
      const value = event.target.value;
      setSpecialty(value);
      if (value === '') {
        setResults([]);
        return;
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (specialty === '') {
        setResults([]);
        return;
      }
  
      axios.get(`http://localhost:8000/offices?specialty=${specialty}`)
        .then((response) => {
          setResults(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

     const search = query => {
        return results.filter(office => office.specialty.toLowerCase().includes(query.toLowerCase()));
      }

      const showDoctors = (id) => {
        navigate(`${id}`);
      };
 
        return (
          
          <div>
               {/* <img class="flex items-center" src={newquote}/> */}
                <form class="flex justify-center" onSubmit={handleSubmit}>
              <label class="my-7">
                Search by Specialty:
                <input type="text"
                class="my-1 mx-9 form-control relative flex-auto min-w-0 block w-full px-20 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none" placeholder="menopause, pregnancy, biote, etc." aria-label="Search" aria-describedby="button-addon2"
                value={specialty} onChange={handleChange} />
              </label>
              <button type="submit"
              class="h-10 btn px-5 py-5 my-12 mx-10 bg-rose-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-500 hover:shadow-xl focus:bg-rose-300  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-400 active:shadow-lg transition duration-150 ease-in-out flex items-center" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
                </button>
            </form>
            {search(specialty).map((result) => (
              <div key={result.id}>
                <div onClick={() => {
              showDoctors(result.id);
            }}>
              <div class="m-6 py-8 px-2 max-w-3xl mx-auto bg-white rounded-xl shadow-2xl  shadow-pink-500/40 space-y-2 sm:py-5 sm:flex sm:items-center sm:space-y-0 sm:space-x-5 flex items-center space-x-3">
                <h2 class="text-md text-black font-semibold">{result.name}</h2>
                <p class="text-slate-500 font-small">Specialty: {result.specialty}</p>
                <p class="text-slate-500 font-small">{result.location}</p>
                <button class="px-4 py-1 text-sm text-black bg-white border-black font-semibold rounded-full border border-purple-200 hover:text-gray-500 hover:bg-pink-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Go To Doctors</button>
              </div>
              </div>
              </div>
            ))}
          </div>
        );
      };

export default Home;