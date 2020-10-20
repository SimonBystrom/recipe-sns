import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"


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