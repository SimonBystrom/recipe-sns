import React,{useContext, useEffect, useState} from 'react'
import {auth} from '../firebase'
import {Link} from 'react-router-dom'
import "./css/Navbar.css"

import {UserContext} from '../userContext'





// Set up searchbar and where Profile name will go + Sign out button
export default function  Navbar(){
    const {user} = useContext(UserContext)
    const [isSignedIn, setIsSignedIn] = useState(null)

    useEffect(
        ()=> { 
            auth.onAuthStateChanged((user) => setIsSignedIn(!!user))
        });

    return(
        <div className="Container-Navbar">
           
            <Link to="/profile" id="profile">
                
                {isSignedIn ? <h5>{user.userName}</h5> : <h5>User</h5>}
            </Link>

            <Link to="/login" id="login">
               
                {isSignedIn ? <h5>Logout</h5> : <h5>Login / Signup</h5>}
            </Link>
        </div>
    )
}