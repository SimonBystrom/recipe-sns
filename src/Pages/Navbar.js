import React from 'react'
import {Link} from 'react-router-dom'


export default function  Navbar(){
    return(
        <div>
            <Link to="/profile">
                <h5>ProfileName</h5>
            </Link>
            <Link to="/searchResults">
                <h5>search</h5>
            </Link>
            <Link to="/signIn">
                <h5>sign in</h5>
            </Link>
        </div>
    )
}