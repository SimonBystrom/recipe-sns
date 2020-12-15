import React, {useState, useContext} from "react"
import {Link} from 'react-router-dom'
import "./css/SearchItem.css"
import {storage} from '../../firebase'
import {UserContext} from '../../userContext'


import useHover from '../../Hooks/useHover'
import addToFavorite from '../../HoverElements/addToFavorite'

export default function SearchItem(props){
    const [imgPath, setImgPath] = useState(null)
    const [isHovered, ref] = useHover()

    const {user} = useContext(UserContext)

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
        <Link 
                className="SearchItemContainer" to={`/${props.Id}`} 
                onClick={() => props.changePathName(props.Id)} 
                ref={ref}
        >
         
                {imgPath !== null &&  
                    <div className="SearchItemImg">
                        <img src={imgPath} alt=""></img>
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
                {addToFavorite(isHovered, props.Id, user.userID)}
        </Link>
    )
}