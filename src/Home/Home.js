import React, {useState} from 'react'
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
import SelectedRecipe from './Search/SelectedRecipe'
import Loading from '../Components/Loading'



// FIX THE RE-RENDER ISSUE

export default function Home(){
    const [searchInput, setSearchInput] = useState("")
    const [searchTags, setSearchTags] = useState([])
    const [searchTargetName, setSearchTargetName] = useState(null)
    const [searchTargetTags, setSearchTargetTags] = useState(null)

    const [pathName, setPathName] = useState(useLocation().pathname)
    const [selectedRecipeData, setSelectedRecipeData] = useState(null)

    useAsync(async () => {
        // sets recipeID to match the path (that is the same as the ID of recipe), then removes the "/"
         let recipeID = pathName.split("/")[1]
         const data = await getSelectedRecipe(recipeID)
         setSelectedRecipeData(data)

    }, [pathName])


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
                <div>
                    {selectedRecipeData ? 
                        <SelectedRecipe 
                            Author={selectedRecipeData.Author}
                            Descriptions={selectedRecipeData.Descriptions}
                            Image={selectedRecipeData.Image}
                            Ingredients={selectedRecipeData.Ingredients}
                            RecipeName={selectedRecipeData.RecipeName}
                            
                        >
                        </SelectedRecipe> : <Loading />}
                    
                </div>
                
   
            </Route>

        </Switch>
        
    )
}

