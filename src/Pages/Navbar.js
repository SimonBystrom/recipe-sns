import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"


// Set up searchbar and where Profile name will go + Sign out button
export default function  Navbar(){
    return(
        <div className="Container-Navbar">
            
            <Link to="/profile" id="profile">
                <h5>ProfileName</h5>
            </Link>
            <Link to="/searchResults" id="searchResults">
                <form>
                    <input type="text" placeholder="Search" name="search"></input>
                    <button><i className="ri-search-line"></i></button>
                </form>
            </Link>
            <Link to="/signIn" id="signIn">
                <h5>sign in</h5>
            </Link>
        </div>
    )
}