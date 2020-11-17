import React from "react"
import "./css/SearchItem.css"

export default function SearchItem(props){

    return(
        <div className="SearchItemContainer">
            <div className="SearchItemImg">
                <img src={props.img}></img>
            </div>
            <div className="SearchItemDescription">
                <h5>Description{props.description}</h5>
            </div>
            <div className="Author">
                <p>By: {props.author}</p>
            </div>
        </div>
    )
}