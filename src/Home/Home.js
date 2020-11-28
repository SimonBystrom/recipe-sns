import React, {useState} from 'react'
import './css/Home.css'

import SearchBar from '../Search/SearchBar'
import SearchResults from '../Search/SearchResults'


export default function Home(){
    const [searchInput, setSearchInput] = useState()
    const [searchTarget, setSearchTarget] = useState(null)

    function changeSearchInput(value){
        setSearchInput(value)
        console.log(searchInput)
    }

    function changeSearchTarget(value) {
        setSearchTarget(value)
        console.log("Search Target is: ", value)
    }

    return(
        <div className="SearchContainer">
            <div id="SearchBar">
                <SearchBar 
                    searchInput={searchInput}
                    changeSearchInput={changeSearchInput}
                    changeSearchTarget={changeSearchTarget}
                />
                {/* Tags */}
            </div>
            <SearchResults 
                searchTarget={searchTarget}
            id="SearchResults"/>
        </div>
    )
}

