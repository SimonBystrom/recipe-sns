import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import {auth} from '../firebase'

import {UserContext} from '../userContext'





// Set up searchbar and where Profile name will go + Sign out button
export default function  Navbar(){
    const {isSignedIn, user} = useContext(UserContext);


   

    return(
        <div className="Container-Navbar">
           
            <Link to="/profile" id="profile">
                {console.log(user.userName)}
                {console.log(user.userEmail)}
                {console.log(isSignedIn)}
            {!isSignedIn && <h5>User</h5>}
            {isSignedIn && <h5>{user.userName}</h5>}
                
            </Link>
            <Link to="/searchResults" id="searchResults">
                <form>
                    <input type="text" placeholder="Search" name="search" id="searchInput"></input>
                    <button><i className="ri-search-line"></i></button>
                </form>
            </Link>
            <Link to="/login" id="login">
                <h5>log</h5>
            </Link>
        </div>
    )
}