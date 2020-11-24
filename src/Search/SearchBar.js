import React, {useContext} from 'react'

import {UserContext} from '../userContext'

export default function SearchBar(){
    const {changeSearchInput, searchInput, changeSearchTarget} = useContext(UserContext)

    // sets the searchBarInput in real time
    function changeInput(e){
        const {value} = e.target
        changeSearchInput(value)
    }
    return(
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
    )
}