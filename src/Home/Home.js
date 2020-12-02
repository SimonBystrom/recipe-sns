import React, {useState} from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom"
import './css/Home.css'

import SearchBar from './Search/SearchBar'
import SearchResults from './Search/SearchResults'


// Fix so reloading the home page when on the selected recipe path won't reset state to null making the page not load properly

export default function Home(){
    const [searchInput, setSearchInput] = useState("")
    const [searchTags, setSearchTags] = useState([])
    const [searchTargetName, setSearchTargetName] = useState(null)
    const [searchTargetTags, setSearchTargetTags] = useState(null)
    const [recipeIDpath, setRecipeIDpath] = useState(null)

    const [selectedRecipeData, setSelectedRecipeData] = useState(null)

    function changeSearchInput(value){
        setSearchInput(value)
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

    function changeSelectedRecipeData(value){
        setSelectedRecipeData(value)
        console.log(selectedRecipeData)
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
                    </div>
                    <SearchResults 
                        searchTargetName={searchTargetName}
                        searchTargetTags={searchTargetTags}
                        changeRecipePath={changeRecipePath}
                        changeSelectedRecipeData={changeSelectedRecipeData}
                    id="SearchResults"/>
                </div>
            </Route>
            <Route path={`/${recipeIDpath}`}>
                {/* Make this route show the search Item with that was clicked! */}
                <div>You are now at recipe Path {recipeIDpath}</div>
    <div>{ selectedRecipeData ? selectedRecipeData.RecipeName : null}{console.log(selectedRecipeData)}</div>
            </Route>

        </Switch>
        
    )
}

