import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Client from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CreateDoctor() {

    const navigate = useNavigate();
    // const BASE_URL = "http://localhost:8000"

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        description: "",
        gender: "",
        image_url: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };

    const handleSubmit = () => {
        console.log(formData)
        Client.post(`/doctors/`, formData)
        //   .then(() => {
        //     navigate(`/doctors/`);
        //   })
          .catch((error) => {
            console.log(error);
          });
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit();
        // navigate(`/doctors/`);
        // window.location.reload()
      };
    

  return (
    <form onSubmit={handleFormSubmit}>
    <div>
      <label htmlFor="name">
        Full Name:
      </label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Full Name"
      />
    </div>
    <div>
      <label htmlFor="location">
        Location:
      </label>
      <input
        id="location"
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Enter Office Name"
      />
    </div>
     <div>
      <label
      htmlFor="description"
      >
        Description:
      </label>
      <input
        id="description"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Biography"
      />
    </div>
    <div>
      <label
     htmlFor="gender"
      >
        Gender:
      </label>
      <input
        id="gender"
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        placeholder="Gender"
      />
    </div>
    <div>
      <label
     htmlFor="image_url"
      >
        Image URL:
      </label>
      <input
        id="image_url"
        type="text"
        name="image_url"
        value={formData.image_url}
        onChange={handleChange}
        placeholder="Image URL"
      />
    </div>
    <button onClick={handleFormSubmit} type="submit">Create</button>
  </form>


  )
}

// const postData = () => {
    //     axios.post(`${BASE_URL}`, {
    //         name,
    //         location,
    //         description,
    //         specialty
    //     })
    // }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post(`${BASE_URL}/createdoctor/`, {
    //       name,
    //       location,
    //       description,
    //       specialty
    //     })
    //       .then(response => {
    //         console.log(response.data);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   }