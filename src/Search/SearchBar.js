import React, {useContext} from 'react'
import './css/SearchBar.css'
import {Link} from 'react-router-dom'

import {UserContext} from '../userContext'


// Add drop down menu with checkbox items for tag searches 

export default function SearchBar({searchInput, changeSearchInput, changeSearchTarget}){
    // const {changeSearchInput, searchInput, changeSearchTarget} = useContext(UserContext)

    // sets the searchBarInput in real time
    function changeInput(e){
        const {value} = e.target
        changeSearchInput(value)
    }

    // function addTag(e){
    //     let prevTags = props.tags
    //     let {value} = e.target
    //     if(e.target.checked){
    //         props.changeTags([...prevTags, value])
    //     }
    //     if(!e.target.checked){
    //        props.changeTags(prevTags.filter(tag => tag !== value))
    //     }
    // }

    return(
        <Link to="/">
            <form>
                <input 
                    type="text" 
                    placeholder="Search" 
                    name="search" 
                    id="searchInput"
                    value={searchInput}
                    onChange={e => changeInput(e)}
                ></input>
                <button
                    onClick={() => changeSearchTarget(searchInput)}
                ><i className="ri-search-line"></i>
                </button>

                {/* <div className="Meats">
                    <input type="checkbox"  name="Beef" value="Beef" onChange={addTag}/>
                    <label for="Beef"> Beef</label>
                    <input type="checkbox"  name="Pork" value="Pork" onChange={addTag}/>
                    <label for="Pork"> Pork</label>
                    <input type="checkbox"  name="Chicken" value="Chicken" onChange={addTag}/>
                    <label for="Chicken"> Chicken</label>
                </div> */}
            </form>
        </Link>
    )
}