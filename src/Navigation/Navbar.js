import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

import checkForUser from '../LoginTest/checkForUser'




// Set up searchbar and where Profile name will go + Sign out button
export default function  Navbar(){

    return(
        <div className="Container-Navbar">
            
            <Link to="/profile" id="profile">
                <h5>User</h5>
            </Link>
            <Link to="/searchResults" id="searchResults">
                <form>
                    <input type="text" placeholder="Search" name="search" id="searchInput"></input>
                    <button><i className="ri-search-line"></i></button>
                </form>
            </Link>
            <Link to="/login" id="login">
                <h3>Sign in</h3>
            </Link>
        </div>
    )
}