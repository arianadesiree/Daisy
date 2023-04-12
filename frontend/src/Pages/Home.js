import React from "react";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import quote from "../assets/quote.png"

export default function Home () {

 
        return (
            <div>
            <img className="logo" src={logo}/>
            <img className="quote" src={quote}/>

            <section className="search-container">
                        
            <input type="text" className="search-bar" placeholder="Type Specialty Here" name='searchBar'
            />
            <button type='button' className="searchbtn"> Search </button>

            </section>
            </div>
        )

}