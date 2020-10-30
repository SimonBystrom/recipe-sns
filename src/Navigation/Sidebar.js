import React from 'react'
import {
    Link
  } from "react-router-dom"
import "./Sidebar.css"

  // Style Links properly

export default function  Sidebar(){
    return(
       
            <div>
                <ul>
                    <li id="Home">
                        <i className="ri-home-smile-line"></i>
                        <Link to="/">Home</Link>
                    </li>
                    <li id="NewRecipe">
                        <i className="ri-add-circle-line"></i>
                        <Link to="/newRecipe">New Recipe</Link>
                    </li>
                    <li id="Profile">
                        <i className="ri-user-line"></i>
                        <Link to="/profile">Profile</Link>
                    </li>
                    
                </ul>
            </div>
       
    )
}