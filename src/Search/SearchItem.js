import React, {useState} from "react"
import "./css/SearchItem.css"
import {storage} from '../firebase'

export default function SearchItem(props){
    const [imgPath, setImgPath] = useState(null)

    //Creates storage Reference with img path from props
    const storageRef = storage.ref('recipes/').child(props.Image)

    // downloads Useable imgPath from the storage reference and sets imgPath to said value
    storageRef.getDownloadURL()
    .then(url => {
        setImgPath(url)
    })
    .catch(error => 
        console.log(error))

    return(
        <div className="SearchItemContainer">
            {imgPath !== null &&  
                <div className="SearchItemImg">
                    <img src={imgPath}></img>
                </div>
            }
            {
                imgPath === null && 
                <div className="SearchItemImg">
                    <p>loading...</p>
                </div>
            }
           
            <div className="SearchItemDescription">
                <h5>Description: {props.Description}</h5>
            </div>
            <div className="Author">
                <p>By: {props.Author}</p>
            </div>
        </div>
    )
}