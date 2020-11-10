import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import {auth} from '../firebase'





// Set up searchbar and where Profile name will go + Sign out button
export default function  Navbar(){

    const [isSignedIn, setIsSignedIn] = useState(undefined)

    // checks if user state has changed (current user logged in or not) through an observer on the firebase.auth()
    useEffect(
        ()=> { 
            auth.onAuthStateChanged((user) => setIsSignedIn(!!user))
            console.log(isSignedIn)
        });

    return(
        <div className="Container-Navbar">
           
            <Link to="/profile" id="profile">
            {isSignedIn !== undefined && !isSignedIn && <h5>User</h5>}
            {isSignedIn && <h5>{auth.currentUser.displayName}</h5>}
                
            </Link>
            <Link to="/searchResults" id="searchResults">
                <form>
                    <input type="text" placeholder="Search" name="search" id="searchInput"></input>
                    <button><i className="ri-search-line"></i></button>
                </form>
            </Link>
            <Link to="/login" id="login">
                <h5></h5>
            </Link>
        </div>
    )
}