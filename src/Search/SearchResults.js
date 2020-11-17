import React from 'react'
import "./css/SearchResults.css"
import SearchItem from "./SearchItem"

// When searchQuery is built, make it work

export default function  SearchResults(){

    // let results = /* listOfItemsFromSearchQuerry. */map(item => <SearchItem img={item.img}
    //                                                                 description={item.description}
    //                                                                 author={item.author}
    //                                                                 key={item.id}
    // ></SearchItem>)

    return (
        <div className="SearchResultsContainer">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />

        </div>
    )
    
}