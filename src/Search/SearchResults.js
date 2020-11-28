import React, {useState, useContext} from 'react'
import {useAsync} from 'react-use'
import "./css/SearchResults.css"
import SearchItem from "./SearchItem"

import {UserContext} from '../userContext'
import {getRecipeData} from '../getData'

// When searchQuery is built, make it work

export default function  SearchResults({searchTarget}){
    // const {searchTarget} = useContext(UserContext)
    const [searchResults, setSearchResults] = useState([])

    useAsync(async () => {
        if (searchTarget !== null) {
            const searchData = await getRecipeData(searchTarget)
            setSearchResults(searchData)
            console.log(searchResults)
        } else {
            // set the search results to render nothing?? 
        }

    },[searchTarget])
  
    

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