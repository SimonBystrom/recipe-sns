import React from 'react'
import './css/SearchBar.css'
import {Link} from 'react-router-dom'



// Add drop down menu with checkbox items for tag searches 

export default function SearchBar({searchInput, changeSearchInput, changeSearchTarget, changeSearchTags, searchTags}){
  

    // sets the searchBarInput in real time
    function changeInput(e){
        const {value} = e.target
        changeSearchInput(value)
    }


    function addTag(e){
        let prevTags = searchTags
        let {value} = e.target

        if(e.target.checked){
            changeSearchTags([...prevTags, value])
        }
        if(!e.target.checked){
            changeSearchTags(prevTags.filter(tag => tag !== value))
        }
    }

    return(
       
        
        <form>
            <Link to="/">
                <input 
                    type="text" 
                    placeholder="Search" 
                    name="search" 
                    id="searchInput"
                    value={searchInput}
                    onChange={e => changeInput(e)}
                ></input>
            
                <button
                    id="searchButton"
                    onClick={() => changeSearchTarget(searchInput, searchTags)}
                ><i className="ri-search-line"></i>
                </button>
            </Link>
                <div className="Meats">
                    <input type="checkbox"  name="Beef" value="Beef" onChange={addTag}/>
                    <label htmlFor="Beef"> Beef</label>
                    <input type="checkbox"  name="Pork" value="Pork" onChange={addTag}/>
                    <label htmlFor="Pork"> Pork</label>
                    <input type="checkbox"  name="Chicken" value="Chicken" onChange={addTag}/>
                    <label htmlFor="Chicken"> Chicken</label>
                </div>
              
        </form>
        
       
             
       
    )
}