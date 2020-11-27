import React from 'react'
import './css/Home.css'

import SearchBar from '../Search/SearchBar'
import SearchResults from '../Search/SearchResults'


export default function Home(){

    return(
        <div className="SearchContainer">
            <div id="SearchBar">
                <SearchBar />
                {/* Tags */}
            </div>
            <SearchResults id="SearchResults"/>
        </div>
    )
}

