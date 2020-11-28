import React, {useState} from 'react'
import {useAsync} from 'react-use'
import "./css/SearchResults.css"
import SearchItem from "./SearchItem"

import {getRecipeData} from '../getData'



export default function  SearchResults({searchTargetName, searchTargetTags}){
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
  
    

    let results = searchResults.map(item => 
            <SearchItem 
                            Image={item.Image}
                            Author={item.Author}
                            Description={item.Description}
                            Ingredients={item.Ingredients}
                            RecipeName={item.RecipeName}
                            Key={10000 * Math.random()}
            ></SearchItem>)

    return (
        <div className="SearchResultsContainer">
            {results}
        </div>
    )
    
}