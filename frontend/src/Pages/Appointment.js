import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Appointment() {

  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    visit: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (

    <div class="bg-neutral-500 h-screen pl-96">
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-4 md:space-y-6" action="#">
        <div>
          <label htmlFor="name" class="block mb-2 text-md font-medium text-gray-900 dark:text-white"> Full Name </label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Jane Doe"
            value={formValues.name}
            required
          />
        </div>
      
        <div className="input-wrapper">
          <label htmlFor="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white"> Email </label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" class="block mb-2 text-md font-medium text-gray-900 dark:text-white"> Phone Number </label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            name="phone"
            type="text"
            placeholder="xxx xxx xxxx"
            value={formValues.phone}
            required
          />
        </div>
        <div>
          <label htmlFor="visit" class="block mb-2 text-md font-medium text-gray-900 dark:text-white"> Reason for Visit </label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            name="visit"
            type="text"
            placeholder=" ..."
            value={formValues.visit}
            required
          />
        </div>
        <div class="pl-40">
        <button type='submit' class="text-black bg-pink-300 hover:bg-primary-700 focus:ring-4 focus:outline-black focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Contact Now
        </button>
        </div>
      </form>
    </div>
  </div>
)
}
