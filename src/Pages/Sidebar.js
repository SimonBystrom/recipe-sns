import React from 'react'
import {
    Link
  } from "react-router-dom"

  // Style Links properly

export default function  Sidebar(){
    return(
       
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        
                    </li>
                    <li>
                        <Link to="/newRecipe">New Recipe</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    
                </ul>
            </div>
       
    )
}