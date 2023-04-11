import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Home () {

 
        return (
            <div className="search-container">
                        
            <input type="text" className="search-bar" placeholder="Type Specialty Here" name='searchBar'
            />
            <button type='button' className="searchbtn"> Search </button>

            </div>
        )

}