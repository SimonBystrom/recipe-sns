import React, {useState} from 'react'
import {storage} from '../firebase'

import Loading from '../Components/Loading'
import './css/RecipeImages.css'


/*
    NEEDS:
 
    display all recipes in an carousel 
*/

export default function LikedRecipes(props){
    const [imgPath, setImgPath] = useState()

    //Creates storage Reference with img path from props
    const storageRef = storage.ref('recipes/').child(props.Image)

    // downloads Useable imgPath from the storage reference and sets imgPath to said value
    storageRef.getDownloadURL()
    .then(url => {
        setImgPath(url)
    })


    return(
        <div >
            
            {imgPath ? <img className="RecipeImage" src={imgPath} alt=""></img> : <Loading />}
        </div>
    )
}