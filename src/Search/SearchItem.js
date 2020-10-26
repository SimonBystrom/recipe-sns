import React from "react"
import "./SearchItem.css"

export default function SearchItem(props){

    return(
        <div className="SearchItemContainer">
            <div className="SearchItemImg">
                <img src={props.img}></img>
            </div>
            <div className="SearchItemDescription">
                <h5>Description{props.Description}</h5>
            </div>
            <div className="Author">
                <p>By: {props.Author}</p>
            </div>
        </div>
    )
}