import React, {useEffect, useState} from 'react'
import {
    Switch,
    Route,
    useLocation
  } from "react-router-dom"
import {useAsync} from 'react-use'
import './css/Home.css'
import {getSelectedRecipe} from '../getData'

import SearchBar from './Search/SearchBar'
import SearchResults from './Search/SearchResults'


// Fix so reloading the home page when on the selected recipe path won't reset state to null making the page not load properly

// Set a firestore query that finds the exact match of current path and sets that as the path ->
// takes the info from returned object and display

export default function Home(){
    const [searchInput, setSearchInput] = useState("")
    const [searchTags, setSearchTags] = useState([])
    const [searchTargetName, setSearchTargetName] = useState(null)
    const [searchTargetTags, setSearchTargetTags] = useState(null)

    const [pathName, setPathName] = useState(useLocation().pathname)
    const [selectedRecipeData, setSelectedRecipeData] = useState(null)

  useEffect(() => {
      
  })
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

    function changePathName(value){
        setPathName("/" + value)
    }


    useAsync(async () => {
        if(pathName.length > 2){
            // sets recipeID to match the path (that is the same as the ID of recipe), then removes the "/"
            // let recipeID = pathName.split("/")[1]
            // const data = await getSelectedRecipe(recipeID)
            // setSelectedRecipeData(data)
        }
        console.log(selectedRecipeData)
    }, [])

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
                        changePathName={changePathName}
                        id="SearchResults"/>
                </div>
            </Route>
            <Route path={pathName}>
                {/* Make this route show the search Item with that was clicked! */}
    <div>You are now at recipe Path {pathName}{console.log(selectedRecipeData)}</div>
                
   
            </Route>

        </Switch>
        
    )
}

