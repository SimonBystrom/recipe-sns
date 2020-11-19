import React, {useState} from 'react'
import {storage} from '../firebase'


/*
    NEEDS:
    accept props for all recipes created by user 
    map over all the recipes and feed props into recipecomponent
    display all recipes in an carousel 
*/

export default function AccountRecipes(props){
    const [imgPath, setImgPath] = useState()

    //Creates storage Reference with img path from props
    const storageRef = storage.ref('recipes/').child(props.Image)

    // downloads Useable imgPath from the storage reference and sets imgPath to said value
    storageRef.getDownloadURL()
    .then(url => {
        setImgPath(url)
    })


    return(
        <div>
            {!imgPath && <p>loading..</p>}
            {imgPath && <img style={{width: "400px", height: "400px"}}src={imgPath}></img>}
        </div>
    )
}