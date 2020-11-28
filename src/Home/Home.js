import React, {useState} from 'react'
import './css/Home.css'

import SearchBar from '../Search/SearchBar'
import SearchResults from '../Search/SearchResults'


export default function Home(){
    const [searchInput, setSearchInput] = useState()
    const [searchTags, setSearchTags] = useState([])
    const [searchTargetName, setSearchTargetName] = useState(null)
    const [searchTargetTags, setSearchTargetTags] = useState(null)

    function changeSearchInput(value){
        setSearchInput(value)
        console.log("Search Input: " , searchInput)
    }

    function changeSearchTags(value){
        setSearchTags(value)
        console.log("Search Tags: ", searchTags)
    }

    function changeSearchTarget(nameInput, tagsInput) {
        setSearchTargetName(nameInput)
        setSearchTargetTags(tagsInput)
        console.log("Search Target is: ", nameInput , tagsInput)
    }

    return(
        <div className="SearchContainer">
            <div id="SearchBar">
                <SearchBar 
                    searchInput={searchInput}
                    changeSearchInput={changeSearchInput}
                    changeSearchTarget={changeSearchTarget}
                    changeSearchTags={changeSearchTags}
                    searchTags={searchTags}
                />
                {/* Tags */}
            </div>
            <SearchResults 
                searchTargetName={searchTargetName}
                searchTargetTags={searchTargetTags}
            id="SearchResults"/>
        </div>
    )
}

