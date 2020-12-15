import React from 'react'

import {addFavorite} from '../saveData'

export default function addToFavorite(isHovered, recipeID, userID){

    if(isHovered){
    return(
        <div className="Favorite"
            onClick={() => addFavorite(recipeID, userID)}
        
        ><i className="ri-star-fill"></i></div>
        
    )
    }
}