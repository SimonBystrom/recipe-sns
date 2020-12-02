import React, {useState} from 'react'
import {useAsync} from 'react-use'
import "./css/SearchResults.css"
import SearchItem from "./SearchItem"

import {getRecipeData} from '../../getData'



export default function  SearchResults({searchTargetName, searchTargetTags, changeRecipePath, changeSelectedRecipeData}){
    const [searchResults, setSearchResults] = useState([])

    useAsync(async () => {
        if (searchTargetName !== null || searchTargetTags !== null) {
            const searchData = await getRecipeData(searchTargetName, searchTargetTags)
            setSearchResults(searchData)
            console.log(searchResults)
        } else {
            // set the search results to render nothing?? 
        }

    },[searchTargetName, searchTargetTags])
  
    

    let results = searchResults.map((item, index) => 
            <SearchItem 
                            Image={item.Image}
                            Author={item.Author}
                            Description={item.Description}
                            Ingredients={item.Ingredients}
                            RecipeName={item.RecipeName}
                            Id={item.Id}
                            Key={index}
                            changeRecipePath={changeRecipePath}
                            changeSelectedRecipeData={changeSelectedRecipeData}
            ></SearchItem>)

    return (
        <div className="SearchResultsContainer">
            {results}
        </div>
    )
    
}