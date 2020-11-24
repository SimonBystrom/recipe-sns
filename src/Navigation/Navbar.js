import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import "./css/Navbar.css"
import {auth} from '../firebase'

import {UserContext} from '../userContext'
import SearchBar from '../Search/SearchBar'





// Set up searchbar and where Profile name will go + Sign out button
export default function  Navbar(){
    const {isSignedIn, user} = useContext(UserContext)




   

    return(
        <div className="Container-Navbar">
           
            <Link to="/profile" id="profile">
            {!isSignedIn && <h5>User</h5>}
            {isSignedIn && <h5>{user.userName}</h5>}
                
            </Link>
            <Link to="/searchResults" id="searchResults">
                <SearchBar/>
            </Link>
            <Link to="/login" id="login">
                <h5>log</h5>
            </Link>
        </div>
    )
}