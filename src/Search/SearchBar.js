import React, {useContext} from 'react'
import './css/SearchBar.css'
import {Link} from 'react-router-dom'

import {UserContext} from '../userContext'


// Add drop down menu with checkbox items for tag searches 

export default function SearchBar(){
    const {changeSearchInput, searchInput, changeSearchTarget} = useContext(UserContext)

    // sets the searchBarInput in real time
    function changeInput(e){
        const {value} = e.target
        changeSearchInput(value)
    }
    return(
        <Link to="/">
            <form>
                <input 
                    type="text" 
                    placeholder="Search" 
                    name="search" 
                    id="searchInput"
                    value={searchInput}
                    onChange={e => changeInput(e)}
                ></input>
                <button
                    onClick={() => changeSearchTarget(searchInput)}
                ><i className="ri-search-line"></i></button>
            </form>
        </Link>
    )
}