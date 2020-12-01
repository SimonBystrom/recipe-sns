import React, {useState} from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom"
import './css/Home.css'

import SearchBar from './Search/SearchBar'
import SearchResults from './Search/SearchResults'


export default function Home(){
    const [searchInput, setSearchInput] = useState("")
    const [searchTags, setSearchTags] = useState([])
    const [searchTargetName, setSearchTargetName] = useState(null)
    const [searchTargetTags, setSearchTargetTags] = useState(null)
    const [recipeIDpath, setRecipeIDpath] = useState(null)

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

    function changeRecipePath(value){
        setRecipeIDpath(value)
        console.log(recipeIDpath)
    }

    return(

        <Switch>
            <Route exact path="/">
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
                        changeRecipePath={changeRecipePath}
                    id="SearchResults"/>
                </div>
            </Route>
            <Route path={`/${recipeIDpath}`}>
                Make this route show the search Item with that was clicked!
                <div>You are now at recipe Path {recipeIDpath}</div>
            </Route>

        </Switch>
        
    )
}

