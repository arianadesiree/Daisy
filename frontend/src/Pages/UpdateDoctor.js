import Client from "../services/api";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
// import { AppContext } from "../Context/AppContext";

export default function UpdateDoctor () {
    const { id } = useParams();
    let location = useLocation()

    let doctor = location.state.doctor

      console.log(doctor)

    const [formData, setFormData] = useState({
          name: doctor.name,
          location: doctor.location,
          description: doctor.description,
          gender: doctor.gender,
          image_url: doctor.image_url,
      });


      const handleChange = (e) => {
        // const { id, value } = e.target;
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      };

    const handleUpdateDoctor = () => {
        console.log(formData)
        Client.put(`/doctors/${id}`, formData)
        //   .then(() => {
        //     navigate(`/doctors/`);
        //     window.location.reload();
        //   })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateDoctor();
        // navigate(`/doctors/`);
      };

      if (!doctor) return null; // add guard to prevent rendering if doctors is null


  return (
    <form onSubmit={handleSubmit}>
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
    <button onClick={handleSubmit} type="submit">Update Doctor</button>
  </form>

  )
}
